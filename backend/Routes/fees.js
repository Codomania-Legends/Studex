const express = require("express");
const {
    PostFeeDetailsReqRes,
    GetAllFeesReqRes,
    GetFeeByEnrollmentReqRes,
    UpdateFeeDetailsReqRes,
    DeleteFeeRecordReqRes
} = require("../Controllers/fees");

const FeesRouter = express.Router();

FeesRouter.post("/", PostFeeDetailsReqRes);
FeesRouter.get("/", GetAllFeesReqRes);
FeesRouter.get("/:enrollment_no", GetFeeByEnrollmentReqRes);
FeesRouter.put("/:enrollment_no", UpdateFeeDetailsReqRes);
FeesRouter.delete("/:enrollment_no", DeleteFeeRecordReqRes);

module.exports = {
    FeesRouter
};
