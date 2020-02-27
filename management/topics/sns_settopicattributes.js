// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'REGION'});

// Create setTopicAttributes parameters
// You can define only the Policy, DisplayName and DeliveryPolicy attributes
var params = {
  AttributeName: 'ATTRIBUTE_NAME', /* required */
  TopicArn: 'TOPIC_ARN', /* required */
  AttributeValue: 'NEW_ATTRIBUTE_VALUE'
};

// Create promise and SNS service object
var setTopicAttribsPromise = new AWS.SNS({apiVersion: '2010-03-31'}).setTopicAttributes(params).promise();

// Handle promise's fulfilled/rejected states
setTopicAttribsPromise.then(
  function(data) {
    console.log(data);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });