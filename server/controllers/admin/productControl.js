import handleImageUploadUtils from "../../helpers/cloudinary";

const handleImageUpload = async (req, res) => {
  try {
    const b64 = Buffer.from(req.file.buffer).toString("base64");
    const url = `data:${req.file.mimetype};base64,${b64}`;

    const result = await handleImageUploadUtils(url);

    res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.log(`Error in the handleImageUpload controller ${error.message}`);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
};

export default handleImageUpload;
