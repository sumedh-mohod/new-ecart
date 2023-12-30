import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
 
const SignUp = () =>{
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [pass1, setPass1] = useState("");
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
 
    useEffect(() => {
        setTimeout(function(){
            setMsg("");
        }, 15000);
    }, [msg]);
 
    const handleInputChange = (e, type) => {
        switch(type){
            case "user":
                setError("");
                setUser(e.target.value);
                if(e.target.value === ""){
                    setError("Username has left blank!");
                }
                break;
            case "email":
                setError("");
                setEmail(e.target.value);
                if(e.target.value === ""){
                    setError("Email has left blank!");
                }
                break;
            case "pass1":
                setError("");
                setPass1(e.target.value);
                if(e.target.value === ""){
                    setError("Password has left blank!");
                }
                break;
            default:
        }
    }
 
    const handleSubmit = () => {
        if(user !== "" && email !== "" && pass1 !== ""){
            let url = "http://localhost:8080/react_con/registration.php";
            let headers = {
                "Accept": "application/json",
                "Content-Type": "application/json"
            };
            let Data = {
                user: user,
                email: email,
                pass: pass1,
            }
            fetch(url, {
                method: "POST",
                headers: headers,
                body: JSON.stringify(Data)
            }).then((response) => response.json())
            .then((response) => {
                setMsg(response[0].result);
            }).catch((err) =>{
                setError(err);
                console.log(err);
            });
            setUser("");
            setEmail("");
            setPass1("");
        }
        else{
            setError("All fields are required!");
        }
    }
 
    const checkUser = () => {
        let url = "http://localhost:8080/react_con/checkuser.php";
        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        let Data = {
            user: user
        }
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data)
        }).then((response) => response.json())
        .then((response) => {
            setError(response[0].result);
        }).catch((err) =>{
            setError(err);
            console.log(err);
        });
    }
 
    const checkEmail = () => {
        let url = "http://localhost:8080/react_con/checkemail.php";
        let headers = {
            "Accept": "application/json",
            "Content-Type": "application/json"
        };
        let Data = {
            email: email
        }
        fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(Data)
        }).then((response) => response.json())
        .then((response) => {
            setError(response[0].result);
        }).catch((err) =>{
            setError(err);
            console.log(err);
        });
    }
 
    const checkPassword = () => {
        if(pass1.length < 8){
            setError("Password is less than 8 characters!")
        }
    }
 
    return(
        <>
        <section className="vh-100 bg-image">
          <div className="mask d-flex align-items-center h-100 gradient-custom-3">
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div className="card mt-4 mb-4" style={{borderRadius: 15}}>
                    <div className="card-body p-5">
                      <h2 className="text-uppercase text-center mb-5">Registartion Form</h2>
                      <p>
                          {
                              msg !== "" ?
                              <span style={{color: "green"}}><b>{msg}</b></span> :
                              <span style={{color: "#842029"}}><b>{error}</b></span>
                          }
                      </p>
                        <div className="form-outline mb-3">
                        <label className="form-label">User Name</label>
                          <input 
                              type="text"
                              name="user"
                              className="form-control form-control-lg"
                              value={user}
                              onChange={(e) => handleInputChange(e, "user")}
                              onBlur={checkUser}
                          />
                          
                        </div>
                        <div className="form-outline mb-3">
                        <label className="form-label">Email</label>
                          <input 
                                type="email"
                                name="email"
                                className="form-control form-control-lg"
                                value={email}
                                onChange={(e) => handleInputChange(e, "email")}
                                onBlur={checkEmail}
                            />
                       
                        </div>
                        <div className="form-outline mb-3">
                        <label className="form-label">Password</label>
                          <input 
                                type="password"
                                name="pass1"
                                className="form-control form-control-lg"
                                value={pass1}
                                onChange={(e) => handleInputChange(e, "pass1")}
                                onBlur={checkPassword}
                            />
                          
                        </div>
                        <div className="form-check d-flex justify-content-center mb-4">
                          <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3cg" />
                          <label className="form-check-label" htmlFor="form2Example3g">
                            I agree all statements in <a href="#!" className="text-body"><u>Terms of service</u></a>
                          </label>
                        </div>
                        <div className="d-flex justify-content-center">
                          <button 
                                type="submit"
                                defaultValue="Submit"
                                className="btn btn-outline-dark"
                                onClick={handleSubmit}
                          >Submit</button>
                        </div>
                        <p className="text-center text-muted mt-5 mb-0">Have already an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
}
 
export default SignUp;