const express = require("express");
const { GetFeeByCourseId } = require("../Controllers/fees");
const {
    PostFeeDetailsReqRes,
    GetAllFeesReqRes,
    UpdateFeeDetailsReqRes,
    DeleteFeeRecordReqRes
} = require("../Controllers/fees");

const FeesRouter = express.Router();

FeesRouter.post("/", PostFeeDetailsReqRes);
FeesRouter.get("/", GetAllFeesReqRes);
FeesRouter.get("/:course_id", GetFeeByCourseId);
FeesRouter.put("/:enrollment_no", UpdateFeeDetailsReqRes);
FeesRouter.delete("/:enrollment_no", DeleteFeeRecordReqRes);

module.exports = {
    FeesRouter
};
