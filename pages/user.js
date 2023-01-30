import { useState, useEffect, useRef, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
 const Home = () => {

     const [studentList, setStudentList] = useState([]);
     // const [loading, setLoading] = useState(true);
  // /   / const [searchVal, setSearchVal] = useState("");
      const [button, setButton] = useState(true);



     // const navigate = useNavigate();
  
  

  //   // get all products from db to be shown in UI
    const fetchstudentList = async () => {
    try {
      // setLoading(true);
      const options = {
        method: "get",
        url: "https://api.evolveias.com/user/get_users",
        headers: {
          Authorization: stoken,
        }
      };
      const studentData = await axios(options);
      console.log("data=>=>", studentData)
      
        setStudentList(studentData);
        // setLoading(false);
      
    } catch (error) 
    {
      console.log("error",error)
      // // setLoading(false);
      // setStudentList(null);
      // if (error && error.response && error.response.data.error)
      //   // NotificationManager.error(`${error.response.data.error}`, 'Error', 2000, () => { });
      //   NotificationManager.error(`${error.response.data.error}`, 'Error', 5000, () => { });
    }
   };
    const handleDetailSync = async () => {
    // try {
    //   const options = {
    //     method: "get",
    //     url: "",
    //     headers: {
    //       Authorization: stoken,
    //     }
    //   }
    //   const studentData = await axios(options);
    //   console.log(studentData);
    //   if (!studentData.length) {
    //     return false;
    //   }
    //   return studentData;
    // } catch (error) {
    //   // setLoading(false);
    //   // if (error && error.response && error.response.data.error)
    //   //   NotificationManager.error(`${error.response.data.error}`, 'Error', 2000, () => { });
    //   console.log("error".error)
    // }
   }
   const postAllDAta = async () => {
    // try {
    //   // setLoading(true);
    //   const evolveUser = await handleDetailSync();
    //   console.log('evolveUser', evolveUser);
    //   if (evolveUser.length) {
    //     console.log('evolveUser', evolveUser);
    //     const options2 = {
    //       method: "post",
    //       url: ``,
    //       headers: {
    //         Authorization: stoken,
    //       },
    //       data: evolveUser.splice(0, 10)
    //     }
    //     console.log('options', options2);
    //     const res = await axios(options2);
    //     if (res.status !== 200) {
    //       // setLoading(true);
    //       // NotificationManager.error('error', 'Error', 2000, () => { });
    //     }
    //     console.log('res', res.data.data);
    //     setStudentList(res.data.data);
    //     // NotificationManager.success('sucess', 'Success', 3000, () => { setStudentList(res) });

    //     const chunckData = _.chunk(evolveUser, 6);
    //     console.log('chunckData', chunckData);
    //     const allData = Promise.map(chunckData.map(async (_ch) => {
    //       const options2 = {
    //         method: "post",
    //         url: ``,
    //         headers: {
    //           Authorization: stoken,
    //         },
    //         data: _ch
    //       }
    //       const res = await axios(options2);
    //       return res;
    //     }));
    //     console.log("allData", allData);
    //     if (res.status !== 200) {
    //     //   setLoading(true);
    //     //   NotificationManager.error('Something Went Wrong Frontend product post', 'Error', 5000, () => { });
    //     }
    //     console.log('res', evolveUser);
    //     setStudentList(evolveUser);
    //     // NotificationManager.success('Successfully Synced Frontend', 'Success', 3000, () => { setProductList(res) });
    //     // setLoading(false);
    //   }
    // }
    //  catch (error) {
    //   // setLoading(false);
    //   if (error && error.response && error.response.data.error) {
    //     // NotificationManager.error(`${error.response.data.error}`, 'Error', 2000, () => { });
    //     alert("invaild action ")

    //   }

     }

    useEffect(() => {
      // const stoken = JSON.parse(localStorage.getItem("stoken"));
      fetchstudentList();
     }, []);

    const onUpdate = () => {
      router.push("/enroll_courser")
    }

    return (
      <>
        <div className="card-header py-3 d-flex justify-content-between">
          <h1>
            Student Details
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
        {/* <p className="text-gray-700 text-3xl mb-16 font-bold">Dashboard</p>
  
        <div className="grid lg:grid-cols-3 gap-5 mb-16">
          <div className="rounded bg-white h-40 shadow-sm"></div>
          <div className="rounded bg-white h-40 shadow-sm"></div>
          <div className="rounded bg-white h-40 shadow-sm"></div>
        </div>
        <div className="grid col-1 bg-white h-96 shadow-sm"></div> */}

        {/* <table class="table table-striped">
    <thead class="table-dark">
    <tr>
        <th scope="col">Id</th>
        <th scope="col">Name</th>
        <th scope="col">MotherName</th>
        <th scope="col">E-mail</th>
        <th scope="col">Password</th>
        <th scope="col">Contact</th>
        <th scope="col">Year_of graduation</th>
        <th scope="col">Optional -upssc-appearing-year-</th>
        <th scope="col">Is_verified</th>
        <th scope="col">uid</th>
      </tr>
    </thead>
    <tbody>
    <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
      <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
      </tr>
    </tbody>
   </table> */}
        <table
          className="table table-bordered"
          id="dataTable"
          width="100%"
        >
          <thead>
            <tr>
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
                studentList &&
                studentList
                
                   .map((info, _index) => {
                    return(
                  <tr key={_index}>
                    <td> {_index + 1} </td>

                    <td>{info?.name} </td>
                    <td>{info?.mothername}</td>
                    <td>{info?.e - mail}</td>
                    <td> {info?.password}</td>
                    <td> {info?.contact}</td>
                    <td> {info?.year_of_graduation}</td>
                    <td> {info?.optional_upsc_appearing_year}</td>
                    <td> {info?.is_verified}</td>
                    <td> {info?.uid}</td>
                    <td>uuuuu</td>
                    {/* <td>uuuu</td> */}


                    <td className="d-flex justify-content-center gap-3">
                      <button className="btn btn-primary" onClick={() => onUpdate(item)}>Edit</button>
                      <button className={`btn ${item.status ? 'btn-danger' : 'btn-secondary'}`} id="btnDelete" onClick={() => handleDelete(item)} disabled={!item.status ? true : false}>Disable</button>
                    </td>
                  </tr>
                );
                    })}
          </tbody>
        </table>
      </>
    );
  }


  export default Home;