import { s3 } from "@/config/aws";

export const uploadToS3 = async (
  fileBuffer: Buffer,
  fileName: string,
  mimeType: string
) => {
  const params = {
    Bucket: process.env.AWS_S3_BUCKET!,
    Key: fileName,
    Body: fileBuffer,
    ContentType: mimeType,
    ACL: "public-read",
  };

  const data = await s3.upload(params).promise();
  return data.Location; // URL của file
};
