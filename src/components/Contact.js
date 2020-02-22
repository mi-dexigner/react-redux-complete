import React, { Component } from 'react'
import axios from 'axios'
//  https://www.youtube.com/watch?v=EPnBO8HgyRU

export default class Contact extends Component {
  constructor() {
    super()

    this.state = {
      fname: '',
      lname: '',
      cemail: '',
      currentweb: '',
      budget: '',
      project: '',
      interested: '',
      details: '',
      about: '',
      referred: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange = e =>{
    this.setState({[e.target.name]:e.target.value })
  }
handleSubmit = (e) =>{
e.preventDefault();
const {fname,lname,cemail,currentweb,budget,project,interested,details,about,referred} = this.state;
const form =  axios.post('/api/form',{
  fname,
  lname,
  cemail,
  currentweb,
  budget,
  project,
  interested,
  details,
  about,
  referred
});
}
  render() {

    return (
      <>
        <div className="container">
          <h2 className="center">Contact</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col s12">
                <div className="row">
                  <div className=" col s6">
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" onChange={this.handleChange} />
                  </div>
                  <div className=" col s6">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" onChange={this.handleChange} />
                  </div>

                </div>
                <div className="row">
                  <div className=" col s12">
                    <label htmlFor="cemail">Email</label>
                    <input type="text" name="cemail" className="autocomplete" onChange={this.handleChange} />
                  </div>
                </div>

                <div className="row">
                  <div className="col s12">
                    <label htmlFor="currentweb">Current website address (if applicable):</label>
                    <input type="text" name="currentweb" onChange={this.handleChange} />
                  </div>
                </div>
                <div className="row">
                  <div className=" col s12">
                    <label htmlFor="budget">Budget</label>
                    <select className="browser-default" name="budget" onChange={this.handleChange}>
                      <option disabled="" value="" className="">Select</option>
                      <option label="$800 – $2,000" value="$800 – $2,000">$800 – $2,000</option>
                      <option label="$2,000 – $5,000" value="$2,000 – $5,000">$2,000 – $5,000</option>
                      <option label="$5,000 –&nbsp;$10,000" value="$5,000 –&nbsp;$10,000">$5,000 –&nbsp;$10,000</option>
                      <option label="$10,000+" value="$10,000+">$10,000+</option>
                      <option label="I need ongoing design work" value="I need ongoing design work" selected="selected">I need ongoing design work</option>

                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className=" col s12">
                    <label htmlFor="project">When are you looking to start your project?</label>
                    <select className="browser-default" name="project" onChange={this.handleChange}>
                      <option disabled="" value="" className="">Select</option>
                      <option label="Right away!" value="Right away!">Right away!</option>
                      <option label="Within the next month or so." value="Within the next month or so.">Within the next month or so.</option>
                      <option label="I'm in no rush, just ready to take action." value="I'm in no rush, just ready to take action.">I'm in no rush, just ready to take action.</option>
                      <option label="I'm not sure." value="I'm not sure." selected="selected">I'm not sure.</option>


                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className=" col s12">
                    <label htmlFor="interested">What service are you interested in?</label>
                    <select className="browser-default" name="interested" onChange={this.handleChange}>
                      <option disabled="" value="" className="" selected="selected">Select</option>
                      <option label="Web Design &amp; Development" value="Web Design &amp; Development">Web Design &amp; Development</option>
                      <option label="Just Web Design" value="Just Web Design">Just Web Design</option>
                      <option label="Digital Ad and/or Social Media Design" value="Digital Ad and/or Social Media Design">Digital Ad and/or Social Media Design</option>
                      <option label="Email Design" value="Email Design">Email Design</option>
                      <option label="Other/I'm not sure what I need" value="Other/I'm not sure what I need">Other/I'm not sure what I need</option>

                    </select>
                  </div>
                </div>

                <div className="row">
                  <div className=" col s12">
                    <label htmlFor="details" name="details">Please provide more details about your project: *</label>
                    <input type="text" id="details" className="autocomplete" onChange={this.handleChange} />
                  </div>
                </div>


                <div className="row">
                  <div className=" col s12">
                    <label htmlFor="about">How did you hear about me?*</label>
                    <select className="browser-default" onChange={this.handleChange}>
                      <option selected="selected" disabled="" value="">Select</option>
                      <option label="My Website Google" >My Website/Google</option>
                      <option label="Social Media" >Social Media</option>
                      <option label="Referral" >Referral</option>
                      <option label="Dribbble" >Dribbble</option>
                      <option label="Other" >Other</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className=" col s12">
                    <label htmlFor="referred">If you were referred to me, who sent you here?</label>
                    <input type="text" id="about" className="autocomplete" onChange={this.handleChange} />
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Send
  </button>
                  </div>
                </div>

              </div>
            </div>
          </form>
        </div>
      </>
    )
  }
}
