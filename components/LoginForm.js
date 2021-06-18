import Link from "next/link";
import Image from "next/Image";
import App from "next/app";
import Picture from "../public/assets/images/k-shuttle.svg";
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
            <div className="container-fluid vh-100 vw-100 login">
                <div className="row">
                    <div className="col-6 col-lg-4 mx-auto py-auto login-card">
                        <div className="d-flex justify-content-center mb-4">
                            <Image src={Picture} width={200} alt="k-shuttle" />
                        </div>
                        <h4 className="login-heading mb-5">
                            Sign in to continue
                        </h4>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-label-group">
                                <label htmlFor="inputName">Username</label>
                                <input
                                    type="Name"
                                    name="username"
                                    className="form-control"
                                    placeholder="Username"
                                    required
                                    autoFocus
                                    value={username}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            <div className="form-label-group">
                                <label htmlFor="inputPassword">Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    placeholder="Password"
                                    required
                                    value={password}
                                    onChange={this.handleInputChange}
                                />
                            </div>
                            {error && (
                                <div className="error-message">
                                    Invalid username and password. Please try
                                    again
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
        );
    }
}

export default Login;
