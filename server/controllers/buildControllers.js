const Build = require("../models/Build");
const Comment = require("../models/Comment");

module.exports = {
  // Get all builds
  getBuilds(req, res) {
    Build.find()
      .then((buildInfo) => res.json(buildInfo))
      .catch((err) => res.status(500).json(err));
  },
  // Get a build
  getSingleBuild(req, res) {
    Build.findOne({ _id: req.params.buildId })
      .then((oneBuildOnly) =>
        !oneBuildOnly
          ? res.status(404).json({ message: "No build with that ID" })
          : res.json(oneBuildOnly)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a build
  createBuild(req, res) {
    Build.create(req.body)
      .then((nuBuild) => res.json(nuBuild))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a build
  deleteBuild(req, res) {
    Build.findOneAndDelete({ _id: req.params.buildtId })
      .then((forgetfullness) =>
        !forgetfullness
          ? res.status(404).json({ message: "No build with that ID" })
          : Build.deleteMany({ _id: { $in: forgetfullness.reactions } })
      )
      .then(() => res.json({ message: "Build and Comment removed" }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a build
  updateBuild(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.buildId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((build) =>
        !build
          ? res.status(404).json({ message: "No build with this id!" })
          : res.json(build)
      )
      .catch((err) => res.status(500).json(err));
  },
  // add a comment
  plusCommento(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.buildId },
      { $addToSet: { reactions: req.body } },
      { new: true }
    )
      .then((helloCommento) =>
        !helloCommento
          ? res.status(404).json({ message: "No comment with this id!" })
          : res.json(helloCommento)
      )
      .catch((err) => res.status(500).json(err));
  },
  // remove a reaction
  sansCommento(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.buildId },
      { $pull: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((byeByeCommento) =>
        !byeByeCommento
          ? res.status(404).json({ message: "No user with this id!" })
          : res.json(byeByeCOmmento)
      )
      .catch((err) => res.status(500).json(err));
  },
};
