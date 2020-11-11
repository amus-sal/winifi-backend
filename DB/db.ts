import { ConnectionOptions, connect } from "mongoose";
const connectDB = async () => {
    try {
      const mongoURI: string = "mongodb://localhost:27017/winifi?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false";
      const options: ConnectionOptions = {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      };
      await connect(mongoURI, options);
      console.log("MongoDB Connected...");
    } catch (err) {
      console.error(err.message);
      // Exit process with failure
      process.exit(1);
    }
};

  export default connectDB;
