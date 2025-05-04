const { COURSE } = require("./courseModel");
const { GeneralInfo, ParentInfo, AddressInfo, BusInfo } = require("./userModel");
const { FEES } = require("./feesModel")

COURSE.hasMany( GeneralInfo , { foreignKey : "course_id" } )
GeneralInfo.belongsTo( COURSE , { foreignKey : "course_id" } )

GeneralInfo.hasOne( FEES , { foreignKey : "enrollment_no" } )
FEES.belongsTo( GeneralInfo , { foreignKey : "enrollment_no" } )

GeneralInfo.hasOne(ParentInfo, { foreignKey: "enrollmentNumber" });
ParentInfo.belongsTo(GeneralInfo, { foreignKey: "enrollmentNumber" });

GeneralInfo.hasOne(AddressInfo, { foreignKey: "enrollmentNumber" });
AddressInfo.belongsTo(GeneralInfo, { foreignKey: "enrollmentNumber" });

GeneralInfo.hasOne(BusInfo, { foreignKey: "enrollmentNumber" });
BusInfo.belongsTo(GeneralInfo, { foreignKey: "enrollmentNumber" });
