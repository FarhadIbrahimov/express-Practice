const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "john") {
    req.user = { name: "john", id: 3 };
    next();
  } else {
    // Status code 401 - not authorized
    res.status(401).send("Unauthorized");
  }

  console.log("authorize");
  next();
};

module.exports = authorize;

//this is just an example, normaly you check for the Json web token and if the token exists then we communicate with database and get the user
