import Cookies from "cookies";

export async function getServerSideProps(context) {
  const cookies = new Cookies(context.req, context.res);
  const sessionstr = cookies.get("session");

  if (sessionstr) {
    const session = JSON.parse(sessionstr);
    if (session.loggedin == true) {
      return {
        props: {
          username: session.username,
        },
      };
    }
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

