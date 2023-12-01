import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (
        <div className="form_register bg-body mx-auto">
            <div className="container">
                <div className="form_content card my-3">
                    <div className="card-header text-center py-3">
                        <h3 className="card-title">Register</h3>
                    </div>
                    <div id="form" className="card-body d-flex flex-wrap flex-sm-nowrap">
                        <div className="form-input w-100 mx-3">
                            <input id="email" type="text" placeholder="Email" className="form-control" autoComplete="email" />
                            <span className="sp-thongbao" id="tbEmail" />
                            <input id="password" type="password" placeholder="Password" className="form-control" />
                            <span className="sp-thongbao" id="tbPassword" />
                            <input id="confirmPassword" type="password" placeholder="Password confirm" className="form-control" />
                            <span className="sp-thongbao" id="tbConfirm" />
                        </div>
                        <div className="form-input w-100 mx-3">
                            <input id="name" type="text" placeholder="Name" className="form-control" autoComplete="name" />
                            <span className="sp-thongbao" id="tbName" />
                            <input id="phoneNumber" type="text" placeholder="Phone number" className="form-control" />
                            <span className="sp-thongbao" id="tbPhone" />
                            <div id="gender" className="d-inline d-flex">
                                <h5>Gender</h5>
                                <div className="form-radio d-flex flex-wrap mx-4">
                                    <div className="radio">
                                        <input type="radio" name="gender" id="male" defaultValue="true" />
                                        <label htmlFor="male">Male</label>
                                    </div>
                                    <div className="radio">
                                        <input type="radio" name="gender" id="female" defaultValue="false" />
                                        <label htmlFor="female">Female</label>
                                    </div>
                                </div>
                            </div>
                            <span className="sp-thongbao" id="tbGender" />
                        </div>
                    </div>
                    <div className="py-3 text-center btn-submit">
                        <button id="btnBack" type="submit" className="btn btn-success mb-3" onclick="inputUser()">Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
  }
}
