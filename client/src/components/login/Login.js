import React from "react";

const Login = () => {


  const onSubmit = e => {
    e.preventDefault();
    console.log("submit Clicked");
  };

  const onChange = e => {

  }
  
  

  return (
    <div className="card ">
      <div className="card-body text-center">
        <div className="col-6">
          <h3>Login</h3>
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
               
                onChange={onChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
               
                onChange={onChange}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
