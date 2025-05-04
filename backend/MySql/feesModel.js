const { DataTypes } = require("sequelize");
const { sequelize } = require("./connection");

const FEES = sequelize.define("fees_details", {
  enrollment_no: {
    type: DataTypes.STRING,
    references: {
      model: "GeneralInfo", // Must match model name
      key: "enrollmentNumber",
    },
  },
  course_name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  course_id: {
    type: DataTypes.INTEGER, // FIXED from STRING to INTEGER
    references: {
      model: "course_details", // Must match the model name or table name if freezeTableName is true
      key: "course_id",
    },
  },
  total_course_fee: DataTypes.INTEGER,
  semester_1_fee: DataTypes.STRING,
  semester_2_fee: DataTypes.STRING,
  semester_3_fee: DataTypes.STRING,
  semester_4_fee: DataTypes.STRING,
  semester_5_fee: DataTypes.STRING,
  semester_6_fee: DataTypes.STRING,
  semester_7_fee: DataTypes.STRING,
  semester_8_fee: DataTypes.STRING,
}, {
  freezeTableName: true, // ✅ Ensures consistent naming
});

module.exports = {
  FEES
};
