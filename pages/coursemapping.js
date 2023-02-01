// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import { data } from 'autoprefixer'

// function Form() {
//   const [studentName, setStudentName] = useState([])
//   const [courseName, setCourseName] = useState([])
//   const [userList, setUserList] = useState({
//     userId: "",
//     courseId: ""
//   })


//   const courseHandler = (event) => {
//     setCourseName(event.target.value)
//     console.log("ababababbababab", event.target.value)

//   }
//   const StudentHandler = (event) => {
//     setStudentName(event.target.value)
//     console.log(event.target.value)
//   }

//   const fetchCourses = async () => {
//     try {


//       const options2 = {
//         method: 'get',
//         url: `https://api.evolveias.com/user/get_courses`,
//         headers: {
//           Authorization: "iIYSmv6I2i092mjw7OA66ufXmipzxXpv2NBL16WgSJ3apoOJ31qO7Ou29cqj",
//         }
//       };

//       const Deta = await axios(options2);
//       console.log("$$$")
//       console.log("ccccccccccccourseuuuuuuuuuuusssssseeeeeer", Deta.data.courses)
//       setCourseName(Deta?.data?.courses);

//     } catch (error) {

//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     fetchCourses();
//   }, []);


//   const FetchData = async () => {
//     try {


//       const options = {
//         method: 'get',
//         url: `https://api.evolveias.com/user/get_users`,
//         headers: {
//           Authorization: "iIYSmv6I2i092mjw7OA66ufXmipzxXpv2NBL16WgSJ3apoOJ31qO7Ou29cqj",
//         }
//       };

//       const Data = await axios(options);
//       console.log("$$$")
//       console.log("uuuuuuuuuuusssssseeeeeer", Data.data.users)
//       setStudentName(Data?.data?.users);
//       console.log("studentName-------->", studentName[0]?.id)
//     } catch (error) {

//       console.log(error)
//     }
//   }

//   useEffect(() => {
//     FetchData();
//   }, []);


//   const courseMapping = async () => {
//     try {

//       // const token = JSON.parse(localStorage.getItem("token"));
//       const options2 = {
//         url: `https://api.evolveias.com/user/enroll_course`,
//         method: "post",
//         headers: {
//           Authorization: "iIYSmv6I2i092mjw7OA66ufXmipzxXpv2NBL16WgSJ3apoOJ31qO7Ou29cqj",


//         },
//         data: userList
//       };
//       setUserList({

//         userId: studentName[2]?.id, // here we have to fetch  and put id from user api
//         courseId: courseName[2].id // here we have to fetch  and put id from course  api 

//       })
//       // console.log("#######userlist", options2.data.users[0].id)
//       // console.log("dadaddadadad", userId);
//       // console.log("userlist====****88=====>",courseId,)

//       const res = await axios(options2);
//       console.log("res", res);
//       if (res.status === 200) {
//         console.log("success")
//       }

//     }
//     catch (error) {
//       console.log("###====>", error);
//     }

//     // e.preventDefault();
//     // console.log('Student Name==========>', studentName);

//     // console.log('Course name>>>>>>', courseName);

//   };

//   useEffect(() => {
//     courseMapping();
//   }, []);
//   console.log("userlist#$$$%$%$%$+++++++++++++++++++++++++++++++++++++++++++++++++", userList)


//   return (
//     <>
//     <h1 className='ml-2 text-danger' >COURSE MAPPING</h1> 
//       <div className="row mt-4">
//         <div className="col-md-12 mt-4  py-4 pl-4 pr-4 pt-2">
//           <div className="card shadow mb-4">
//             <div classNmae="card-header py-3 d-flex justify-content-between">

//               <div className="d-grid">

//               </div>
//             </div>

//             <div className="card-body">
//               <div className="row">
//                 <div className="col-md-6">
//                   <div className="form-group mx-2">
//                     <label className='text-danger'><h3>
//                       COURSE NAME
//                       </h3>
//                       </label>
//                     <select className="form-control" value="" type="text" onChange={courseHandler}>
                      
//                       <option value=""> Choose Course name </option>

//                       {
//                         courseName.map((item, index) => (
//                           <option  className='text-danger' value={item.id} key={index} >{item.name}</option>

//                         ))
//                       }

//                     </select>

//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="form-group mx-2">
//                   <label className='text-danger' ><h3>
//                       STUDENT NAME
//                       </h3>
//                       </label>

//                     <select className="form-control"  type="text" value="" onChange={StudentHandler}>
//                       <option  className='text-danger' value="" >Choose Student name </option>


//                       {
//                         studentName.map((item, index) => (
//                           <option  className='text-danger' value={item.id} key={index} >{item.name}</option>

//                         ))
//                       }

//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="col-md-12 m-6 ml-2">
//               <button className="btn btn-danger   col-lg-2 mb-12 mx-auto d-block" onClick={courseMapping}>Save</button>

//             </div>
//           </div>
//         </div>
//       </div>

//     </ >
//   )
// }


// export default Form



import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { data } from 'autoprefixer'

function Formn() {
      const [studentName, setStudentName] = useState([] )
      const [courseName, setCourseName] = useState([])
      const [userList, setUserList] = useState({
        userId: "",
        courseId: ""
      })
      const [student,setStudent]=useState({
        
      });
      const [course,setCourse]=useState();

      const courseHandler = (event) => {
        setCourse(event.target.value)
        console.log("ababababbababab", event.target.value)

      }
      const StudentHandler = (event) => {
        setStudent(event.target.value)
        console.log("papappapap",event.target.value)
      }

      const fetchCourses = async () => {
        try {


          const options2 = {
            method: 'get',
            url: `https://api.evolveias.com/user/get_courses`,
            headers: {
              Authorization: "iIYSmv6I2i092mjw7OA66ufXmipzxXpv2NBL16WgSJ3apoOJ31qO7Ou29cqj",
            }
          };

          const Deta = await axios(options2);
          console.log("$$$")
          // console.log("ccccccccccccourseuuuuuuuuuuusssssseeeeeer", Deta.data.courses)
          setCourseName(Deta?.data?.courses);

        } catch (error) {

          console.log(error)
        }
      }

      useEffect(() => {
        fetchCourses();
      }, []);


      const FetchData = async () => {
        try {


          const options = {
            method: 'get',
            url: `https://api.evolveias.com/user/get_users`,
            headers: {
              Authorization: "iIYSmv6I2i092mjw7OA66ufXmipzxXpv2NBL16WgSJ3apoOJ31qO7Ou29cqj",
            }
          };

          const Data = await axios(options);
          console.log("$$$")
          // console.log("uuuuuuuuuuusssssseeeeeer", Data.data.users)
          setStudentName(Data?.data?.users);
          console.log("studentName-------->", studentName[0]?.id)
        } catch (error) {

          console.log(error)
        }
      }

      useEffect(() => {
        FetchData();
      }, []);


    const courseMapping = async () => {
      try {

        // const token = JSON.parse(localStorage.getItem("token"));
        const options2 = {
          url: `https://api.evolveias.com/user/enroll_course`,
          method: "post",
          headers: {
            Authorization: "iIYSmv6I2i092mjw7OA66ufXmipzxXpv2NBL16WgSJ3apoOJ31qO7Ou29cqj",


          },
          data: userList
        };
        setUserList({

          userId: student, // here we have to fetch  and put id from user api
          courseId: course // here we have to fetch  and put id from course  api 

        })
        // console.log("#######userlist", options2.data.users[0].id)
        // console.log("dadaddadadad", userId);
        // console.log("userlist====****88=====>",courseId,)

        const res = await axios(options2);
        console.log("res", res);
        if (res.status === 200) {
          console.log("success")
        }

      }
      catch (error) {
        console.log("###====>", error);
      }

      // e.preventDefault();
      // console.log('Student Name==========>', studentName);

      // console.log('Course name>>>>>>', courseName);

    };

    useEffect(() => {
      courseMapping();
    }, []);
    console.log("userlist#$$$%$%$%$+++++++++++++++++++++++++++++++++++++++++++++++++", userList);


  return (
    <>
    <h1 className='ml-2 text-danger' >COURSE MAPPING</h1> 
      <div className="row mt-4">
        <div className="col-md-12 mt-4  py-4 pl-4 pr-4 pt-2">
          <div className="card shadow mb-4">
            <div classNmae="card-header py-3 d-flex justify-content-between">

              <div className="d-grid">

              </div>
            </div>

            <div className="card-body">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group mx-2">
                    <label className='text-danger'><h3>
                      COURSE NAME
                      </h3>
                      </label>
                    <select className="form-control" value={course} type="text" onChange={courseHandler}>
                      
                      <option value=""> Choose Course name </option>

                      {
                        courseName.map((item, index) => (
                          <option  className='text-danger' value={item.id} key={index} > {item.name}</option>

                        ))
                      }

                    </select>

                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group mx-2">
                  <label className='text-danger' ><h3>
                      STUDENT NAME
                      </h3>
                      </label>

                    <select className="form-control"  type="text" value={student} onChange={StudentHandler}>
                      <option  className='text-danger' value="" >Choose Student name </option>


                      {
                        studentName.map((item, index) => (
                          <option  className='text-danger' value={item.id} key={index} >{item.name}</option>

                        ))
                      }

                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 m-6 ml-2">
              <button className="btn btn-danger   col-lg-2 mb-12 mx-auto d-block" onClick={courseMapping}>Save</button>

            </div>
          </div>
        </div>
      </div>

    </>
  )
}


export default Formn;