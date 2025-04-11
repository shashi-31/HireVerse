import express from "express";

import authenticateToken from "../middleware/isAuthenticated.js";
import {
  editJob,
  getAdminJobs,
  getAllJobs,
  getJobById,
  postJob,
} from "../controllers/job.controller.js";

const router = express.Router();

router.route("/post").post(authenticateToken, postJob);
router.route("/get").get(authenticateToken, getAllJobs);
router.route("/getadminjobs").get(authenticateToken, getAdminJobs);
router.route("/get/:id").get(authenticateToken, getJobById);
router.route("/update/:jobId").put(authenticateToken, editJob);
export default router;
