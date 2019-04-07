import React, { Component } from 'react'
import './ResponsiveForm.css'


export default class ResponsiveForm extends Component {
  render() {
    return (
      <div class='container'>
        <form>
                <div class="row">
                {/* <div class="alert alert-primary col-12" role="alert">
                    Add Customer
                </div> */}
                <h4 class="col-12 welcome">Welcome</h4>
                    <div class="col-lg-6">
                    <div class="alert alert-success my-header" role="alert">
                        Info
                    </div>
                        <div class="form-group row">
                            <lable type='text' for="staticEmail" class="col-lg-4 col-form-label">Email</lable>
                            <div class="col-lg-8">
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-lg-4 col-form-label">Password</label>
                            <div class="col-sm-8">
                                <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <lable type='text' for="staticEmail" class="col-lg-4 col-form-label">Email</lable>
                            <div class="col-lg-8">

                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-lg-4 col-form-label">Password</label>
                            <div class="col-sm-8">
                                <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <lable type='text' for="staticEmail" class="col-lg-4 col-form-label">Email</lable>
                            <div class="col-lg-8">

                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-lg-4 col-form-label">Password</label>
                            <div class="col-sm-8">
                                <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                            </div>
                        </div><div class="form-group row">
                            <lable type='text' for="staticEmail" class="col-lg-4 col-form-label">Email</lable>
                            <div class="col-lg-8">

                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-lg-4 col-form-label">Password</label>
                            <div class="col-sm-8">
                                <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                            </div>
                        </div><div class="form-group row">
                            <lable type='text' for="staticEmail" class="col-lg-4 col-form-label">Email</lable>
                            <div class="col-lg-8">

                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-lg-4 col-form-label">Password</label>
                            <div class="col-sm-8">
                                <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                            </div>
                        </div><div class="form-group row">
                            <lable type='text' for="staticEmail" class="col-lg-4 col-form-label">Email</lable>
                            <div class="col-lg-8">

                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-lg-4 col-form-label">Password</label>
                            <div class="col-sm-8">
                                <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                            </div>
                        </div><div class="form-group row">
                            <lable type='text' for="staticEmail" class="col-lg-4 col-form-label">Email</lable>
                            <div class="col-lg-8">

                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-lg-4 col-form-label">Password</label>
                            <div class="col-sm-8">
                                <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="alert alert-success" role="alert">
                            Info
                        </div>
                        <div class="form-group row">
                            <lable type='text' for="staticEmail" class="col-lg-4 col-form-label">Address</lable>
                            <div class="col-lg-8">
                                <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com" />
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="inputPassword" class="col-lg-4 col-form-label">Phone</label>
                            <div class="col-sm-8">
                                <input type="password" class="form-control" id="inputPassword" placeholder="Password" />
                            </div>
                        </div>
                    </div>
                </div>
</form>
      </div>
    )
  }
}
