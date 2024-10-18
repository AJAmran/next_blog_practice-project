"use client";

import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    console.log(data);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-4xl w-full">
        <div className="md:grid md:grid-cols-2">
          <div className="hidden md:block">
            <Image
              src="https://img.freepik.com/free-vector/login-concept-illustration_114360-739.jpg"
              width={500}
              height={200}
              alt="login page"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8 flex flex-col justify-center">
            <h1 className="text-3xl font-semibold text-center mb-6">
              Login <span className="text-accent">Here</span>
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("password", {
                    required: "Password is required",
                  })}
                  type="password"
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
                Login
              </button>
            </form>

            <p className="text-center mt-6">
              Don’t have an account?{" "}
              <Link href="/register" className="text-accent font-semibold">
                Sign Up
              </Link>
            </p>

            <div className="flex items-center justify-center mt-6">
              <span className="text-sm font-medium">Or Login With</span>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
              <button className="btn btn-circle">
                <Image
                  src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                  width={35}
                  height={35}
                  alt="Google"
                />
              </button>
              <button className="btn btn-circle">
                <Image
                  src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                  width={30}
                  height={30}
                  alt="GitHub"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
