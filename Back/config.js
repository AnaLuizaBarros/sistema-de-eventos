const mongoose = require("mongoose");
const connect = mongoose.connect(
  "mongodb+srv://faucetdemoniac:<password>@cluster0.f9oj3ra.mongodb.net/?retryWrites=true&w=majority"
);

const LoginSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const collection = new mongoose.model("users", LoginSchema);
module.exports = collection;
