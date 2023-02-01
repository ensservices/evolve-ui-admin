import { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { useRouter } from "next/router";
import _ from "lodash";
import { data } from "autoprefixer";
// const pageSize =  10; 



const Home = () => {
  const [user, setUser] = useState(
    {
      Id: "",
      accountId: "",
      name: "",
      mothername: "",
      email: "",
      password: "",
      contact: "",
      year_of_graduation: "",
      upse_appearing_year: "",
      is_verified: "",
      uid: "",

    }
  )
  const handleinput = async () => {
    try {

      // const token = JSON.parse(localStorage.getItem("token"));
      const options2 = {
        url: `https://api.evolveias.com/user/addUser`,
        method: "post",
        headers: {
          Authorization: "iIYSmv6I2i092mjw7OA66ufXmipzxXpv2NBL16WgSJ3apoOJ31qO7Ou29cqj",


        },
        data: user
      };
      setUser({
        Id: options2.data.Id,
        accountId: options2.data.accountId,
        name: options2.data.name,
        mothername: options2.data.mothername,
        email: options2.data.email,
        password: options2.data.password,
        contact: options2.data.contact,
        year_of_graduation: options2.data.year_of_graduation,
        upse_appearing_year: options2.data.upse_appearing_year,
        is_verified: options2.data.is_verified,
        uid: options2.data.uid

      })
      console.log("dadaddadadad", options2);
      console.log("userlist=========>",)

      const res = await axios(options2);
      console.log("res", res);
      if (res.status === 200) {
        console.log("success")
      }

    }
    catch (error) {
      console.log("###====>", error);
    }


  };
  useEffect(() => {
    handleinput();
  }, []);
  // const notify1 = () => {
  //   console.log("mmmmmm=====>>","formsubmit");
  //   toast.success(<b>You are Logged In. </b>, {
  //       duration:6000
  //   })
  //  };
  //   const router = useRouter();
  //   const handleinput =async (e) => {
  //     // e.preventDefault();
  //     // console.log("logindata=>>>>", user);

  //     const url = "https://api.evolveias.com/user/addUser";

  //     const data = await axios.post(url,{

  //       Id:user.Id,
  //       accountId:user.accountId,
  //     name:user.name,
  //     motherName:user.motherName,
  //     email:user.email,
  //     password:user.password,
  //     contact:user.contact,
  //     year_of_graduation:user.year_of_graduation,
  //     upse_appearing_year:user.optional_upssc_appearing_year,
  //     is_verified: user.is_verified,
  //     uid:user.uid
  //     })
  //     console.log("74data==>>",data)
  //     // .catch(error => {console.log("73error==>>",error)})
  //     .then(result=>{
  //       // console.log("72res==>>",result);
  //       if (result.data.status == 200) {   
  //             toast.success(<b>You are logged In.</b>,{
  //               duration:2000
  //             })  
  //             localStorage.setItem("detailsSaved", result.data.token);
  //             localStorage.setItem("usernameSaved", result.data.user.name);
  //             localStorage.setItem("userid", result.data.user.id);                
  //             const alertFunc = () =>  {               
  //               router.push("/add_user");
  //             }      
  //             setTimeout(alertFunc, 2000)             
  //             const alertFunc1 = () => {        
  //               window.location.reload();
  //             }
  //             setTimeout(alertFunc1, 3000)
  //           }else {
  //             // toast.error(<b>Email is not registered or Password may be wrong</b>)}
  //             console.log("error")}
  //     })
  //     .catch(error => {
  //       // console.log("73error==>>",error)
  //       ;if (error = !null) {
  //             // toast.error(<b>Email or Password is incorrect.</b>)
  //   }})
  // }


  return (
    <>

      {/* <div className="row mt-4"> */}
      {/* <div className="col-md-12  mt-4 pl-4 pr-4 pt-2"> */}
      {/* <div className="card shadow mb-4"> */}
      <div className="card-header py-3 d-flex justify-content-between text-danger">
        <h1>
          <b>
          ADD USER

          </b>
        </h1>


      </div>
      <div className="table-responsive">


        <table
          className="table table-bordered"
          id="dataTable"
          width="100%"
        >
          <thead  >
            <tr>
              <th className="text-danger" >Id</th>
              <th className="text-danger">AccountId</th>
              <th className="text-danger">Name</th>
              <th className="text-danger">MotherName</th>
              <th className="text-danger">E-mail</th>
              <th className="text-danger">Password</th>
              <th className="text-danger">Contact</th>
              <th className="text-danger">Year Of Graduation</th>
              <th className="text-danger">Optional Upssc Aappearing Year</th>
              <th className="text-danger">Is_verified</th>
              <th className="text-danger">Uid</th>
              <th className="text-danger">Update </th>
              {/* <th> Remove</th> */}

            </tr>
          </thead>
          <tbody>
            {/* {

                    paginatedPost &&
                    paginatedPost.map((item, index) => {
                      return ( */}
            <tr >
              <td>
                <div className="form-control">
                  <input name="Id" type="number" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} />
                </div>
              </td>
              <td>
                <div className="form-control">
                  <input name="accountId" type="number" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} />
                </div>
              </td>
              <td>
                <div className="form-control">
                  <input name="name" type="text" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} />
                </div>
              </td>
              <td>
                <div className="form-control">
                  <input name="mothername" type="text" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} />
                </div>
              </td>
              <td>
                <div className="form-control">
                  <input name="email" type="email" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} />
                </div>
              </td>
              <td>
                <div className="form-control">
                  <input name="password" type="password" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} />
                </div>
              </td>
              <td>
                <div className="form-control">
                  <input name="contact" type="contact" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} />
                </div>
              </td>
              <td>
                <div className="form-control">
                  <input name="year_of_graduation" type="text" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} />
                </div>
              </td>
              <td>
                <div className="form-control">
                  <input name="upse_appearing_year" type="text" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} />
                </div>
              </td>
              <td>
                <div className="form-control">
                  <input name="is_verified" type=" boolean "  onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} />
                </div>
              </td>
              <td>
                <div className="form-control">
                  <input name="uid" type="number" onChange={(e) => { setUser({ ...user, [e.target.name]: e.target.value }) }} />
                </div>
              </td>
              


              <td className="d-flex justify-content-center gap-3">
                <button className="btn btn-danger" type="submit" onClick={() => handleinput()}>Add user</button>
              </td>
              {/* <td>
                            <button className={`btn ${item.id ? 'btn-danger' : 'btn-secondary'}`} id="btnDelete" onClick={() => handleDelete(item)} disabled={!item.status ? true : false}>Delete</button>

                          </td> */}
            </tr>
            {/* )
                    })} */}
          </tbody>
        </table>
      </div>

      {/* <nav className="d-flex justify-content-center">
              <ul className="pagination">
                {
                  pages.map((page)=>(

                    <li className={page=== currentPage? "page-item active ":"page-item" }
                    >
                      <p className="page-link"
                      onClick={()=>  pagenation(page)}
                      >

                       {page}
                      </p>
                      </li>
                      
                  ))
                }
              
               
              </ul>
            </nav> */}
      {/* </div> */}
      {/* </div> */}
      {/* </div> */}
    </>
  );
}


export default Home;