
const AWS = require("aws-sdk");
const s3 = new AWS.S3();

module.exports = async request => {

  const ports = JSON.parse(process.env.STACKERY_PORTS)
  // Log the request to the console.
  console.dir(request);

  // Get the message sent in the endpoint path parameter
  let fileId = request.pathParameters.fileId;

  let params = {
    Key: `${fileId}.txt`,
    Bucket: ports[0][0].bucket
  };

  try {
    let s3Return = await s3.getObject(params);
    console.dir({
      status: success,
      return: s3Return
    })
  } catch (error) {
    console.error(err.message, event);
  }


  // Build a response.
  // let responseBody = `
  //   <h4>You sent the following message:</h4>
  //   <p>${message}</p>
  // `;
  //
  // let response = {
  //   statusCode: 200,
  //   headers: {
  //     "Content-Type": "text/html"
  //   },
  //   body: responseBody
  // };
  //
  // return response;

  return {};
};
