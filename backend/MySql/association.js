const { COURSE } = require("./courseModel");
const { GeneralInfo } = require("./userModel");
const { FEES } = require("./feesModel")

COURSE.hasMany( GeneralInfo , { foreignKey : "course_id" } )
GeneralInfo.belongsTo( COURSE , { foreignKey : "course_id" } )

GeneralInfo.hasOne( FEES , { foreignKey : "enrollment_no" } )
FEES.belongsTo( GeneralInfo , { foreignKey : "enrollment_no" } )
