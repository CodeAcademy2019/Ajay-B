const check = (fulfill, reject) => {
  setTimeout(() => reject(new Error('REJECTED!')), 300);
};

const promise = new Promise(check);
const onReject = error => console.log(error.message);
promise.then(
  error => onReject(error),
);

// reject();
module.exports = { check, promise };
