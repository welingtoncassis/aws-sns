// Load the AWS SDK for Node.js
const AWS = require('aws-sdk');
// Set region
AWS.config.update({region: 'us-east-1'});

// Create promise and SNS service object
var listTopicsPromise = new AWS.SNS({apiVersion: '2010-03-31'}).listTopics({}).promise();

// Handle promise's fulfilled/rejected states
listTopicsPromise.then(
  function(data) {
    console.log(data.Topics);
  }).catch(
    function(err) {
    console.error(err, err.stack);
  });
