import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h1>Oops!!!</h1>
            <Link to="/">GO Back To Home</Link>
        </div>
    );
};

export default ErrorPage;