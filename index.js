const testFunc = (params) => {
  console.log(`Hello test Func iam:${params}`);
  console.log(process.env.NAME);
};

module.exports = {
  testFunc,
};
