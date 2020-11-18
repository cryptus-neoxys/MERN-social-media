import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "16mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "16mb", extended: true }));
app.use(cors());

const MONGO_URI =
  "mongodb+srv://test-user:mongoDBpass@cluster0.oktpr.mongodb.net/MERNSocialMedia?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5800;

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, console.log(`Server running on port: ${PORT}`)))
  .catch((err) => console.error(err.message));

mongoose.set("useFindAndModify", false);
