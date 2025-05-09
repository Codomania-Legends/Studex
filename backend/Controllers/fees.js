const { FEES } = require("../MySql/feesModel.js");

// ✅ Create a new fee record
async function PostFeeDetailsReqRes(req, res) {
    const {
        enrollment_no,
        course_name,
        course_id,
        total_course_fee,
        semester_1_fee,
        semester_2_fee,
        semester_3_fee,
        semester_4_fee,
        semester_5_fee,
        semester_6_fee,
        semester_7_fee,
        semester_8_fee
    } = req.body;

    if (!enrollment_no || !course_name || !course_id || !total_course_fee) {
        return res.status(400).json({ msg: "Missing required fields" });
    }

    try {
        const newFee = await FEES.create({
            enrollment_no,
            course_name,
            course_id,
            total_course_fee,
            semester_1_fee,
            semester_2_fee,
            semester_3_fee,
            semester_4_fee,
            semester_5_fee,
            semester_6_fee,
            semester_7_fee,
            semester_8_fee
        });

        return res.status(201).json({ msg: "Fee details added successfully!", fee: newFee });
    } catch (error) {
        console.error("Sequelize Error:", error);
        if (error.name === "SequelizeValidationError") {
            return res.status(400).json({ msg: "Validation error", error });
        }
        return res.status(500).json({ msg: "Internal server error", error });
    }
}

// 📋 Get all fee records
async function GetAllFeesReqRes(req, res) {
    try {
        const fees = await FEES.findAll();
        return res.status(200).json(fees);
    } catch (error) {
        console.error("Sequelize Fetch Error:", error);
        return res.status(500).json({ msg: "Internal server error", error });
    }
}

// 🔍 Get fee record by enrollment number
async function GetFeeByCourseId(req, res) {
    const { course_id } = req.params;

    if (!course_id) {
        return res.status(400).json({ msg: "Enrollment number is required" });
    }

    try {
        const fee = await FEES.findOne({ where: { course_id } });
        if (!fee) {
            return res.status(404).json({ msg: "Fee record not found" });
        }
        return res.status(200).json(fee);
    } catch (error) {
        console.error("Sequelize Fetch Error:", error);
        return res.status(500).json({ msg: "Internal server error", error });
    }
}

// ✏️ Update fee record by enrollment number
async function UpdateFeeDetailsReqRes(req, res) {
    const { enrollment_no } = req.params;
    const updatedData = req.body;

    if (!enrollment_no) {
        return res.status(400).json({ msg: "Enrollment number is required" });
    }

    if (!updatedData || Object.keys(updatedData).length === 0) {
        return res.status(400).json({ msg: "No data provided for update" });
    }

    try {
        const [updated] = await FEES.update(updatedData, {
            where: { enrollment_no }
        });

        if (updated === 0) {
            return res.status(404).json({ msg: "Fee record not found or no update made" });
        }

        const updatedFee = await FEES.findOne({ where: { enrollment_no } });
        return res.status(200).json({ msg: "Fee record updated successfully", fee: updatedFee });
    } catch (error) {
        console.error("Sequelize Update Error:", error);
        return res.status(500).json({ msg: "Internal server error", error });
    }
}

// ❌ Delete fee record by enrollment number
async function DeleteFeeRecordReqRes(req, res) {
    const { enrollment_no } = req.params;

    if (!enrollment_no) {
        return res.status(400).json({ msg: "Enrollment number is required" });
    }

    try {
        const deleted = await FEES.destroy({
            where: { enrollment_no }
        });

        if (deleted === 0) {
            return res.status(404).json({ msg: "Fee record not found" });
        }

        return res.status(200).json({ msg: "Fee record deleted successfully" });
    } catch (error) {
        console.error("Sequelize Delete Error:", error);
        return res.status(500).json({ msg: "Internal server error", error });
    }
}

// 📦 Export all functions
module.exports = {
    PostFeeDetailsReqRes,
    GetAllFeesReqRes,
    GetFeeByCourseId,
    UpdateFeeDetailsReqRes,
    DeleteFeeRecordReqRes
};
