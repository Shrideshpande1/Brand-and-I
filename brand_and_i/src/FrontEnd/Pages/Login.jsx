import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthContext";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { userlogin, authState } = useContext(AuthContext);
  const navigate = useNavigate();
  const submithandle = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        setLoading(false);
        if (res.token) {
          userlogin(res.token);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login-page" style={{
      border: "1px solid #7b7b7b",
    margin:"auto",
      width: "550px",
      marginTop:"50px",
      textAlign:"left",
      padding:"20px"

   
    }}>
      <form className="form"  onSubmit={submithandle}>
        <div>
         <label >Email</label><br />
            <input
              style={{
                border: "1px solid #7b7b7b",
                margin: "auto",
                width: "450px",
                marginTop: "10px",
                textAlign: "left",
                padding: "20px",
              }}
              value={email}
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          
        </div>
        <div>
          <label>Password</label><br />
            <input
              style={{
                border: "1px solid #7b7b7b",
                margin: "auto",
                width: "450px",
                marginTop: "10px",
                textAlign: "left",
                padding: "20px",
              }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter password"
            />
          
        </div>
        <div>
          <button
            style={{
              border: "1px solid #7b7b7b",
              margin: "auto",
              width: "250px",
              marginTop: "10px",
              
              padding: "20px",
            }}
            disabled={loading ? true : false}
            type="submit"
          >
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link style={{
             
              marginTop: "20px",
              color:"blue"
              
            }} className="message" to="/">
          Go Back
        </Link>
        <p>eve.holt@reqres.in</p>
        
      </div>

     
    </div>
  );
}
export default Login;
