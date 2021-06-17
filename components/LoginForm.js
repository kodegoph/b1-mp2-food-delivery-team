import  Link from 'next/link'


const Login = () => {
    return (
      <div className="container">
      <div className="row no-gutter">
        <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
        <div className="col-md-8 col-lg-6">
          <div className="login d-flex align-items-center py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-9 col-lg-8 mx-auto">
                  <h3 className="login-heading mb-4">Welcome back!</h3>
                  <form>
                    <div className="form-label-group">
                      <input type="Name" id="inputName" className="form-control" placeholder="Username" required autofocus/>
                      <label htmlFor="inputName">Username</label>
                    </div>
    
                    <div className="form-label-group">
                      <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
                      <label htmlFor="inputPassword">Password</label>
                    </div>
    
                    <div className="custom-control custom-checkbox mb-3">
                      <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                      <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                    </div>
                    <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" type="submit">Sign in</button>
                    <div className="text-center d-flex  justify-content-around pd-4">
                      <a className="small" href="#">Forgot password?</a>
                      <Link href="../auth/signup"><a className="small" >Signup</a></Link>
                      </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    
 
    );
};
  
export default Login
  