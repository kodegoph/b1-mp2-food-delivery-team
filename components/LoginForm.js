import Link from "next/link";
import App from "next/app";

class Login extends App {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.state = {
            username: "",
            password: "",
            error: false,
        };
    }
    componentDidMount() {
        localStorage.removeItem("_gLogged");
    }
    handleInputChange(event) {
        this.setState({error: false});
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit(event) {
        event.preventDefault();
        const {username, password} = this.state;
        const {logIn} = this.props;
        if (username === "admin" && password === "admin123") {
            logIn();
        } else {
            this.setState({error: true});
        }
    }

    render() {
        const {username, password, error} = this.state;
        return (
            <div className="container">
                <div className="row no-gutter">
                    <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
                    <div className="col-md-8 col-lg-6">
                        <div className="login d-flex align-items-center py-5">
                            <div className="container border-3 rounded">
                                <div className="row">
                                    <div className="col-md-9 col-lg-8 mx-auto">
                                        <h3 className="login-heading mb-4">
                                            Welcome back!
                                        </h3>
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-label-group">
                                                <input
                                                    type="Name"
                                                    name="username"
                                                    className="form-control"
                                                    placeholder="Username"
                                                    required
                                                    autofocus
                                                    value={username}
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                />
                                                <label htmlFor="inputName">
                                                    Username
                                                </label>
                                            </div>

                                            <div className="form-label-group">
                                                <input
                                                    type="password"
                                                    name="password"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    required
                                                    value={password}
                                                    onChange={
                                                        this.handleInputChange
                                                    }
                                                />
                                                <label htmlFor="inputPassword">
                                                    Password
                                                </label>
                                            </div>
                                            {error && (
                                                <div className="error-message">
                                                    Wrong username and password
                                                </div>
                                            )}
                                            <button
                                                className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                                                type="submit">
                                                Sign in
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
