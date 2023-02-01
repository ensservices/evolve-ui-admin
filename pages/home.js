// import axios from 'axios';
// import { useEffect, useState, useContext } from "react";
// import config from "../../config";
// import DashBoardTheme from "../../component/dashboardTheme";
// import { NotificationManager } from 'react-notifications';
// import { UserContext } from '../../App';
// import { Link } from "react-router-dom";
import Link from "next/link";
// import Popup from '../../component/Popup';

const Index = () => {
 

  




  return (
    // <DashBoardTheme>
      <div className="row p-3">
        <div className='py-3 d-flex justify-content-between mb-5'>
          <h1 className="text-danger">Dashboard</h1>
          <div className="d-grid"></div>
          {
            // !isApprove &&
            <div className="px-4 pt-2 alert-danger " role="alert">
              {/* <i className="bi bi-x font-weight-bold" style={{ marginRight: "10px", fontSize: "22px", cursor: "pointer" }}
                onClick={() => setShowWarning(false)}>
              </i> */}
              {/* <Link className="px-10 pt-3 alert-danger text-decoration-none justify-content-center d-flex p-4">Please update your profile to sync products with ONDC</Link> */}
            </div>
          }

        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card card_edit shadow border-top-0 border-bottom-0 border-end-1 border-5 border-danger" >
            <div className="card-body  ">
              <div className='row'>
                <div className='col-10 mr-2'>
                <Link className="text-decoration-none" href="/add_user">
                  <strong className="card-title text-danger"><b>CREATE  NEW<br/>USER</b></strong><br />
                  <h5 className="card-text fw-bolder text-secondary">{}</h5>
                  </Link>
                </div>
                <div className='col-2 m-auto'>
                  <strong className='fw-bolder text-muted fs-4' ><i className="bi bi-calendar"></i></strong>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card card_edit shadow border-top-0 border-bottom-0 border-end-1 border-5 border-danger" >
            <div className="card-body">
              <div className='row'>
                <div className='col-10 mr-2'>
                    <Link className="text-decoration-none" href="/coursemapping"
                    
                    >
                  <strong className="card-title text-danger"><b>COURSES <br/> MODULE</b></strong>
                  <h5 className="card-text fw-bolder text-secondary">{}</h5>
                    </Link>
                </div>
                <div className='col-2 m-auto'>
                  <strong className='fw-bolder text-muted fs-4' ><i className="bi bi-person-fill"></i></strong>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card card_edit shadow border-top-0 border-bottom-0 border-end-1 border-5 border-danger" >
            <div className="card-body">
              <div className='row'>
                <div className='col-10 mr-2'>
                <Link className="text-decoration-none" href="/currentaffairs">
                  <strong className="card-title text-danger"><b>DAILY <br/>  UPDATES</b></strong>
                  <h5 className="card-text fw-bolder text-secondary">{}</h5>
                  </Link>
                </div>
                <div className='col-2 m-auto'>
                  <strong className='fw-bolder text-muted fs-4' ><i className="bi bi-clipboard"></i></strong>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mb-4">
          <div className="card card_edit shadow border-top-0 border-bottom-0 border-end-1 border-5 border-danger" >
            <div className="card-body">
              <div className='row'>
                <div className='col-10 mr-2'>
                <Link className="text-decoration-none" href="/content_upload">
                  <strong className="card-title text-danger"><b> UPLOAD  <br/> CONTENTS  <br/>  </b></strong>
                  <h5 className="card-text fw-bolder text-secondary">{}</h5>
                  </Link>
                </div>
                <div className='col-2 m-auto'>
                  <strong className='fw-bolder text-muted fs-4' ><i className="bi bi-chat-fill"></i></strong>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-4">
          <div className="card card_edit shadow border-top-0 border-bottom-0 border-end-1 border-5 border-danger" >
            <div className="card-body">
              <div className='row'>
                <div className='col-10 mr-2'>
                    <Link className="text-decoration-none" href="/"
                    
                    >
                  <strong className="card-title text-danger"><b>TITTLE <br/> HERE</b></strong>
                  <h5 className="card-text fw-bolder text-secondary">{}</h5>
                    </Link>
                </div>
                <div className='col-2 m-auto'>
                  <strong className='fw-bolder text-muted fs-4' ><i className="bi bi-person-fill"></i></strong>
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-3 mt-4">
          <div className="card card_edit shadow border-top-0 border-bottom-0 border-end-1 border-5 border-danger" >
            <div className="card-body">
              <div className='row'>
                <div className='col-10 mr-2'>
                    <Link className="text-decoration-none" href="/"
                    
                    >
                  <strong className="card-title text-danger"><b>TITTLE <br/> HERE</b></strong>
                  <h5 className="card-text fw-bolder text-secondary">{}</h5>
                    </Link>
                </div>
                <div className='col-2 m-auto'>
                  <strong className='fw-bolder text-muted fs-4' ><i className="bi bi-person-fill"></i></strong>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
     
      
        // !isApprove &&
     
      
    // </DashBoardTheme>
  )
}

export default Index
