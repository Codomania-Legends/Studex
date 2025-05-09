const { COURSE } = require("../MySql/courseModel.js");
const { FEES } = require("../MySql/feesModel.js");
const { GeneralInfo, ParentInfo, AddressInfo, BusInfo } = require("../MySql/userModel.js");

// Function to create a new user and associated details
async function PostUserDetailsReqRes(req, res) {
    const {
        name, enrollmentNumber, gender, mobileNumber,
        fatherName, f_occupation, mothersName, m_occupation, f_mobileNumber, course_name, program, year, semester,
        address, city, pincode, busFacility, busStop
    } = req.body;

    try {
        const courseMapping = {
            "Bachelor of Computer Science": 101,
            "Bachelor of Business Administration": 102,
            "Bachelor of Engineering in Mechanical": 103,
            "Bachelor of Technology in AI & ML": 104,
            "Bachelor of Arts in Psychology": 105,
        };

        const course_id = courseMapping[course_name] || null;
        const newUser = await GeneralInfo.create({
            name, enrollmentNumber, gender, mobileNumber,
            fatherName, f_occupation, mothersName, m_occupation, f_mobileNumber, course_name, program, year, semester,
            address, city, pincode, busFacility: busFacility || false, busStop: busStop || false, course_id
        });

        await COURSE.increment('total_registered_students', {
            by: 1,
            where: { course_id }
        });

        await ParentInfo.create({
            enrollmentNumber,
            fatherName,
            mothersName,
            f_occupation,
            m_occupation,
            f_mobileNumber: mobileNumber
        });

        await AddressInfo.create({
            enrollmentNumber,
            address,
            city,
            pincode
        });

        await BusInfo.create({
            enrollmentNumber,
            busFacility: busFacility || null,
            busStop: busStop || null
        });

        return res.status(201).json({ msg: "User created successfully!", user: newUser });
    } catch (error) {
        return res.json({ msg: "User Already Exists" });
    }
}

// Function to fetch all users along with their associated details
async function GetUserDetailsReqRes(req, res) {
    try {
        const users = await GeneralInfo.findAll();
        const courses = await COURSE.findAll();
        const parentInfo = await ParentInfo.findAll();
        const feesDetails = await FEES.findAll();
        const addressInfo = await AddressInfo.findAll();
        const busInfo = await BusInfo.findAll();

        const combinedData = users.map(user => {
            const course = courses.find(c => c.course_id === user.course_id);
            const parent = parentInfo.find(p => p.enrollmentNumber === user.enrollmentNumber);
            const fees = feesDetails.find(f => f.enrollmentNumber === user.enrollmentNumber);
            const address = addressInfo.find(a => a.enrollmentNumber === user.enrollmentNumber);
            const bus = busInfo.find(b => b.enrollmentNumber === user.enrollmentNumber);

            return {
                ...user.dataValues,
                courseDetails: course ? course.dataValues : null,
                parentInfo: parent ? parent.dataValues : null,
                feesDetails: fees ? fees.dataValues : null,
                addressInfo: address ? address.dataValues : null,
                busInfo: bus ? bus.dataValues : null
            };
        });

        return res.status(200).json(combinedData);
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error", error });
    }
}

// Function to fetch a single user by their enrollment number
async function GetSingleUserByEnrollmentReqRes(req, res) {
    const { enrollmentNumber } = req.params;

    try {
        const user = await GeneralInfo.findByPk(enrollmentNumber);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ msg: "Internal server error", error });
    }
}

// Function to update user details by their enrollment number
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
        return res.status(500).json({ msg: "Internal server error", error });
    }
}

// Function to filter users by course name or semester
async function FilterUsersByCourseOrSemester(req, res) {
    const { course_name, semester } = req.query;

    try {
        const users = await GeneralInfo.findAll({
            where: {
                ...(course_name && { course_name }),
                ...(semester && { semester })
            }
        });

        return res.status(200).json(users);
    } catch (error) {
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

