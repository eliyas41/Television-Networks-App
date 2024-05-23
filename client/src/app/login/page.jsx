'use client'
import React, { useState, useContext } from "react";
import Link from "next/link";
import classes from "./login.module.css"
// import { ClipLoader } from "react-spinners";

const page = () => {
  // const [loading, setLoading] = useState({
  //   signIn: false,
  //   signUp: false,
  // });

  // const authHandler = async (e) => {
  //   e.preventDefault();
  //   console.log(e.target.name);
  //   if (e.target.name == "signin") {
  //     setLoading({ ...loading, signIn: true });
  //     try {
  //       // Firebase sign-in
  //       const userInfo = await signInWithEmailAndPassword(auth, email, password);
  //       // console.log(userInfo);
  //       dispatch({
  //         type: Type.SET_USER,
  //         user: userInfo.user,
  //       });
  //       setLoading({ ...loading, signIn: false });
  //       navigate(navStateData?.state?.redirect || '/')

  //     } catch (err) {
  //       // console.error("Sign-in error:", err.message);
  //       setError(err.message);
  //       setLoading({ ...loading, signIn: false });
  //     };
  //   } else {
  //     setLoading({ ...loading, signUp: true });
  //     try {
  //       // Firebase sign-up
  //       const userInfo = await createUserWithEmailAndPassword(auth, email, password);
  //       // console.log(userInfo);
  //       dispatch({
  //         type: Type.SET_USER,
  //         user: userInfo.user,
  //       });
  //       setLoading({ ...loading, signUp: false });
  //       navigate(navStateData?.state?.redirect || '/')
  //     } catch (err) {
  //       // console.error("Sign-up error:", err.message);
  //       setError(err.message);
  //       setLoading({ ...loading, signUp: false });
  //     };
  //   }
  // };

  return (
    <section className={classes.login}>
      {/* logo */}
      <Link href="/">
        <h1 className="mt-10 text-3xl font-extrabold">T-Movie</h1>
      </Link>

      {/* form */}
      <div className={classes.login_container}>
        <h1>LOGIN</h1>
        <form action="">
          <div>
            {/* <label htmlFor="email">E-mail</label> */}
            <input
              // value={email}
              // onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              placeholder="Phone number"
            />
          </div>
          <div>
            {/* <label htmlFor="password">Password</label> */}
            <input
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            // onClick={authHandler}
            // name="signin"
            className={`text-white ${classes.login_signInButton}`}>
            Login
          </button>
        </form>

        {/* Create account btn */}
        {/* <button
          type="submit"
          name="signup"
          onClick={authHandler}
          className={classes.login_registerButton}>
          {loading.signUp ? (
            <ClipLoader color="#000" size={15} />
          ) : (
            "Create your Amazon Account"
          )}
        </button> */}
      </div>
    </section>
  );
};

export default page;