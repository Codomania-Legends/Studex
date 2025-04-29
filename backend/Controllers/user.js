const { GeneralInfo } = require("../MySql/userModel.js");

async function PostUserDetailsReqRes(req, res) {
    const {
        name, enrollmentNumber, gender, mobileNumber,
        fatherName, f_occupation, mothersName, m_occupation, f_mobileNumber,
        course_id, course_name, program, year, semester,
        address, city, pincode, busFacility, busStop
    } = req.body;

    try {
        const newUser = await GeneralInfo.create({
            name, enrollmentNumber, gender, mobileNumber,
            fatherName, f_occupation, mothersName, m_occupation, f_mobileNumber,
            course_id, course_name, program, year, semester,
            address, city, pincode, busFacility, busStop
        });

        return res.status(201).json({ msg: "User created successfully!", user: newUser });
    } catch (error) {
        console.error("Sequelize Error:", error);
        return res.status(500).json({ msg: "Internal server error", error });
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
    const { course_id, semester } = req.query;

    try {
        const users = await GeneralInfo.findAll({
            where: {
                ...(course_id && { course_id }),
                ...(semester && { semester })
            }
        });

        return res.status(200).json(users);
    } catch (error) {
        console.error("Sequelize Filter Error:", error);
        return res.status(500).json({ msg: "Internal server error", error });
    }
}


export default {
    PostUserDetailsReqRes,
    GetUserDetailsReqRes,
    GetSingleUserByEnrollmentReqRes,
    UpdateUserDetailsReqRes,
    DeleteUserReqRes,
    FilterUsersByCourseOrSemester
};

