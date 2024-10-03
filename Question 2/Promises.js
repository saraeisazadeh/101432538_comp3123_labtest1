const resolvedPromise = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const success = { message: 'resolved promise success!' };
      resolve(success);
    }, 500);
  });
};

const rejectedPromise = () => {
  return new Promise((_, reject) => {
    setTimeout(() => {
      const error = new Error('error: rejected promise!');
      reject(error); 
    }, 500);
  });
};

resolvedPromise().then((result) => {
  console.log(result);
}).catch((error) => {
  console.error("Unexpected error:", error);
});

rejectedPromise().then((result) => {
  console.log("Unexpected success:", result);
}).catch((error) => {
  console.error(error);
});
