import Cookies from "cookies";
import dbConnect from "../../../utils/connectMongo";
import User from "../../../models/User";
dbConnect();

const loginInfo = async (req, res) => {
  const { method } = req;
  const { username, password } = req.body;
  const infoUser = { username: username, password: password, name: "default" };

  switch (method) {
    case "GET":
      try {
        const users = await User.find();
        console.log(users);
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        //const cookies = new Cookies(req,res);
        const user = await User.find(infoUser);
        console.log(user);
        if(user.length < 1){
          res.status(400).json({ success: false });
        }
      //   cookies.set("loggedin", "yesss");
        res.status(200).json({ success: true, data: user });
      } catch (error) {
        res.status(400).json({ success: false });
      }
  }
};

export default loginInfo;
