import Head from 'next/head'
import Link from 'next/link'
import Button  from 'react-bootstrap/Button'
import Image  from 'next/image'

export default  function Home (){
    return(
        <>
        <Head>
            <title>Dashboard | Login</title>
        </Head>
        <main className="vh-100 position-relative">
      <div className="container">
        <div className="row m-5 no-gutters shadow-lg">
          <div className="col-md-6 d-none d-md-block img-fluid">
                <Image src="/public/photologin.gif" width={400} height={400} />
          </div>
          <div className="col-md-6 bg-white p-5">
            <h3 className="pb-3">Login Form</h3>
            <div className="form-style">
              <form>
                <div className="form-group pb-3">
                  <input
                    type="email"
                    placeholder="Email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="form-group pb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <input name="" type="checkbox" value="" />
                    <span className="pl-2 font-weight-bold">Remember Me</span>
                  </div>
                  <div><a href="#">Forget Password?</a></div>
                </div>
                <div className="pb-2">
                  <button
                    type="submit"
                    class="btn btn-dark w-100 font-weight-bold mt-2"
                  >
                    Submit
                  </button>
                </div>
              </form>
              <div className="sideline">OR</div>
              <div>
                <Button
                  type="submit"
                  class="btn btn-primary w-100 font-weight-bold mt-2"
                >
                  <i class="fa fa-facebook" aria-hidden="true"></i> Login With
                  Facebook
                </Button>
              </div>
              <div class="pt-4 text-center">
                Get Members Benefit. <a href="#">Sign Up</a>
              </div>
              <span id="chrome_logo"></span>
              <h6 className="pt-4">
                Using Google Chrome?
                <a id="chrome_ad_link" href="#">Get Login</a> for Chrome!
              </h6>
            </div>

            <div id="dont_have_an_account">
              <h6>
                Need to <a href="#" cclassNamelass="login_link">sign up</a> for an
                account or
                <a href="#" id="forgot_password_link" className="login_link"
                  >reset</a
                >
                your password?
                <Link href="/admin">
                <a>See the awsomeness listing</a>
            </Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
    </main>
            
            
        </>
    )

}