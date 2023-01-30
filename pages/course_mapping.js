import { Button } from "@mui/material";
const Coursemaping =()=>{

  const allotment =()=>{
    alert("sucess")

  }

return (
    <>
      {/* <DashBoardTheme> */}
        <div className="row">
          <div className="col-md-12 pl-4 pr-4 pt-2">
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex justify-content-between">
                <h1>Course Mapping</h1>
                <div className="d-grid">
                  {/* {!isApprove && ( */}
                    <div className="px-4 pt-2 alert-danger " role="alert">
                      {/* <i className="bi bi-x font-weight-bold" style={{ marginRight: "10px", fontSize: "22px", cursor: "pointer" }}
                      onClick={() => setShowWarning(false)}>
                    </i> */}
                      {/* <Link
                        to="/profile"
                        className="px-10 pt-3 alert-danger text-decoration-none justify-content-center d-flex p-4"
                      >
                        Please update your profile to sync location with ONDC
                      </Link> */}
                    </div>
                  {/* )} */}
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mx-2">
                      <label>Course name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="location_name"
                        placeholder="Select Course"
                        
                        // disabled
                        // onChange={(e) => inputHandler(e)}
                      />
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <div className="form-group mx-2">
                      <label>Student name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="location_name"
                        placeholder="Select Student "
                        
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
               <div className="col-md-12 m-6 ml-2">

               {/* <Button variant="outlined" color="success"  type="submit"  onclick={allotment}>submit</Button> */}
               <input type='submit' value='submit' onClick={allotment} class='btn btn-primary mb-12 mx-auto d-block'/> 
               </div>
               </div>
            {/* {loading && <div className="loading">Loading&#8230;</div>} */}
          </div>
        </div>
      {/* </DashBoardTheme> */}
    </>
  );
                }
export default  Coursemaping ;