'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import classes from "./login.module.css"
import axios from "../../axios.config";
// import { ClipLoader } from "react-spinners";

const page = () => {
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post("/login", {
        phone: phone,
        password: password
      })
      // console.log(response.data)
      localStorage.setItem("user", JSON.stringify(response.data));
      window.location.href = '/admintwo';
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <section className={classes.login}>
      <Link href="/">
        <h1 className="mt-10 text-3xl font-extrabold">T-Movie</h1>
      </Link>

      {/* form */}
      <div className={classes.login_container}>
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              type="phone"
              id="phone"
              placeholder="Phone number"
            />
          </div>
          <div>

            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className={`text-white ${classes.login_signInButton}`}>
            Login
          </button>
        </form>

        {/* Create account btn */}
        <p className="text-slate-500">
          Don’t have an account?
          <Link
            href="/signin"
            className="mt-2 text-slate-900"
          >
            Create account
          </Link>
        </p>
      </div>
    </section>
  );
};

export default page;