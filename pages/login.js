import React, { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const data = {
      username,
      password,
    };

    try {
      const res = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (res.ok == true) {
        router.push("/user");
      } else {
        alert("Check your login info");
      }
    } catch {
      console.log("Fetch failed", error);
    }
  };

  return (
    <div>
      <h1>Welcome to login</h1>
      <form onSubmit={handleSubmit}>
        <label className="loginUsername">
          Username
          <input
            type="text"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            required
          />
        </label>
        <label className="loginPassword" >
          Password
          <input 
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required
          />
        </label>
        <label>
          <button className="loginSubmit" type="submit">Login</button>
        </label>
      </form>
    </div>
  );
};

export default Login;
