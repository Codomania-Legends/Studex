const { DataTypes } = require("sequelize");
const { sequelize } = require("./connection");

const COURSE = sequelize.define("course_details", {
    course_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    course_name: { type: DataTypes.STRING, allowNull: false },
    duration: { type: DataTypes.INTEGER, allowNull: false },
    total_registered_students: { type: DataTypes.INTEGER, defaultValue: 0 },
}, { freezeTableName: true });

module.exports = {
    COURSE
};
