const express = require("express");
const {
    PostUserDetailsReqRes,
    GetUserDetailsReqRes,
    GetSingleUserByEnrollmentReqRes,
    UpdateUserDetailsReqRes
} = require("../Controllers/user.js");

const UserRouter = express.Router();

UserRouter.post("/", PostUserDetailsReqRes);
UserRouter.get("/", GetUserDetailsReqRes);
UserRouter.get("/:enrollmentNumber", GetSingleUserByEnrollmentReqRes);
UserRouter.put("/:enrollmentNumber", UpdateUserDetailsReqRes);

module.exports = {
    UserRouter
};
