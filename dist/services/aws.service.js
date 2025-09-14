"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadToS3 = void 0;
const aws_1 = require("@/config/aws");
const uploadToS3 = async (fileBuffer, fileName, mimeType) => {
    const params = {
        Bucket: process.env.AWS_S3_BUCKET,
        Key: fileName,
        Body: fileBuffer,
        ContentType: mimeType,
        ACL: "public-read",
    };
    const data = await aws_1.s3.upload(params).promise();
    return data.Location; // URL của file
};
exports.uploadToS3 = uploadToS3;
