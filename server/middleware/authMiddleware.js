import jwt from "jsonwebtoken";

export const authenticateUser = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      return res.status(401).json({ error: "No token provided." });
    }

    const decoded = jwt.verify(token, process.env.secret_key);
    console.log("Decoded Token:", decoded);
    req.user = { _id: decoded.id }; // Add user data to req
    next();
  } catch (error) {
    console.error("Authentication error:", error);
    res.status(403).json({ error: "Unauthorized access." });
  }
};
