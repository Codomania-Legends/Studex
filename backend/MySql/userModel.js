import { DataTypes } from "sequelize";
import { sequelize } from "./connection";

const GeneralInfo = sequelize.define( "GeneralInfo" , {
    name : { type : DataTypes.STRING },
    enrollmentNumber : { type : DataTypes.STRING , primaryKey : true },
    gender : { type : DataTypes.STRING },
    mobileNumber : { type : DataTypes.BIGINT },
    fatherName : { type : DataTypes.STRING },
    f_occupation : { type : DataTypes.STRING },
    mothersName : { type : DataTypes.STRING },
    m_occupation : { type : DataTypes.STRING },
    f_mobileNumber : { type : DataTypes.BIGINT },
    course_id : { type : DataTypes.STRING , references : { model : "course_details" , key : "course_id" } },
    course_name : { type : DataTypes.STRING , references : { model : "course_details" , key : "course_name" } },
    program : { type : DataTypes.STRING },
    year : { type : DataTypes.INTEGER },
    semester : { type : DataTypes.INTEGER },
    address : { type : DataTypes.STRING },
    city : { type : DataTypes.STRING },
    pincode : { type : DataTypes.INTEGER },
    busFacility : { type : DataTypes.BOOLEAN },
    busStop : { type : DataTypes.STRING }
} )

module.exports = {
    GeneralInfo
}
