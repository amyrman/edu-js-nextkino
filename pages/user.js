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
      <h2 className="userWelcom">
        Welcome:
        <a className="welcomeA">{username}</a>
      </h2>
      <p style={{ color: "white" }}>
        Click here to home page
        <a className="userLink">
          <Link href=" /">
            Click here
          </Link>
        </a>
      </p>
    </div>
  );
};

export default UserPage;
