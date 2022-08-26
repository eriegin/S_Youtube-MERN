import express from "express";
import {
  addVideo,
  addView,
  deleteVideo,
  getVideo,
  random,
  sub,
  trend,
  updateVideo,
} from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

/**
 * Create a video
 */
router.post("/", verifyToken, addVideo);

/**
 * Update a video
 */
router.put("/:id", verifyToken, updateVideo);

/**
 * Delete a video
 */
router.delete("/:id", verifyToken, deleteVideo);

/**
 * Get a video
 */
router.get("/find/:id", verifyToken, getVideo);

/**
 * Add view to a video
 */
router.put("/view/:id", addView);

/**
 * Get trend video
 */
router.get("/trend", trend);

/**
 * Get random video
 */
router.get("/random", random);

/**
 * Get subscribed video
 */
router.get("/sub", verifyToken, sub);

export default router;
