'use client'
import React, { useState } from "react";
import Link from "next/link";
import classes from "./signin.module.css"
import axios from "../../axios.config";
import { ClipLoader } from "react-spinners";

const Page = () => {
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await axios.post("/register", {
        email: email,
        phone: phone,
        password: password
      })
      // console.log(response)
      setLoading(false)
      setSuccessMessage(response.data.message);
      localStorage.setItem("user", JSON.stringify(response.data));
      window.location.href = '/admintwo';
    } catch (error) {
      // console.log(error.response.data.error)
      setLoading(false)
      setError(error.response.data.error);
    }
  }

  return (
    <section className={classes.login}>
      <Link href="/">
        <h1 className="mt-10 text-3xl font-extrabold">T-Movie</h1>
      </Link>

      {/* form */}
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {
          successMessage ? (<p className="text-green-600">{successMessage}</p>) : ('')
        }
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Email"
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
            {
              loading ? (<ClipLoader size={25} color="#36d7b7" />) : (
                'Sign in'
              )
            }

          </button>
        </form>

        {/* Create account btn */}
        <p className="text-slate-500">
          Have an account?
          <Link
            href="/login"
            className="mt-2 text-slate-900"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Page;
