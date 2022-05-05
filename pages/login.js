import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Login = () => {

  const router = useRouter()

  const forSubmit = () => {
    router.push('/user')
  }
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    
    try {
      await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
    } catch {
    } finally {
      if(forSubmit()){
        console.log(forSubmit());
      }else{
        ev.preventDefault();
      }

    }
  };

  return (
    <div>
      <h1>Welcome to login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            value={username}
            onChange={(ev) => setUsername(ev.target.value)}
            required
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
            required
          />
        </label>
        <label>
          <button type="submit">
             Login
          </button>
        </label>
      </form>
    </div>
  );
};

export default Login;
