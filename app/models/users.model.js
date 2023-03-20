module.exports = mongoose => {
  var schema = mongoose.Schema(
    {
      username: String,
      password: String,
      role: String,
    }
  );

  const users = mongoose.model("users", schema);
  return users;
};
