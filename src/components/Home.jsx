import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h1 className="fw-bold mb-3">
            Welcome to <span className="text-primary">Account Manager</span>
          </h1>

          <p className="text-muted mb-4">
            A simple React application to register, login, and manage your
            account information. Built using React and Bootstrap.
          </p>

          <div className="d-flex gap-3">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => navigate("/login")}
            >
              Login
            </button>

            <button
              className="btn btn-outline-primary btn-lg"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
        </div>

        <div className="col-md-6 text-center mt-4 mt-md-0">
          <img
            src="https://illustrations.popsy.co/gray/web-design.svg"
            alt="App illustration"
            className="img-fluid"
            style={{ maxHeight: "350px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
