import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { Component } from "react";
axios
const Enrollcourses = () => {
  const[fileData,setFileData]=useState();
  const [courseData, setCourseData] = useState();
  const coursealot = () => {
    alert("hello")
  }



  const options = [
    {
      label: "Geography",
      value: "Geography",
    },
    {
      label: "Test series",
      value: "Test series ",
    },
    {
      label: "Quick revision",
      value: "Quick revision",
    },
    {
      label: "Test series 2023",
      value: "Test series 2023",
    },
  ];
  const handleDelete=()=>{
    alert("delete working ")
  }
  const uploadHandler =()=>{
    alert("uploaded success")
   

  }

  const uploadFile = async (e) => {
    const file_ = await uploadHandler(e);
    console.log("====>");
    setFileData({ ...fileData, [e.target.name]: file_ });
  };



  return (
    <div>
      <div className="card shadow mb-4 ">
      <div className="card-header">
        <div className="row">
          <div className="col-md-6 ">
            <div className="form-group mx-2">
              <label><h1>Course name</h1></label>
              {/* <select
                type="text"
                className="form-control mb-4">
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select> */}
              <input     type="file"
                        className="form-control"
                        value={fileData}
                        name="returnable"
                        id=""
                        // onChange={(e) => uploadFile(e)}
                        // onBlur={(e) => errorHandler(e)}

                      />
                        {/* <option value="">input courses</option>
                        <option value="true">geograpghy optional</option>
                        <option value="false">test series</option> */}
                      {/* </input>  */}
              {/* <input
            type="text"
            className="form-control"
            name="location_name"
            placeholder="Select Course"
            
            // disabled
            // onChange={(e) => inputHandler(e)}
          /> */}
              <input
                type="submit"
                className='btn btn-primary '
                name="upload"
                value="Upload"
                // value='upload'
                onClick={uploadFile}

              // disabled
              // onChange={(e) => inputHandler(e)}
              />

            </div>
          </div>



          {
            // <div className="col-md-12 m-2">
            //     <button type="submit" className="btn btn-primary"
            // onClick={
            // location.seller_id?updateLocation: newLocationCreate}
            //         >
            //         {
            //             loading ? 'Saving...' : "Save"
            //         }
            //     </button>
            // </div>
          }
        </div>
        {/* <NotificationContainer /> */}
      </div>
      </div>
      <div className="row">
        <div className="col-md-12 pl-4 pr-4 pt-2">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex justify-content-between">
              <h1>
                Uploaded Contents
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
                  <th >Id</th>
                  <th>Orignal Name   </th>
                  <th>Destination</th>
                  <th>File name</th>
                  <th>File type</th>
                  {/* <th >Settings</th> */}
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <td

                  >23</td>
                  <td>geogrphy optional</td>
                  <td>edugyan</td>
                  <td>test series</td>
                  <td>pdf</td>
                  {/* <td>
                        <Button variant="outlined" color="success"  text=""  onClick={coursealot}>Edit</Button>
                       </td> */}
                  <td>
                    {/* <button  id ="btnDelete" className="btn btn-contained-dander">Delete</button> */}
                    <Button variant="outlined" color="error" onClick={handleDelete}  >Delete</Button>
                    {/* <input type='submit' value='delete' onclick={handleDelete} class='btn btn-danger mb-2 mx-auto d-block'/>  */}


                  </td>


                </tr>

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
          </div>


          )
}
          export default Enrollcourses;