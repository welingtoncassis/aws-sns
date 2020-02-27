// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'us-east-1'});

// Create promise and SNS service object
var deleteTopicPromise = new AWS.SNS({apiVersion: '2010-03-31'}).deleteTopic({TopicArn: 'TOPIC_ARN'}).promise();

// Handle promise's fulfilled/rejected states
deleteTopicPromise.then(
  function(data) {
    console.log("Topic Deleted");
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });