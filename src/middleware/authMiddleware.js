import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token provided" });

  jwt.verify(
    token,
    process.env.SECRET_KEY || "dont_have_secret_key",
    (err, decoded) => {
      if (err) return res.status(401).json({ message: "Unauthorized" });
      req.userId = decoded.id;
      next();
    }
  );
};

export default authMiddleware;
