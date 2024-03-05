const sendResponseAndLogging = (res, status, data) => {
  logging(data);
  return res.status(status).send(data);
};

const logging = (data) => {
  if (data instanceof Object) {
    if (
      data.code &&
      typeof data.code === "string" &&
      data.code.endsWith("001")
    ) {
      const { token: _, ...newData } = data;
      console.log(JSON.stringify(newData));
    } else console.log(JSON.stringify(data));
  } else console.log(data);
};

const error = (data) => {
  if (data instanceof Object) console.error(JSON.stringify(data));
  else console.error(data);
};

const isNumber = (n) => {
  return !isNaN(parseFloat(n)) && !isNaN(n - 0);
};

module.exports = {
  sendResponseAndLogging,
  logging,
  error,
  isNumber,
};
