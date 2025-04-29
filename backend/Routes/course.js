const express = require("express");
const {
    PostCourseDetailsReqRes,
    GetAllCoursesReqRes,
    GetSingleCourseReqRes,
    UpdateCourseReqRes,
    DeleteCourseReqRes
} = require("../Controllers/course");

const CourseRouter = express.Router();

CourseRouter.post("/", PostCourseDetailsReqRes);
CourseRouter.get("/", GetAllCoursesReqRes);
CourseRouter.get("/:course_id", GetSingleCourseReqRes);
CourseRouter.put("/:course_id", UpdateCourseReqRes);
CourseRouter.delete("/:course_id", DeleteCourseReqRes);

module.exports = {
    CourseRouter
};
