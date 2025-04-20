const { DataTypes } = require("sequelize");
const { sequelize } = require("./connection");

const COURSE = sequelize.define( "course_details" , {
    course_id : {
        type : DataTypes.INTEGER,
        primaryKey : true,
        allowNull : false,
        unique : true
    },
    course_name : {
        type : DataTypes.STRING,
        allowNull : false,
        unique : true    
    },
    total_registered_students : {
        type : DataTypes.INTEGER,
    },
    course_duration_years : {
        type : DataTypes.INTEGER,
    },
    total_semesters:{
        type : DataTypes.INTEGER,
    }
} )

module.exports = {
    COURSE
}
