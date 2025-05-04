const { COURSE } = require( "../MySql/courseModel.js");
const { GeneralInfo } = require("../MySql/userModel.js");

async function PostUserDetailsReqRes(req, res) {
    console.log("Gotcha")
    const {
        name, enrollmentNumber, gender, mobileNumber,
        fatherName, f_occupation, mothersName, m_occupation, f_mobileNumber, course_name, program, year, semester,
        address, city, pincode, busFacility, busStop, course_id // Added course_id
    } = req.body;

    try {
        console.log(req.body)
        const newUser = await GeneralInfo.create({
            name, enrollmentNumber, gender, mobileNumber,
            fatherName, f_occupation, mothersName, m_occupation, f_mobileNumber, course_name, program, year, semester,
            address, city, pincode, busFacility : busFacility || false , busStop : busStop || false
        });

        const newRegistredStudent = await COURSE.increment('total_registered_students', {
            by: 1,
            where: { course_id } // Fixed course_id usage
        });

        return res.status(201).json({ msg: "User created successfully!", user: newUser });
    } catch (error) {
        console.error("Sequelize Error:", error);
        return res.json({ msg: "User Already Exists" });
    }
}


async function GetUserDetailsReqRes(req, res) {
    try {
        const users = await GeneralInfo.findAll();
        return res.status(200).json(users);
    } catch (error) {
        console.error("Sequelize Fetch Error:", error);
        return res.status(500).json({ msg: "Internal server error", error });
    }
}

async function GetSingleUserByEnrollmentReqRes(req, res) {
    const { enrollmentNumber } = req.params;

    try {
        const user = await GeneralInfo.findByPk(enrollmentNumber);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        return res.status(200).json(user);
    } catch (error) {
        console.error("Sequelize Fetch Error:", error);
        return res.status(500).json({ msg: "Internal server error", error });
    }
}

async function UpdateUserDetailsReqRes(req, res) {
    const { enrollmentNumber } = req.params;
    const updatedData = req.body;

    try {
        const [updated] = await GeneralInfo.update(updatedData, {
            where: { enrollmentNumber }
        });

        if (updated === 0) {
            return res.status(404).json({ msg: "User not found or no change made" });
        }

        const updatedUser = await GeneralInfo.findByPk(enrollmentNumber);
        return res.status(200).json({ msg: "User updated successfully", user: updatedUser });
    } catch (error) {
        console.error("Sequelize Update Error:", error);
        return res.status(500).json({ msg: "Internal server error", error });
    }
}

async function FilterUsersByCourseOrSemester(req, res) {
    const { course_name, semester } = req.query; // Changed course_id to course_name

    try {
        const users = await GeneralInfo.findAll({
            where: {
                ...(course_name && { course_name }), // Updated to use course_name
                ...(semester && { semester })
            }
        });

        return res.status(200).json(users);
    } catch (error) {
        console.error("Sequelize Filter Error:", error);
        return res.status(500).json({ msg: "Internal server error", error });
    }
}


module.exports = {
    PostUserDetailsReqRes,
    GetUserDetailsReqRes,
    GetSingleUserByEnrollmentReqRes,
    UpdateUserDetailsReqRes,
    FilterUsersByCourseOrSemester
};

