import { Button } from "@mui/material";
import Router, { useRouter } from 'next/router';
import React, { useEffect, useState, useContext } from "react";




const Courses = () => {
  const [courseList, setCourseList] = useState();
  // const token = JSON.parse(localStorage.getItem("token"));

  const fetchCourseList =  async () => {
    try {
      const options = {
        method: 'get',
        url: "https://api.evolveias.com/user/get_courses",
        headers: {
          Authorization: id,
        }
      };
      const courseListData = await axios(options);
      console.log()
      setCourseList(courseListData?.data)

    }
    catch (error) {
      console.log(error)
    }
  }
  const viewCourseDetails = (CourseId) => {
    const getCurrentCourse = courseList.filter(item => item.course_id == CourseId);
    localStorage.setItem("cousedetails", JSON.stringify(getCurrentCourse));
    window.location = "/courses"
  }
  useEffect(() => {
    fetchCourseList();
  }, []);


  const router = useRouter();
  const contentUpload = () => {
    alert("redirecting")
    router.push("/content_upload")


  }
  const handleDelete = () => {
    alert("delete record")

  }

  return (
    <div className="row">
      <div className="col-md-12 pl-4 pr-4 pt-2">
        <div className="card shadow mb-4">

          <div className="card-header py-3 d-flex justify-content-between">
            <h1>
              Courses
            </h1>
            {/* {/* <div className="d-grid">
                  {
                    !isApprove &&
                    <div className="px-4 pt-2 alert-danger" role="alert">
                      {/* <i className="bi bi-x font-weight-bold" style={{ marginRight: "10px", fontSize: "22px", cursor: "pointer" }}
                      onClick={() => setShowWarning(false)}>
                    </i> */}
            {/* <Link to='/profile' className="px-10 pt-3 alert-danger text-decoration-none justify-content-center d-flex p-4">Please update your profile to sync products with ONDC</Link> */}
            {/* </div> */}

            {/* //   <br />
                //   <button disabled={isApprove ? '' : 'disabled'} className="btn btn-primary" style={{ marginLeft: "auto", width: "250px" }} onClick={() => postAllProducts()} */}
            {/* //   >Sync Products with ONDC</button> */}
            {/* // </div> */}
          </div>
          <table
            className="table table-bordered "
            id="dataTable"
            width="100%"
          >
            <thead>
              <tr>
                <th >ID</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Course Validation</th>
                <th >Settings</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {courseList &&
                courseList.map((_data, _index) => {
                  return (

                    <tr  key={_index}> 
                      
                       {/* <td >12</td>
                      <td>Prabhakar</td>
                      <td>2300/-</td>
                      <td>60</td>  */}
                       <td >{_index+1}</td>
                      <td>{_data?.name}</td>
                      <td>{_data?.ammount}</td>
                      <td>{_data?.coursevalidation}</td> 

                      <td>
                        <Button variant="outlined" color="success" text="" onClick={contentUpload}>Settings</Button>
                      </td>
                      <td>
                        {/* <button className="btn btn-dander">Disable</button> */}
                        <Button variant="outlined" onClick={handleDelete}>Delete</Button>

                      </td>

                    </tr>


                  );
                })

              }

              {/* {
                        productList &&
                        productList
                          .filter((value) => {
                            if (searchVal === "") {
                              return value;
                            }
                            else {
                              if (value.name.toLowerCase().includes(searchVal.toLowerCase())) {
                                return value;
                              }
                            }
                          }) */}
              {/* .map((item, index) => (
                            <tr >
                              <td> {index + 1} </td>
                              <td> */}
              {/* <div className="row">
                                  <div className="col-md-12">
                                    <img
                                      src={item?.image}
                                      alt="ok"
                                      height={80}
                                      width={80}
                                    />
                                  </div>
                                </div> */}
              {/* </td>
                            //   <td> {item?.name} </td>
                            //   <td>{item?.min_price}</td>
                            //   <td>{item?.sku}</td>
                            //   <td> {item?.status ? 'true' : 'false'}</td>
                            //   <td className="d-flex justify-content-center gap-3">
                            //     <button className="btn btn-primary" onClick={() => onProductUpdate(item)}>Edit</button>
                            //     <button className={`btn ${item.status ? 'btn-danger' : 'btn-secondary'}`} id="btnDelete" onClick={() => handleProductDelete(item)} disabled={!item.status ? true : false}>Disable</button>
                            //   </td>
                            // </tr>
                          ))} */}
            </tbody>
          </table>

        </div>
      </div>
    </div>


  )
}
export default Courses;