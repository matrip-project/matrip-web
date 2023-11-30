import { bucketName, s3 } from '../apis/AWS-S3';

export const uploadImage = async (image: File) => {
  if (bucketName) {
    const params = {
      Bucket: bucketName,
      Key: image.name,
      Body: image,
      ACL: 'public-read'
    };

    try {
      const data = await s3.upload(params).promise();
      console.log('image upload success', data);

      return data.Location;
    } catch (error) {
      console.error('Error uploading to S3:', error);
      return null;
    }
  }
};
