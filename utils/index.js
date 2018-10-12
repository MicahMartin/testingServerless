import * as AWS from 'aws-sdk';
import conf from '../conf';

export const s3bucket = new AWS.S3({
    s3ForcePathStyle: true,
    endpoint: new AWS.Endpoint(conf.awsEndpoint)
});

// s3 stuff 
export function uploadFileToS3(file, content){
  // TODO: Promise
  return s3bucket.putObject({
    Bucket: 'local-bucket',
    Key: file,
    Body: content,
  }).promise();
}

export function getS3Object(file){
  // TODO: Promise
  return s3bucket.getObject({
    Bucket: 'local-bucket',
    Key: file,
  }).promise();
}

export function deleteS3Object(file){
  // TODO: Promise
  return s3bucket.deleteObject({
    Bucket: 'local-bucket',
    Key: file,
  }).promise();
}

// story stuff 
export const readStory = (loid) => fetch(`${conf.storyJsonEndpoint}?loid=${loid}`);  

// topic stuff 
export const createTopicUtil = (loid, content) => uploadFileToS3(`topic-${loid}`, content);  
export const readTopicUtil = (loid) => getS3Object(`topic-${loid}`).then(res => res.Body.toString());
export const deleteTopicUtil = (loid) => deleteS3Object(`topic-${loid}`);


// error parse stuff

export function parseError(error){
  let parsedError = JSON.stringify(error);
  parsedError = Object.is("{}", parsedError) ? error.toString() : parsedError;
  return parsedError;
}
