const express = require("express");
const {
    PostUserDetailsReqRes,
    GetUserDetailsReqRes,
    GetSingleUserReqRes,
    UpdateUserDetailsReqRes,
    DeleteUserDetailsReqRes
} = require("../Controllers/user.js");

const UserRouter = express.Router();

UserRouter.post("/", PostUserDetailsReqRes);
UserRouter.get("/", GetUserDetailsReqRes);
UserRouter.get("/:enrollmentNumber", GetSingleUserReqRes);
UserRouter.put("/:enrollmentNumber", UpdateUserDetailsReqRes);
UserRouter.delete("/:enrollmentNumber", DeleteUserDetailsReqRes);

module.exports = {
    UserRouter
};
