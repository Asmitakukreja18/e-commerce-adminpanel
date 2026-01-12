
import express from "express";
import multer from "multer";
import { scanImage } from "../Controllers/scan.controller.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/scan", upload.single("image"), scanImage);

export default router;
