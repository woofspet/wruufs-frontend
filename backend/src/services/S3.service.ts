import AWS, { S3 } from "aws-sdk";

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  region: process.env.AWS_REGION,
});

export class S3Service {
  static async uploadFile(
    file: Buffer,
    filename: string,
    mimetype: string
  ): Promise<string> {
    const params: AWS.S3.PutObjectRequest = {
      Bucket: process.env.S3_BUCKET_NAME!,
      Key: filename,
      Body: file,
      ContentType: mimetype,
    //   ACL: "public-read",
    };
    const upload: AWS.S3.ManagedUpload = s3.upload(params);
    const data = await upload.promise();
    return data.Location;
  }

  static getFileUrl(key: string) {
    return `https://${process.env.S3_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${key}`;
  }
}
