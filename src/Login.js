import React, { useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [emailerr, setemailErr] = useState("Not A Email Valid Format");
  const [passerr, setpassErr] = useState("Too Short Password...Minimum 6 characters");
  const [todo, setTodo] = useState(false);
  const Helper = (e) => {
    e.preventDefault();
    notify();
  }
  const notify = () => {

    let eiderr = Evalidate();
    let perr = Pvalidate();
    if (eiderr === "false") {
      toast.error(emailerr, {
        position: "top-center",
      });
    } else if (perr === "false") {
      toast.error(passerr, {
        position: "top-center",
      });
    } else {
      setTodo(true);
      setEmail("");
      setPass("");
      toast.success("You are Logged in!!!!!", {
        position: "top-center",
      });
    }
  };
  const Evalidate = () => {
    if (!email.includes("@")) {
      setemailErr("Not a valid  Email Format");
      return "false";
    } else {
      setemailErr("Too Short Password...Minimum 6 characters ");
      return "true";
    }
  };
  const Pvalidate = () => {
    if (pass.length < 5) {
      setpassErr("Too Short Password...Minimum 6 characters");
      return "false";
    } else {
      setpassErr("");
      return "true";
    }
  };
  function renderbuttons() {
    if (todo) {
      return (
        <React.Fragment>
          <div className="container text-center ct3">
            <Link className="btn btn-success btn-lg" role="button" to="/todo">
              GO TO TODO APP!<i className="arrow right icon"></i>
            </Link>

          </div>
        </React.Fragment>
      );
    } else {
      return (<React.Fragment>
        <div className="container ct1 text-white">
          <h1>LOGIN</h1>
          <div className=" ct">
            <div class="mb-3 row">
              <label className=" col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  name="email"
                  className="form-control form-control-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label className=" col-sm-2 col-form-label">Password</label>
              <div class="col-sm-10">
                <input
                  type="password"
                  name="pass"
                  className="form-control form-control-sm"
                  value={pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                />
              </div>
            </div>
            <button onClick={Helper} className="btn btn-primary btn-lg">
              Submit
            </button>
          </div>
        </div>
      </React.Fragment>
      );
    }
  }

  return (
   <>
    {
      renderbuttons()
    }
    <ToastContainer />
</>

  );
}
