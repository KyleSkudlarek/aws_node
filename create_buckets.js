// Load the AWS SDK
var AWS = require('aws-sdk');


// Create unique bucket name
var bucketName = 'mybucket';

s3 = new AWS.S3();

s3.createBucket({Bucket: bucketName}, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else    console.log(data);           // successful response
});