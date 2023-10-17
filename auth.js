const jwt = require("jsonwebtoken");

module.exports = async (request, response, next) => {
  try {
    // Get the token from the 'token' cookie
    const token = request.cookies.token;

    if (!token) {
      return response.status(401).send({ message: "Unauthorized: Token not found" });
    }

    // Check if the token is valid
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    // Retrieve the user details of the logged-in user
    const user = decodedToken;

    // Pass the user information down to the endpoints
    request.user = user;

    // Pass down functionality to the endpoint
    next();
    
  } catch (error) {
    response.status(401).send({ message: "Unauthorized: Invalid token" });
  }
};
