const { COURSE } = require("../MySql/courseModel.js");

// ✅ Create a new course
async function PostCourseDetailsReqRes(req, res) {
    const {
        course_id,
        course_name,
        total_registered_students = 0, // Default to 0
        course_duration_years,
        name,
        enrollmentNumber,
        gender,
        mobileNumber,
        fatherName,
        f_occupation,
        mothersName,
        m_occupation,
        f_mobileNumber,
        program,
        year,
        semester,
        address,
        city,
        pincode,
        busFacility,
        busStop
    } = req.body;

    if (!course_duration_years || isNaN(course_duration_years)) {
        return res.status(400).json({ msg: "Invalid or missing course_duration_years" });
    }

    try {
        const newCourse = await COURSE.create({
            course_id,
            course_name,
            total_registered_students,
            course_duration_years,
            total_semesters: course_duration_years * 2,
            name,
            enrollmentNumber,
            gender,
            mobileNumber,
            fatherName,
            f_occupation,
            mothersName,
            m_occupation,
            f_mobileNumber,
            program,
            year,
            semester,
            address,
            city,
            pincode,
            busFacility : busFacility || false,
            busStop : busStop || false
        });

        return res.status(201).json({ msg: "Course created successfully!", course: newCourse });
    } catch (error) {
        console.error("Sequelize Error:", error);
        return res.status(500).json({ msg: "Internal server error", error });
    }
}

// 📋 Get all courses
async function GetAllCoursesReqRes(req, res) {
    try {
        const courses = await COURSE.findAll();
        return res.status(200).json(courses);
    } catch (error) {
        console.error("Sequelize Fetch Error:", error);
        return res.status(500).json({ msg: "Internal server error", error });
    }
}

// 🔍 Get a course by ID
async function GetSingleCourseReqRes(req, res) {
    const { course_id } = req.params;

    if (!course_id) {
        return res.status(400).json({ msg: "Course ID is required" });
    }

    try {
        const course = await COURSE.findByPk(course_id);
        if (!course) {
            return res.status(404).json({ msg: "Course not found" });
        }
        return res.status(200).json(course);
    } catch (error) {
        console.error("Sequelize Fetch Error:", error);
        return res.status(500).json({ msg: "Internal server error", error });
    }
}

// ✏️ Update a course by ID
async function UpdateCourseReqRes(req, res) {
    const { course_id } = req.params;
    const updatedData = req.body;

    if (!course_id) {
        return res.status(400).json({ msg: "Course ID is required" });
    }

    if (!updatedData || Object.keys(updatedData).length === 0) {
        return res.status(400).json({ msg: "No data provided for update" });
    }

    try {
        const [updated] = await COURSE.update(updatedData, {
            where: { course_id }
        });

        if (updated === 0) {
            return res.status(404).json({ msg: "Course not found or no update made" });
        }

        const updatedCourse = await COURSE.findByPk(course_id);
        return res.status(200).json({ msg: "Course updated successfully", course: updatedCourse });
    } catch (error) {
        console.error("Sequelize Update Error:", error);
        return res.status(500).json({ msg: "Internal server error", error });
    }
}

// ❌ Delete a course by ID
async function DeleteCourseReqRes(req, res) {
    const { course_id } = req.params;

    if (!course_id) {
        return res.status(400).json({ msg: "Course ID is required" });
    }

    try {
        const deleted = await COURSE.destroy({
            where: { course_id }
        });

        if (deleted === 0) {
            return res.status(404).json({ msg: "Course not found" });
        }

        return res.status(200).json({ msg: "Course deleted successfully" });
    } catch (error) {
        console.error("Sequelize Delete Error:", error);
        return res.status(500).json({ msg: "Internal server error", error });
    }
}

// 📦 Export all functions
module.exports = {
    PostCourseDetailsReqRes,
    GetAllCoursesReqRes,
    GetSingleCourseReqRes,
    UpdateCourseReqRes,
    DeleteCourseReqRes
};
