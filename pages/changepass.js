const changepass = () => {
    return (
        <main className="me-main p-4 h-100 bg-color font-primary">
            <div className="container-fluid">
                <div className="col-md-4 col-xl-6 d-flex justify-content-center">
                    <div className="card-change">
                        <h1 className="center">Change your password</h1>
                        <label for="pwd">Old Password:</label>
                        <input
                            type="password"
                            id="pwd"
                            name="pwd"
                            pattern="(?=.*\d)(?=.*[a-z])(=.*[A-Z].{8,}"
                            title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters."></input>
                        <label for="pwd">New Password:</label>
                        <input
                            type="password"
                            id="pwd"
                            name="pwd"
                            pattern="(?=.*\d)(?=.*[a-z])(=.*[A-Z].{8,}"
                            title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters."></input>
                        <label for="pwd">Re-type New Password:</label>
                        <input
                            type="password"
                            id="pwd"
                            name="pwd"
                            pattern="(?=.*\d)(?=.*[a-z])(=.*[A-Z].{8,}"
                            title="Must contain at least one number, one uppercase and lowercase letter, and at least 8 or more characters."></input>
                        <button className="btn-pass">Submit</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default changepass;
