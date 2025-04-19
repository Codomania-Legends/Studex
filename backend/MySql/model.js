import { DataTypes } from "sequelize";
import { sequelize } from "./connection";

const USER = sequelize.define( "GeneralInfo" , {
    name : { type : DataTypes.STRING , allowNull : false },
    enrollmentNo : { type : DataTypes.INTEGER , unique : true , primaryKey : true },
} )

module.exports = {
    USER
}
