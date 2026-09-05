import express from "express";
import cloudinary from "../utils/cloudinary.js";

const router = express.Router();

router.post("/image", async (req, res, next) => {
  try {
    const { image } = req.body;
    if (!image) {
      return res.status(400).json({ success: false, message: "No image data provided" });
    }

    const uploadResponse = await cloudinary.uploader.upload(image, {
      folder: "mern-estate",
      resource_type: "auto",
    });

    return res.status(200).json({
      success: true,
      url: uploadResponse.secure_url,
    });
  } catch (error) {
    next(error);
  }
});

export default router;
