const { DataTypes } = require("sequelize");
const { sequelize } = require("./connection");

const GeneralInfo = sequelize.define("GeneralInfo", {
    enrollmentNumber: { type: DataTypes.STRING, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    gender: { type: DataTypes.STRING, allowNull: false },
    mobileNumber: { type: DataTypes.BIGINT, allowNull: false, validate: { isNumeric: true } },
    course_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "course_details",
            key: "course_id",
        },
    },
    course_name: { type: DataTypes.STRING }, // Added course_name field
    program: { type: DataTypes.STRING },
    year: { type: DataTypes.INTEGER, validate: { isInt: true } },
    semester: { type: DataTypes.INTEGER, validate: { isInt: true } },
}, { freezeTableName: true });

const ParentInfo = sequelize.define("ParentInfo", {
    enrollmentNumber: {
        type: DataTypes.STRING,
        references: {
            model: "GeneralInfo",
            key: "enrollmentNumber",
        },
    },
    fatherName: { type: DataTypes.STRING },
    f_occupation: { type: DataTypes.STRING },
    mothersName: { type: DataTypes.STRING },
    m_occupation: { type: DataTypes.STRING },
    f_mobileNumber: { type: DataTypes.BIGINT, validate: { isNumeric: true } },
}, { freezeTableName: true });

const AddressInfo = sequelize.define("AddressInfo", {
    enrollmentNumber: {
        type: DataTypes.STRING,
        references: {
            model: "GeneralInfo",
            key: "enrollmentNumber",
        },
    },
    address: { type: DataTypes.STRING },
    city: { type: DataTypes.STRING },
    pincode: { type: DataTypes.INTEGER, validate: { isNumeric: true } },
}, { freezeTableName: true });

const BusInfo = sequelize.define("BusInfo", {
    enrollmentNumber: {
        type: DataTypes.STRING,
        references: {
            model: "GeneralInfo",
            key: "enrollmentNumber",
        },
    },
    busFacility: { type: DataTypes.BOOLEAN },
    busStop: { type: DataTypes.STRING },
}, { freezeTableName: true });

module.exports = {
    GeneralInfo,
    ParentInfo,
    AddressInfo,
    BusInfo
};
