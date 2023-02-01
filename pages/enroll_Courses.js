import { Button } from "@mui/material";
import { useRouter } from "next/router";
// import Router from "next/router";
const Enrollcourses = () => {
  const router = useRouter();
  const coursealot = () => {
    alert("hello you ")
    router.push("/coursemapping")
  }
  return (
    <div>
      <div className="row">
        <div className="col-md-12 pl-4 pr-4 pt-2">
          <div className="card shadow mb-4">

            <div className="card-header py-3 d-flex justify-content-between">
              <h1>
                Enroll Courses
              </h1>

            </div>
            <table
              className="table table-bordered "
              id="dataTable"
              width="100%"
            >
              <thead>
                <tr>
                  <th >Courses</th>
                  <th>Name   </th>
                  <th>Instructor</th>
                  <th >Settings</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr >
                  <td

                  >Geography</td>
                  <td>prabhakar</td>
                  <td>Prince Mishra</td>
                  <td>
                    <Button variant="outlined" color="success" text="" onClick={coursealot}>settings</Button>
                  </td>
                  <td>
                    {/* <button className="btn btn-dander">Disable</button> */}
                    <Button variant="outlined" >Delete</Button>

                  </td>


                </tr>


              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>


  )
}
export default Enrollcourses;