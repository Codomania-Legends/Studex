const { DataTypes } = require("sequelize")
const { sequelize } = require("./connection.js")

const FEES = sequelize.define( "fees_details" , {
    enrollment_no : {
        type : DataTypes.STRING,
        references : {
            model : "GeneralInfo",
            key : "enrollmentNo"
        }
    },
    course_name : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true
    },
    course_id : {
        type : DataTypes.STRING,
        references : {
            model : "course_details",
            key : "course_id"
        }
    },
    total_course_fee : {
        type : DataTypes.INTEGER
    }
    ,
    semester_1_fee : {
        type : DataTypes.STRING
    },
    semester_2_fee : {
        type : DataTypes.STRING
    },
    semester_3_fee : {
        type : DataTypes.STRING
    },
    semester_4_fee : {
        type : DataTypes.STRING
    },
    semester_5_fee : {
        type : DataTypes.STRING
    },
    semester_6_fee : {
        type : DataTypes.STRING
    },
    semester_7_fee : {
        type : DataTypes.STRING
    },
    semester_8_fee : {
        type : DataTypes.STRING
    }
} )

module.exports = {
    FEES
}
