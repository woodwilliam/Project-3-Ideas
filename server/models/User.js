const { Schema, model } = require('mongoose');
const Thought = require('./Thought')

const userSchema = new Schema(
    {
        userName: {
          type: String,
          unique: true,
          required: true,
          trimmed: true,
        },
        email: {
          type: String,
          unique: true,
          required: true,
          match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Must match an email address!']
        },
        builds: [
          {
            type: Schema.Types.ObjectId,
            ref: 'builds'
          }]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

userSchema.virtual('friendsCount').get(function() {
  return `${this.userName} has ${this.builds.length} saved builds.`
});

const User = model("users", userSchema);

module.exports = User;