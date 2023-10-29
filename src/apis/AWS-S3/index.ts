import AWS from 'aws-sdk';

AWS.config.update({
    region: process.env.REACT_APP_AWS_REGION,
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: process.env.REACT_APP_AWS_IDENTIFY_POOL_ID!,
    }),
});

export const bucketName = process.env.REACT_APP_AWS_BUCKET_NAME;
export const s3 = new AWS.S3();
