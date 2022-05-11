import Cookies from "cookies";
import Iron from "@hapi/iron";
import { ENC_KEY } from "./api/users";
import Link from "next/link";
export async function getServerSideProps(context) {
  const cookies = new Cookies(context.req, context.res);
  const sessionstr = cookies.get("session");

  if (sessionstr) {
    try {
      const session = await Iron.unseal(sessionstr, ENC_KEY, Iron.defaults);
      if (session.loggedIn) {
        return {
          props: {
            username: session.username,
          },
        };
      }
    } catch (err) {}
  }
  return {
    notFound: true,
  };
}

const UserPage = ({ username }) => {
  return (
    <div className="userDiv">
      <h1 style={{ color: "white" }}>You are now in the user page </h1>
      <h2 className="userWelcomLink">
        Welcome:
        <a className="userWelcome">{username}</a>
      </h2>
      <p style={{ color: "white" }}>
        Click here to home page
        <Link href=" /">
          <a className="userLink"> Click here </a>
        </Link>
      </p>
    </div>
  );
};

export default UserPage;
