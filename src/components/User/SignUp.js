import { useState } from "react";
import { signup } from "../../store/actions/authActions";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    email:""
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (event) =>
    setUser({ ...user, [event.target.name]: event.target.value });

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(signup(user, history));
    history.push("/");

  };

  return (
    <div className="container">
      <h3>Sign up</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>First Name</label>
          <input
            name="firstName"
            value={user.firstName}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            name="lastName"
            value={user.lastName}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input
            name="username"
            value={user.username}
            type="text"
            className="form-control"
            onChange={handleChange}
          />
        </div>

        <div class="form-group">
          <label >
            Email
          </label>
          <div class="col-sm-10">
            <input
              class="form-control"
              value={user.email}
              type="email"
              name="email"
              onChange={handleChange}
              
            />
          </div>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            name="password"
            value={user.password}
            type="password"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <button type="submit">
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Signup;