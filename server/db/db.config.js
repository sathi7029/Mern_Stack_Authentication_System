import mongoose from "mongoose";

const dbConnect = (app) => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("Db is connected");
      app.listen(process.env.PORT, () => {
        console.log("App is listening");
      });
    })

    .catch((err) => {
      console.log("db is not connected");
    });
};

export default dbConnect;
