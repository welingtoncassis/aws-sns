const AWS = require('aws-sdk');

// Definir região
AWS.config.update({region:'us-east-1'})

// Criar objeto de serviço de promessa e SNS
var  createTopicPromise = new AWS.SNS({apiVersion: '2010-03-31'}).createTopic({Name: "MEU_TOPICO_NODE"}).promise();

// Lida com os estados ok / reject da promise
createTopicPromise.then(
    (data) => {
        console.log('Topico ARN is '+ data.TopicArn);
        

    }).catch(
        (err)=>{
            console.error(err, err.stack);
    });