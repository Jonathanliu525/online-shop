const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unique: true,
    },
  },
  { timestamps: true },
);
categorySchema.plugin(uniqueValidator, { message: '{VALUE} exsited' });

module.exports = mongoose.model('Category', categorySchema);
