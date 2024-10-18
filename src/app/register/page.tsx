"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

export type UserData = {
  username: string;
  email: string;
  password: string;
};

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>();

  const onSubmit = async (data: UserData) => {
    console.log(data);
    try {
    } catch (err: any) {
      console.error(err.message);
      throw new Error(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="md:grid md:grid-cols-2">
          <div className="hidden md:block">
            <Image
              src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg"
              width={500}
              height={500}
              alt="register page"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 flex flex-col justify-center">
            <h1 className="text-3xl font-semibold text-center mb-6">
              Register <span className="text-accent">Now</span>
            </h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-sm font-semibold">
                    Full Name
                  </span>
                </label>
                <input
                  type="text"
                  {...register("username", {
                    required: "Username is required",
                  })}
                  placeholder="Enter your full name"
                  className={`input input-bordered w-full ${
                    errors.username ? "input-error" : ""
                  }`}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text text-sm font-semibold">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Enter your email"
                  className={`input input-bordered w-full ${
                    errors.email ? "input-error" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="form-control mb-6">
                <label className="label">
                  <span className="label-text text-sm font-semibold">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "Password is required",
                  })}
                  placeholder="Enter your password"
                  className={`input input-bordered w-full ${
                    errors.password ? "input-error" : ""
                  }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-accent w-full text-white font-bold py-2"
              >
                Register
              </button>
            </form>

            <p className="text-center mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-accent font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
