function catchErrors(error, displayError) {
  let errorMsg;
  if (error.response) {
    // the request was made and the server responded with a status code not in the range of 200 something
    errorMsg = error.response.data;
    console.error("Error response", errorMsg);
  } else if (error.request) {
    errorMsg = error.request; //request was made but no response was received
  } else {
    //something else
    errorMsg = error.message;
    console.error("Error Message", errorMsg);
  }
  displayError(errorMsg);
}

export default catchErrors;
