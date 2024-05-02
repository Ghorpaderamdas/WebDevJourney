const File = require("../Models/File");
const cloudinary = require("cloudinary").v2;

// Function to check if file type is supported
function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type.toLowerCase());
}

// Function to upload file to Cloudinary
async function uploadFileToCloudinary(file, folder, quality) {
    const options = { folder };
    if (quality) {
        options.quality = quality;
    }
    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

// Handler function for local file upload
exports.localFileUpload = async (req, res) => {
    try {
        const file = req.files.file;
        let path = `${__dirname}/files/${Date.now()}.${file.name.split('.')[1]}`;
        file.mv(path, (err) => {
            if (err) {
                console.error(err);
                return res.status(500).json({
                    success: false,
                    message: "Error uploading file locally"
                });
            }
        });
        res.json({
            success: true,
            message: "Local File Uploaded Successfully"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

// Handler function for image upload
exports.imageUpload = async (req, res) => {
    try {
        const { name, tags, email } = req.body;
        const file = req.files.imageFile;

        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: 'File format not supported',
            });
        }

        const response = await uploadFileToCloudinary(file, "fileuploaderapplication");
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        });

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: 'Image Successfully Uploaded',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}

// Handler function for video upload
exports.videoUpload = async (req, res) => {
    try {
        const { name, tags, email } = req.body;
        const file = req.files.videoFile;

        const supportedTypes = ["mp4", "mov"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: 'File format not supported',
            });
        }

        const response = await uploadFileToCloudinary(file, "fileuploaderapplication");
        const fileData = await File.create({
            name,
            tags,
            email,
            videoUrl: response.secure_url,
        });

        res.json({
            success: true,
            videoUrl: response.secure_url,
            message: 'Video Successfully Uploaded',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}

// Handler function for image size reduction
exports.imageSizeReduce = async (req, res) => {
    try {
        const { name, tags, email } = req.body;
        const file = req.files.imageFile;

        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = file.name.split('.')[1].toLowerCase();

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: 'File format not supported',
            });
        }

        const response = await uploadFileToCloudinary(file, "fileuploaderapplication", 30);
        const fileData = await File.create({
            name,
            tags,
            email,
            imageUrl: response.secure_url,
        });

        res.json({
            success: true,
            imageUrl: response.secure_url,
            message: 'Image Successfully Uploaded',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
}
