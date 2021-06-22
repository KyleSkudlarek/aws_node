// Load the AWS SDK
var AWS = require('aws-sdk');
// Set the region
AWS.config.update({region: 'us-east-1'});

// Create S3 service object
s3 = new AWS.S3();


s3.listBuckets(function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else    console.log(data);           // successful response
});