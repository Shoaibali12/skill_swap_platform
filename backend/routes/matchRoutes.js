const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const User = require("../models/User");

const router = express.Router();

// Get matching users based on skills
router.get("/", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Find users who offer what the current user wants
    const matches = await User.find({
      skillsOffered: { $in: user.skillsWanted },
      _id: { $ne: user.id },
    }).select("name skillsOffered skillsWanted");

    res.json(matches);
  } catch (error) {
    res.status(500).json({ message: "Error fetching matches" });
  }
});

module.exports = router;
