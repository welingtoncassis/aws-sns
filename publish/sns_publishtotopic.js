const AWS = require('aws-sdk');

// Set region
AWS.config.update({region: 'us-east-1'});

// Create publish parameters
var params = {
  Message: 'Hello', /* required */
  TopicArn: 'arn:aws:sns:us-east-1:628626470309:MEU_TOPICO_NODE'
};

// Create promise and SNS service object
var publishTextPromise = new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();

// Handle promise's fulfilled/rejected states
publishTextPromise.then(
  function(data) {
    console.log(`Message ${params.Message} send sent to the topic ${params.TopicArn}`);
    console.log("MessageID is " + data.MessageId);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });