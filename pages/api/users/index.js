import Iron from "@hapi/iron";
import Cookies from "cookies";
import dbConnect from "../../../utils/connectMongo";
import User from "../../../models/User";
export const ENC_KEY =
       !process.env.ENCKEY || 'default_key_user';
console.log(process.env.ENCKEY );

dbConnect();

const loginInfo = async (req, res) => {
  const { method } = req;
  const { username, password } = req.body;
  const infoUser = { username: username, password: password, name: "default" };

  switch (method) {
    case "GET":
      try {
        const users = await User.find();
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(405).json({ success: false });
      }
      break;

    case "POST":
      try {
        const user = await User.find(infoUser);
        if (!user.length < 1) {
          const cookies = new Cookies(req, res);
          cookies.set(
            "session",
            await Iron.seal(
              {
                username: username,
                loggedIn: true,
              },

              ENC_KEY,
              Iron.defaults
            )
          );
          res.status(200).json({ success: true, data: user });
        }
        res.status(400).json({ success: false });
      } catch (error) {
        res.status(405).json({ success: false });
      }
  }
};

export default loginInfo;
