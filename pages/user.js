import { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";
import { useRouter } from "next/router";
import _ from "lodash";
const pageSize =  10; 


const Home = () => {
  const router = useRouter();

  const [userList, setUserList] = useState([]);
  const [paginatedPost, setPaginatedPost] = useState();
  const [ currentPage, setCurrentPage]=useState(1 );
  // const [pagenatedPost, setPagenatedPost] =useState();

  // const [searchVal, setSearchVal] = useState("");


  // const token = JSON.parse(localStorage.getItem("token"));
  // const navigate = useNavigate();

  useEffect(() => {
    fetchUserList();
  }, []);
  const pageCount= userList? Math.ceil(userList.length/pageSize ): 0; 
  if(pageCount===1) return null;
  const pages =_.range(1,pageCount+1);  

  // get all data from db to be shown in UI
  const fetchUserList = async () => {
    try {

      const options = {
        method: "get",
        url: `https://api.evolveias.com/user/get_users`,
        headers: {
          Authorization: "iIYSmv6I2i092mjw7OA66ufXmipzxXpv2NBL16WgSJ3apoOJ31qO7Ou29cqj",
        }
      };
      const data = await axios(options);
      console.log("db products", data.data.users)
      if (data) {
        setUserList(data?.data?.users);
        console.log("item.name", data.data.users[0].name)
        setPaginatedPost(_(data?.data?.users).slice(0).take(pageSize).value());
      }
    } catch (error) {

      setUserList(null);
      console.log("******error")
    }
  };


  const pagenation=(pageNo)=>{
    setCurrentPage(pageNo);
    const startIndex =(pageNo-1)*pageSize ;
    const pagenatedPost = _(userList).slice(startIndex).take(pageSize).value();
    setPaginatedPost(pagenatedPost  )

  }






  // User delete
  // const handleDelete = async (item) => {
  //   try {

  //     const options = {
  //       url: `https://api.evolveias.com/user/get_users`,
  //       method: 'delete',
  //       headers: {
  //         Authorization: "iIYSmv6I2i092mjw7OA66ufXmipzxXpv2NBL16WgSJ3apoOJ31qO7Ou29cqj",
  //       },
  //       params: {
  //         id: item?.id,
          
  //     }
  //   }
  //     const res = await axios(options);
  //     if (res.status === 200) {
  //       const responseData = res.data.data[1];
  //       const user = userList.map(user => {
  //         if (user.id === item.id) {
  //           user.status = responseData.status;
  //           return user;
  //         }
  //         return user;
  //       });
  //       setUserList(user);

  //     }
  //     console.log(res);
  //   } catch (error) {

  //     console.log("#########",error)
  //   }
  // }



  function handleDelete (id) {
    alert(id)

/////////////user delete function substitute either use upper fn or use lowr//////////////////

    // fetch(`https://api.evolveias.com/user/get_users/${id}`,{         
    //   method :"DELETE"
    // }).then((result)=>{
    //   result.json().then((resp)=>{
    //     console.log("ressp+++++++========>",resp)
    //   })
    // })
    
 
  }

  const  onUpdate =()=>{
    router.push("/home")
  }
 

  return (
    <>

      {/* <div className="row mt-4"> */}
        {/* <div className="col-md-12  mt-4 pl-4 pr-4 pt-2"> */}
          {/* <div className="card shadow mb-4"> */}
            <div className="card-header py-3 d-flex justify-content-between">
              <h1 className="text-danger"><b>

                STUDENT DETAILS
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
                  <tr className="text-danger">
                    <th >S.No</th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>MotherName</th>
                    <th>E-mail</th>
                    <th>Password</th>
                    <th>Contact</th>
                    <th>Year Of Graduation</th>
                    <th>Optional Upssc Aappearing Year</th>
                    <th>Is_verified</th>
                    <th>Uid</th>
                    <th>Update </th>
                    <th> Remove</th>

                  </tr>
                </thead>
                <tbody>
                  {

                    paginatedPost &&
                    paginatedPost.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td> {index + 1} </td>
                          <td>{item?.id}</td>
                          <td>{item?.name}   </td>
                          <td>{item?.mothername}</td>
                          <td>{item?.email}</td>
                          <td> {item?.password}</td>
                          <td> {item?.contact}</td>
                          <td> {item?.year_of_graduation}</td>
                          <td> {item?.optional_upsc_appearing_year}</td>
                          <td> {item?.is_verified}</td>
                          <td> {item?.uid}</td>
                          {/* <td>uuuu</td> */}


                          <td className="d-flex justify-content-center gap-3">
                            <button className="btn btn-primary" onClick={() => onUpdate(item)}>Edit</button>
                          </td>
                          <td>
                          <button
                    className="btn btn-danger text-center "
                   onClick={()=>handleDelete(item.id)}
                  >
                    Delete
                  </button>
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
            </div>

            <nav className="d-flex justify-content-center">
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
            </nav>
            {/* </div> */}
            {/* </div> */}
             {/* </div> */}
          </>
          );
}


          export default Home;