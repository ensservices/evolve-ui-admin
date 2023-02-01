import { Button } from "@mui/material";
import Router, { useRouter } from 'next/router';
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
// import Courses from './courses';




const Courses = () => {
  const [courseList, setCourseList] = useState([]);
  
  // const token = JSON.parse(localStorage.getItem("token"));


  const fetchCourseList = async () => {
    try {
      
      const options = {
        method: 'get',
        url: `https://api.evolveias.com/user/get_courses`,
        headers: {
          Authorization: "iIYSmv6I2i092mjw7OA66ufXmipzxXpv2NBL16WgSJ3apoOJ31qO7Ou29cqj",
        }
      };
      const Data = await axios(options);
      console.log("courselistdata",Data.data.courses[0].name)
      setCourseList(Data?.data?.courses);
      
    } catch (error) {
     
      console.log(error)
    }
  }
  
  useEffect(() => {
    fetchCourseList();
  }, []);


  const router = useRouter();
  const contentUpload = () => {
    alert("redirecting")
    router.push("/content_upload")


  }
  const handleDelete = (id) => {
    alert(id)
    // fetch(`https://api.evolveias.com/user/get_courses/${id}`,{
    //   method :"DELETE"
    // }).then((result)=>{
    //   result.json().then((resp)=>{
    //     console.log("ressp+++++++========>",resp)
    //   })
    // })
    

  }

  return (
    <>
    
            <h1 className="text-danger">
              <b>
                COURSES
                </b>
            </h1>
    <div className="row mt-4">
      <div className="col-md-12  mt-4 pl-4 pr-4 pt-2">
        <div className="card shadow mb-4">

          <div className="card-header py-3 d-flex justify-content-between  text-danger">
            

            
          </div>
          <div className="table-responsive">
          <table
            className="table table-bordered "
            id="dataTable"
            width="100%"
          >
            <thead>
              <tr className="text-danger ">
              <th >S.No</th>
                <th >ID</th>
                <th >Name</th>
                <th >Amount</th>
                <th >Course Validation</th>
                <th >Settings</th>
                <th > Remove</th>
              </tr>
            </thead>
            <tbody>
              {courseList &&
                courseList.map((item,index) => {
                  return(

                    <tr  key={index}> 
                    <td>{index+1}</td>
                     <td>{item?.id}</td>
                      <td>{item?.name}</td>
                      <td>{item?.ammount}</td>
                      <td>{item?.coursevalidation}</td> 

                      <td>
                        <Button variant="outlined" color="success" text="" onClick={contentUpload}>Settings</Button>
                      </td>
                      <td>
                        {/* <button className="btn btn-dander">Disable</button> */}
                        <Button variant="outlined" color="error" onClick={()=>handleDelete(item.id)}>Delete</Button>

                      </td>

                    </tr>
                  )


                })

              }

              
            </tbody>
          </table>
          </div>

        </div>
      </div>
    </div>
    </>


  )
}

export default Courses;