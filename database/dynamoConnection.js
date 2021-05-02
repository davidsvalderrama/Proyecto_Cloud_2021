var AWS = require("aws-sdk");

const SESConfig = {
    apiVersion: "2012-08-10",
    accessKeyId: process.env.AWS_ACCESS_KEY,
    accessSecretKey: process.env.AWS_SECRET_KEY,
    region: "us-east-1",
    sessionToken: process.env.AWS_SESSION_TOKEN,
}

AWS.config.update(SESConfig);

let data
let docClient = new AWS.DynamoDB.DocumentClient();

let getDataFromAnimals = async function () {
    var params = {
        TableName: "Animales"
    };
    let request = await docClient.scan(params);
    let respone = await request.promise();
    data = respone.Items
    return data
}

module.exports = {
    getDataFromAnimals: getDataFromAnimals
}
