import React,{useState} from 'react'
 export default function Login(){
     const [email,setEmail ]= useState("");
     const [pass,setPass ]= useState("");
     return(
         <React.Fragment>
             <div className="container ct">
            <form>
              <div class="mb-3 row">
                <label className=" col-sm-2 col-form-label">Email ID</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="name"
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
                    type="text"
                    name="country"
                    className="form-control form-control-sm"
                    value={pass}
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
                  />
                </div>
              </div>
            
              <Link
                className="btn btn-primary btn-lg"
                role="button"
                to="/result"
              >
                Submit
              </Link>
            </form>
          </div>
         </React.Fragment>
     )

 }