const forgotpass = () => {
    return (
        <main className="me-main p-4 h-100 bg-color font-primary">
            <div className="container-fluid">
                <div className="col-sm-12 col-md-8 col-xl-8 d-flex justify-content-center align-content-center">
                    <div className="card-change">
                        <h1 className="center">Forgot password</h1>
                        <form>
                            <label htmlFor="email">Enter your email</label>
                            <input
                                type="text"
                                placeholder="email@example.com"></input>
                        </form>
                        <button className="btn-pass">
                            <a href="mail.google.com">
                                Send change password link
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default forgotpass;
