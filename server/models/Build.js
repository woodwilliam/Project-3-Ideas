const { Schema, model } = require('mongoose');
const commentSchema = require('./Comment');

const buildSchema = new Schema(
    {
        buildContent: {
          type: String,
          required: true,
        },
        createdAt: {
          type: Date,
          default: () => Date.now(),
        },
        username: {
          type: String,
          required: true
        },
        comments: [commentSchema]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

buildSchema.virtual('commentCount').get(function() {
  return `This thought has ${this.reactions.length} comments`
});

const Build = model("builds", buildSchema)

module.exports = Build;