// Load the SDK and UUID
var AWS = require('aws-sdk');


// Create unique bucket name
var bucketName = 'node-sdk-sample213';

// Create a promise on S3 service object
var bucketPromise = new AWS.S3({apiVersion: '2006-03-01'}).createBucket({Bucket: bucketName}).promise();

// Handle promise fulfilled/rejected states
bucketPromise.then(
    function(data) {
        // Create params for putObject call
        console.log("Successfully created " + bucketName);
    }).catch(
    function(err) {
        console.error(err, err.stack);
    });