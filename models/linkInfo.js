const mongoose = require("mongoose");

module.exports = {
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
  },
}
// module.exports = mongoose.model("LinkInfo", linlInfoSchema);
