import React, { useState, useEffect, } from 'react'
import { useRef } from 'react'

// import { CKEditor } from '@ckeditor/ckeditor5-react'
// import { ClassicEditor } from '@ckeditor/ckeditor5-build-classic';
import JoditEditor from 'jodit-react';

// import { CKEditor } from '@ckeditor/ckeditor5-react';
const Currentaffairs = () => {
    const Editor = useRef(null);
    const [content, setContent] = useState('');
    const [date, setDate] = useState();
    // const [companyName, setCompanyName] = useState("")
    // const [companyOwner, setCompanyOwner] = useState("")
    // const [ownerAddress, setOwnerAddress] = useState("")
    // const [companyList, setCompanyList] = useState([{'name':'','id':''}])

    // useEffect(() =>{
    //     const fetchData = async ()=>{
    //         const response = await fetch(`http://127.0.0.1:8000/api/company/`);
    //         const newData = await response.json();
    //         setCompanyList(newData);
    //         // console.log(newData);
    //     };
    //     fetchData();
    // }, [])

    // const handleChange = (event) =>{
    //     setCompanyName(event.target.value);
    // }


    // const saveBtn = (e) => {
    //     e.preventDefault();
    //     console.log('Company Owner',companyOwner);
    //     console.log('Company Owner Address',ownerAddress);
    //     console.log('Company Name',companyName);

    // }
    const createHandler = () => {
        alert("sucess")
    }
    const Date = () => {
        console.log("date", date)

    }

    return (
        <div className=' panel panel-default'>
            <div className="panel-heading widget-header bordered-bottom bordered-themesecondary">
                <p className='panel-tittle text-danger  mt-4' ><h1> <b>Daily Current Affairs </b></h1></p>

            </div>
            <div className='panel-body'>
                <form className='customForm form-horizontal' encType='multipart/form-data' id='course-bundle-form'>
                    <div className='control-group'>
                        <div className="col-md-6">
                            <div className="form-group ">
                                <label className="control-label text-danger mt-4"><b>Squence Number</b></label>
                                <input

                                    type="number"
                                    className="form-control  text-muted"
                                    name="CourseBundle"
                                    placeholder="Sr.no" />
                            </div>
                        </div>

                        <div className="col-md-6 mt-4">
                            <div className="form-group ">
                                <label className="control-label text-danger"><b>Tittle</b></label>
                                <input

                                    type="text"
                                    className="form-control text-muted"
                                    name="tittle"
                                    placeholder="Tittle" />
                            </div>
                        </div>
                        <div className='controls mt-4 '>
                            <label className='control-label text-danger' for='CourseBundleSquence_no'><b>Description</b></label>
                            <JoditEditor
                               
                               
                                ref={Editor}
                                value={content}
                                onChange={newContent => setContent(newContent)} />

                        </div>
                        <div className="col-md-6 mt-4">
                            <div className="form-group ">
                                <label className="control-label text-danger"><b>Date</b></label>
                                <input

                                    type="date"
                                    className="form-control text-muted"
                                    name="date"
                                    onChange={e => setDate(e.target.value)}
                                />
                            </div>
                        </div>
                        {/* <div className='controls mt-4' >
                            
                        <label className='control-label' for='CourseBundleSquence_no'><b>Date</b></label>
                                <input  className='form-control'  type="date" onChange={e=>setDate(e.target.value)}
                                />

                           
                            

                            
                        </div> */}

                    </div>
                    <div className="col-md-6 m-6 ml-2">
                        <button className="btn btn-danger " onClick={createHandler}>CREATE</button>

                    </div>

                </form>
            </div>
        </div>

    )
}

export default Currentaffairs