import Cookies from "cookies";
import { GetServerSideProps, NextPage } from "next";

export async function getServerSideProps(context) {
  const cookies = new Cookies(context.req, context.res);
  const loggedin = cookies.get("loggedin");

  if (loggedin == "yes") {
    return {
      props: {},
    };
  } else {
    return {
      notFound: true,
    };
  }
}

const SecretPage = () => {
  return (
    <div>
      <h1>Secret page</h1>
      <p>Secret content</p>
    </div>
  );
};

export default SecretPage;
