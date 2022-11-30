const express = require("express");
const app = express();
const port = 8800;
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const helmet = require("helmet");
const route = require("./routes/index");
const cors = require("cors");
const authRouter  = require("./routes/auth.js");
const userRouter = require("./routes/users.js");
const petRoute = require("./routes/petroutes");
const inforRoute = require("./routes/Inforrouter");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the MongoDB!");
  })
  .catch((error) => {
    console.log(`Can not connect to database, ${error}`);
  });

//midleware
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(
  cors({
    credentials: true,
    origin: "https://localhost:3001",
  })
);

app.use(cookieParser());

app.use(function (req, res, next) {
  res.header("Content-Type", "application/json;charset=UTF-8");

  res.header("Access-Control-Allow-Credentials", true);

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

//Routes init

app.use("/pet", petRoute);
app.use("/information", inforRoute);
app.use('/api/auth',authRouter)
app.use('/api/users',userRouter)
app.listen(port, () => {
  console.log(`Backend server is listening at http://localhost:${port}`);
});
