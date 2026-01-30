import React,{ useState } from "react";
import { useNavigate } from "react-router-dom";

function Register(){
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const{ name,email,password,confirmPassword } = formData;

        let newErrors = {};

        if(!name || !email || !password || !confirmPassword){
            newErrors.general = "All fields are required";
        }

        if(password.length < 6){
            newErrors.password = "Password must be at least 6 characters long";
        }
        if(password !== confirmPassword){
            newErrors.confirmPassword = "Passwords do not match";
        }

        if(Object.keys(newErrors).length > 0){
            setErrors(newErrors);
            return;
        }

        const userData = {
            name,
            email,
            password,
        };
        localStorage.setItem("user", JSON.stringify(userData));

        setErrors({});
        alert("Registration successful!");
        navigate("/");
    };

    return (
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card shadow">
                    <div className="card-body">
                       <h3 className="text-center mb-4">Register</h3>

                       {Object.keys(errors).length > 0 && (
                           <div className="alert alert-danger">
                               {Object.values(errors).map((err, idx) => <div key={idx}>{err}</div>)}
                           </div>
                       )}

                       <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                            type="password"
                            className="form-control"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Confirm Password</label>
                            <input
                            type="password"
                            className="form-control"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-100">
                            Register
                        </button>
                       </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};
export default Register;