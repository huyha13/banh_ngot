const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect(process.env.mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connect sucess");
  } catch (err) {
    console.log(err);
    console.log("Connect fail");
  }
}
module.exports = { connect };
