import React, { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import {login} from "../../redux/auth/auth"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const submitHandler = async (data) => {
    try {
      const res = await dispatch(login(data)).unwrap.then((res) => {
        localStorage.setItem("userToken", res.data.token);
        toast.success(res.message);
        setTimeout(() => {
          Navigate("/");
        }, 1500);
      });
    } catch (error) {
      toast.error(error);
    }
  };

  let getToken = localStorage.getItem("userToken");

  if (getToken) {
    return <Navigate to="/home" />;
  } else {
    <Navigate to="/login" />;
  }

  return (
    <>
      <section className="vh-100 bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card mb-5" style={{ borderRadius: 15 }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Login Form
                    </h2>
                    <form
                      onSubmit={handleSubmit((data) => submitHandler(data))}
                    >
                      <div className="form-outline mb-3">
                        <label className="form-label">User Name</label>
                        <input
                          type="text"
                          name="user"
                          id="user"
                          className="form-control form-control-lg"
                          {...register("user", { required: true })}
                        />
                        {errors.user && <p>User name is required.</p>}
                      </div>
                      <div className="form-outline mb-3">
                        <label className="form-label">Password</label>
                        <input
                          type="password"
                          name="pass"
                          id="pass"
                          className="form-control form-control-lg"
                          {...register("pass", { required: true })}
                        />
                        {errors.pass && <p>Please enter number for age.</p>}
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          defaultValue="Login"
                          className="btn btn-outline-dark"
                          // onClick={loginSubmit}
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
