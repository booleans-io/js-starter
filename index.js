import worker from './src/worker';

// Do not rename this function from 'handler' or modify its arguments
exports.handler = (event, context, callback) => {

  /* 
  Your code goes here.
  Below is an example of using code from another module called `worker`
  */

  return worker.doWork()
  .then((result) => {
    // `callback` must eventually be called with a Boolean value
    callback(result);
  });
};