import * as Utils from './utils'

// story stuff
export const getStory = (event) => {
  const loid = (event.queryStringParameters || {}).loid || "";

  return Utils.readStory(loid)
  .then( res => {
    if(!res.ok){
      throw Error(res.statusText);
    }
    return res;
  })
  .then( res => res.buffer() )
  .then( buffer => Utils.uploadFileToS3(`foobar.${loid}`, buffer) )
  .catch( error => {
    return { statusCode: error.statusCode || 500, body: `Error: ${Utils.parseError(error)}` };
  });
}


// topic plan stuff
export const createTopic = (event) => {
  const loid = (event.queryStringParameters || {}).loid || "";
  const body = event.body || "";

  return Utils.createTopicUtil(loid, body)
  .then( res => ({ statusCode: 200, body: `Success: ${JSON.stringify(res)}` }) )
  .catch( error => {
    return { statusCode: error.statusCode || 500, body: `Error: ${Utils.parseError(error)}` };
  });
}

export const readTopic = (event) => {
  const loid = (event.queryStringParameters || {}).loid || "";

  return Utils.readTopicUtil(loid)
  .then( topic => ({statusCode: 200, body: topic}) )
  .catch( error => {
    return { statusCode: error.statusCode || 500, body: `Error: ${Utils.parseError(error)}` };
  });
}

export const updateTopic = (event) => {
  const loid = event.queryStringParameters.loid;
  const body = event.body || "";

  return Utils.readTopicUtil(loid)
  .then( topic => JSON.stringify(Object.assign(JSON.parse(body), JSON.parse(topic))) )
  .then( newBody =>  Utils.createTopicUtil(loid, newBody) )
  .then( res => ({ statusCode: 200, body: `Success: ${JSON.stringify(res)}` }) )
  .catch( error => {
    return { statusCode: error.statusCode || 500, body: `Error: ${Utils.parseError(error)}` };
  });
}

export const deleteTopic = (event) => {
  const loid = (event.queryStringParameters || {}).loid || "";

  return Utils.deleteTopicUtil(loid)
  .then( res => ({ statusCode: 200, body: `Success: ${JSON.stringify(res)}` }) )
  .catch( error => {
    return { statusCode: error.statusCode || 500, body: `Error: ${Utils.parseError(error)}` };
  });
}
