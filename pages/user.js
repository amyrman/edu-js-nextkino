import Cookies from "cookies";

export async function getServerSideProps(context) {
  const cookies = new Cookies(context.req, context.res);
  const sessionstr = cookies.get("session");

  if (sessionstr) {
    const session = JSON.parse(sessionstr);
    if (session.loggedin == true) {
      return {
        props: {message: `Nextjs is good`},
      };
    }
  }
  return {
    notFound: true,
  };
}
const UserPage = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <p>User information</p>
    </div>
  );
};

export default UserPage;