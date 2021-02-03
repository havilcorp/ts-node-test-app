import * as e from "express";
import * as mongoose from "mongoose";
import { join } from "path";
import * as serve from "serve-static";
import { MONGO_URI, PORT } from "./config";
import Logger from "./utils/Logger";

const app = e();

app.use("/assets", serve(join(__dirname, "assets"), null));

app.get("/", (req: e.Request, res: e.Response) => {
  res.send("Ok!");
});

async function main(): Promise<void> {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });

    /*
    // New User (method 1)
    let u1 = new UserModel(<IUser>{
      login: "MrDenySU",
      balance: 256730,
      birthday: new Date("2002-08-04"),
    });
    await u1.save()

    // New User (method 2)
    let u2 = await UserModel.create({
      login: "CodeRoomDev"
    })
    await u2.save()

    //  Get user
    let u3 = await UserModel.findById("601aa742ec47ed387c6b2ffe");
    u3.balance += 100;
    u3.birthday = new Date("2002-08-04");
    await u3.save(); */

    app.listen(PORT, () => {
      Logger.success(
        `${new Date().toLocaleString("ru", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })} - Server listen port: http://127.0.0.1:${PORT}/`
      );
    });
  } catch (error) {
    Logger.error(error);
  }
}

main();
