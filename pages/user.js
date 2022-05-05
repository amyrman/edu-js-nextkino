import Cookies from "cookies";
import Iron from "@hapi/iron";
import { ENC_KEY } from "./api/users";
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
    <div>
      <h1>You are now in the user page </h1>
      <h2>Welcome: {username}</h2>
    </div>
  );
};

export default UserPage;
