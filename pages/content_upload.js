import { Button } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { Component } from "react";
axios
const ContentUploads = () => {
  const [fileData, setFileData] = useState(
    {
      my_file: "",

    }
  );
  // const [courseData, setCourseData] = useState();
  // const coursealot = () => {
  //   alert("hello")
  // }



  const [uploadedFile, setUploadedFile] = useState([]);

  // const token = JSON.parse(localStorage.getItem("token"));


  const fetchFileDetails = async () => {
    try {

      const options = {
        method: 'get',
        url: `https://api.evolveias.com/user/get_uploads`,
        headers: {
          Authorization: "iIYSmv6I2i092mjw7OA66ufXmipzxXpv2NBL16WgSJ3apoOJ31qO7Ou29cqj",
        }
      };
      const Data = await axios(options);
      console.log("courselistdata", Data.data.uploads[0].name)
      setUploadedFile(Data?.data?.uploads);

    } catch (error) {

      console.log(error)
    }
  }

  useEffect(() => {
    fetchFileDetails();
  }, []);
  const uploadHandler = () => {
    alert("uploaded success")


  }


  const uploadFile = async () => {
    try {

      // const token = JSON.parse(localStorage.getItem("token"));
      const options2 = {
        url: `https://api.evolveias.com/user/upload`,
        method: "post",
        headers: {
          Authorization: "iIYSmv6I2i092mjw7OA66ufXmipzxXpv2NBL16WgSJ3apoOJ31qO7Ou29cqj",


        },
        data: fileData
      };
      setFileData({
        my_file: options2.data.my_file


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
    uploadFile();
  }, []);


  const handleDelete = (id) => {
    alert(id)

    // fetch(`https://api.evolveias.com/user/upload/${id}`,{
    //   method :"DELETE"
    // }).then((result)=>{
    //   result.json().then((resp)=>{
    //     console.log("ressp+++++++========>",resp)
    //   })
    // })
    

  }






  return (
    <div className="mt-4">

      <div className="mt-4">
        {/* <div className="card shadow  mb-4"> */}
        {/* <div className="card-header  "> */}
        <div className="row">
          <div className="col-md-6  mt-4 pl-4 pr-4 pt-2 ">
            <div className="form-group mx-2">
              <label><h1 className="text-danger">COURSE NAME</h1></label>
              <div className="d-flex">

                <input type="file"
                  className="form-control mt-4"
                  // value={fileData}
                  name="my_file"
                  onChange={(e) => { setFileData({ ...fileData, [e.target.name]: e.target.value }) }}
                // onChange={(e) => uploadFile(e)}
                // onBlur={(e) => errorHandler(e)}

                />

                <input
                  type="submit"
                  className='btn btn-danger ml-4 mt-4'
                  name="upload"
                  value="Upload"
                  // value='upload'
                  onClick={uploadFile}

                // disabled
                // onChange={(e) => inputHandler(e)}
                />
              </div>

            </div>
          </div>




        </div>

        {/* </div> */}
        {/* </div> */}
      </div>
      <div className="row mt-4">
        <div className="col-md-12  mt-4 pl-4 pr-4 pt-2">
          <div className="card shadow mb-4">
            <div className="card-header py-3 d-flex justify-content-between">
              <h1 className="text-danger">
                Uploaded Contents
              </h1>

            </div>
            <div className="table-responsive">

              <table
                className="table table-bordered "
                id="dataTable"
                width="100%"
              >
                <thead>
                  <tr className="text-danger">

                    <th  >Id</th>
                    <th>Asset_id   </th>
                    <th>public_id</th>
                    <th>Format</th>
                    <th>File type</th>
                    <th>File Url</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {uploadedFile &&
                    uploadedFile.map((item, index) => {
                      return (

                        <tr key={index}>

                          <td>{item?.id}</td>
                          <td>{item?.asset_id}</td>
                          <td>{item?.public_id}</td>
                          <td>{item?.type}</td>
                          <td>{item?.format}</td>
                          <td> {item.url}</td>


                          <td>
                            {/* <button className="btn btn-dander">Disable</button> */}
                            <Button variant="outlined" onClick={()=>handleDelete(item.id)}>Delete</Button>

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
    </div>


  )
}
export default ContentUploads;




////////////////////if needed apply react pagenation//////////// from user page////