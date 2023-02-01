import Link from 'next/link'
import { useRouter } from 'next/router';
import axios from 'axios';
import { useState } from 'react';



const Login = () => {
    // const [jwtToken, setJwtToken] = useState("");
    const [user,setUser]=useState(
        {
          email:"",
          password:""
        }
    )
  const router = useRouter()
//    useEffect(() => {
//     // Perform localStorage action
//     setJwtToken(localStorage.getItem("detailsSaved"));
//     console.log(jwtToken);
//   }, [jwtToken]);
  
  const hadleinput =async (e) => {
    e.preventDefault();
    // console.log("logindata=>>>>", user);

    const url = "https://api.evolveias.com/user/userLogin";

    const data = await axios.post(url,{
      email:user.email,
      password:user.password
    })
    // console.log("74data==>>",data)
    // .catch(error => {console.log("73error==>>",error)})
    .then(result=>{
      // console.log("72res==>>",result);
      if (result.data.status === 200) {   
            
            localStorage.setItem("detailsSaved", result.data.token);
            localStorage.setItem("usernameSaved", result.data.user.name);
            localStorage.setItem("userid", result.data.user.id);                
            const alertFunc = () =>  {               
              router.push("/home");
            }      
            setTimeout(alertFunc, 2000)             
            const alertFunc1 = () => {        
              window.location.reload();
            }
            setTimeout(alertFunc1, 3000)
          }else {
            // toast.error(<b>Email is not registered or Password may be wrong</b>)
          }
    })
    .catch(error => {
      // console.log("73error==>>",error)
      ;if (error = !null) {
            // toast.error(<b>Email or Password is incorrect.</b>)
  }})

  }
  return (
    <div>
      <div className="container-fluid vh-100" style={{ paddingTop: "70px" }}>
        <div className="harish">
          <div className="rounded d-flex justify-content-center">
            <div className="col-md-4 col-sm-12 shadow-lg p-5 bg-light">
              <div className="text-center">
                <h3 className="text-danger">Admin</h3>
              </div>
             
                <div className="p-4">
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-danger">
                      <i className="bi bi-person-plus-fill text-white"></i>
                    </span>
                    <input
                      
                      className="form-control"
                      placeholder="Username"
                      type='email'
                       name="email" 
                       onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }}
                    />
                  </div>
                  <div className="input-group mb-3">
                    <span className="input-group-text bg-danger">
                      <i className="bi bi-key-fill text-white"></i>
                    </span>
                    <input
                     
                      className="form-control"
                      placeholder="password"
                      type='password' 
                      name="password"
                       onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }}
                    />
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexCheckDefault"
                    >
                      Remember Me
                    </label>
                  </div>
                  <button
                    className="btn btn-danger text-center mt-2"
                   onClick={hadleinput}
                  >
                    Login
                  </button>
                  {/* <p className="text-center mt-5">
                    Don't have an account
                    <span className="text-danger">Sign Up</span>
                  </p> */}
                  {/* <p className="text-center text-danger">
                    Forgot your password?
                  </p> */}
                </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
