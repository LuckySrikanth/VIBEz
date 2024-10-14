const mongoose = require("mongoose");

const dbConncect = async () => {
  await mongoose.connect(process.env.MONGOOSE_CONFIG).then(() => {
    console.log("DB Connceted Successfully");
  });
};

module.exports = dbConncect;
