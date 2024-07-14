import React from "react";
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";

const Login = () => {

     const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
    // navigate("/")
    // handleResetPassword(data.email)
    // console.log(data.email)
  };
  let signError;
  if (error || gError) {
    signError = (
      <p className=" ">{error?.message || gError?.message}</p>
    );
  }
  return (
    <div>
      <div className="login">
        <div className="flex items-center justify-center h-screen  ">
          <div className="card w-96 bg-gradient-to-r from-[#157A90] via-[#160a2c] to-[#157A90] shadow-xl">
            <div className="card-body">
              <h2 className="  text-center text-2xl text-white font-bold">
                LOG IN
              </h2>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-white">Email</span>
                  </label>
                  <input
                    {...register("email", {
                      required: {
                        value: true,
                        message: "Email is requried",
                      },
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: "Provide a valid email", // JS only: <p>error message</p> TS only support string
                      },
                    })}
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    {errors.email?.type === "required" && (
                      <span
                        className="label-text-alt font-bold text-lg text-red-500"
                        role="alert"
                      >
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === "pattern" && (
                      <span
                        className="label-text-alt font-bold text-lg text-red-500"
                        role="alert"
                      >
                        {errors.email.message}
                      </span>
                    )}
                    {/* <span>Bottom Left label</span> */}
                  </label>
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text text-white">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is requried",
                      },
                      minLength: {
                        value: 6,
                        message: "Must be 6 charater",
                      },
                    })}
                    type="password"
                    placeholder="Type here"
                    className="input input-bordered w-full max-w-xs"
                  />
                  <label className="label">
                    {errors.password?.type === "required" && (
                      <span
                        className="label-text-alt font-bold text-lg text-red-500"
                        role="alert"
                      >
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === "minLength" && (
                      <span
                        className="label-text-alt font-bold text-lg text-red-500"
                        role="alert"
                      >
                        {errors.password.message}
                      </span>
                    )}
                    {/* <span>Bottom Left label</span> */}
                  </label>
                </div>
                {signError}
                <div className="card-actions justify-center py-5 ">
                  <input
                    value="Login"
                    className="btn w-full   max-w-xs  text-white btn-sm  bg-blue-900 justify-center"
                    type="submit"
                  />
                </div>
              </form>
              <div className="flex items-center justify-center">
                <p className="font-bold text-white">
                  Create a New Account Please
                </p>
                <Link to="/register" className="text-white font-bold btn   btn-sm  bg-blue-900 ">
                  Sign Up
                </Link>
              </div>
              <div>
                <button
                  className="text-sm font-bold btn-link text-white"
                  //  onClick={handleResetPassword}
                >
                  Forget Password
                </button>
              </div>
              <div className="divider text-white">OR</div>
              <div className="card-actions justify-center">
                <button
                  className="btn bg-blue-900 text-white"
                  onClick={() => signInWithGoogle()}
                >
                  CONTINIUE WITH GOOGLE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
