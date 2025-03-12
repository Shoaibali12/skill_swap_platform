const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },

  skillsOffered: [{ type: String, required: true }],

  skillsWanted: [{ type: String }],

  bio: { type: String, maxlength: 500 },

  location: { type: String },

  experienceLevel: {
    type: String,
    enum: ["Beginner", "Intermediate", "Advanced"],
    default: "Beginner",
  },

  availability: { type: String },

  profileImage: { type: String, default: "default-profile.png" },

  // Social media links (optional)
  socialLinks: {
    linkedin: { type: String },
    github: { type: String },
    website: { type: String },
  },

  // Rating from other users
  rating: { type: Number, default: 0 },

  // Date of account creation
  createdAt: { type: Date, default: Date.now },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
