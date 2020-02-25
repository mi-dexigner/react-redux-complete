import React, { Component } from 'react'
 import axios from 'axios'
//  https://www.youtube.com/watch?v=EPnBO8HgyRU

export default class Contact extends Component {
  
  // https://blog.bitsrc.io/how-to-build-a-contact-form-with-react-js-and-php-d5977c17fec0
  constructor() {
    super()

    this.state = {
      fname: '',
      fnameError: '',
      lname: '',
      lnameError: '',
      cemail: '',
      cemailError: '',
      currentweb: '',
      currentwebError: '',
      budget: '',
      budgetError: '',
      project: '',
      projectError: '',
      interested: '',
      interestedError: '',
      cdetails: '',
      detailsError: '',
      about: '',
      aboutError: '',
      referred: '',
      referredError: '',
      mailSent: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  validate = () => {
    let isError = false;

    const errors = {
      fnameError: "",
      lnameError: "",
      cemailError: "",
      currentwebError: "",
      budgetError: "",
      projectError: "",
      interestedError: "",
      detailsError: "",
      aboutError: "",
      referredError: "",

    };

    if (this.state.fname === '') {
      isError = true;
      errors.fnameError = "Requires valid First Name";
    }
    if (this.state.lname === '') {
      isError = true;
      errors.lnameError = "Requires valid Last Name";
    }
    if (this.state.cemail.indexOf("@") === -1) {
      isError = true;
      errors.cemailError = "Requires valid email";
    }
    if (this.state.currentweb === '') {
      isError = true;
      errors.currentwebError = "Requires valid Current Web";
    }
    if (this.state.budget === '') {
      isError = true;
      errors.budgetError = "Select Budget";
    }
    if (this.state.project === '') {
      isError = true;
      errors.projectError = "Select Project";
    }
    if (this.state.interested === '') {
      isError = true;
      errors.interestedError = "Select Interested";
    }

    if (this.state.cdetails === '') {
      isError = true;
      errors.detailsError = "Requires valid Details";
    }
    if (this.state.about === '') {
      isError = true;
      errors.aboutError = "Select About";
    }

    if (this.state.referred === '') {
      isError = true;
      errors.referredError = "Requires valid referred";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;

  }

  handleSubmit = (e) => {
    e.preventDefault();
    //const { fname, lname, cemail, currentweb, budget, project, interested, cdetails, about, referred } = this.state;
    const API_PATH = 'https://midexigner.com/devs/react/sendEmail.php';
    const err = this.validate();
    if (!err) {
      
    this.setState(
      {
        fnameError: "",
        lnameError: "",
        cemailError: "",
        currentwebError: "",
        budgetError: "",
        projectError: "",
        interestedError: "",
        detailsError: "",
        aboutError: "",
        referredError: "",
        mailSent: false,
      }
    );
    axios({
      method: 'post',
      url: `${API_PATH}`,
      headers: { 'content-type': 'application/json' },
      data: this.state
    })
      .then(result => {
        this.setState({
          mailSent: result.data.sent
        })
      })
      .catch(error => this.setState({ error: error.message }));
      /*  const form =  axios.post('/api/form',{
        fname,
        lname,
        cemail,
        currentweb,
        budget,
        project,
        interested,
        cdetails,
        about,
        referred
      });  */
    }
    console.log(this.state);
    console.log('its work');
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
                    <input type="text" name="fname" defaultValue={this.state.fname} onChange={this.handleChange} />
                    <span className="helper-text red-text lighten-1">{this.state.fnameError}</span>
                  </div>
                  <div className=" col s6">
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" defaultValue={this.state.lname} onChange={this.handleChange} />
                    <span className="helper-text red-text lighten-1">{this.state.lnameError}</span>
                  </div>

                </div>
                <div className="row">
                  <div className=" col s12">
                    <label htmlFor="cemail">Email</label>
                    <input type="text" name="cemail" defaultValue={this.state.cemail} onChange={this.handleChange} />
                    <span className="helper-text red-text lighten-1">{this.state.cemailError}</span>
                  </div>
                </div>

                <div className="row">
                  <div className="col s12">
                    <label htmlFor="currentweb">Current website address (if applicable):</label>
                    <input type="text" name="currentweb" defaultValue={this.state.currentweb} onChange={this.handleChange} />
                    <span className="helper-text red-text lighten-1">{this.state.currentwebError}</span>
                  </div>
                </div>
                <div className="row">
                  <div className=" col s12">
                    <label htmlFor="budget">Budget</label>
                    <select className="browser-default" name="budget" defaultValue={this.state.budget || "I need ongoing design work"} onChange={this.handleChange}>
                      <option disabled="" value="" className="">Select</option>
                      <option label="$800 – $2,000">$800 – $2,000</option>
                      <option label="$2,000 – $5,000" >$2,000 – $5,000</option>
                      <option label="$5,000 – $10,000" >$5,000 – $10,000</option>
                      <option label="$10,000+">$10,000+</option>
                      <option label="I need ongoing design work">I need ongoing design work</option>

                    </select>
                    <span className="helper-text red-text lighten-1">{this.state.budgetError}</span>
                  </div>
                </div>
                <div className="row">
                  <div className=" col s12">
                    <label htmlFor="project">When are you looking to start your project?</label>
                    <select className="browser-default" name="project" defaultValue={this.state.project || "I'm not sure."} onChange={this.handleChange}>
                      <option disabled="" className="">Select</option>
                      <option label="Right away!" >Right away!</option>
                      <option label="Within the next month or so." >Within the next month or so.</option>
                      <option label="I'm in no rush, just ready to take action." value="I'm in no rush, just ready to take action.">I'm in no rush, just ready to take action.</option>
                      <option label="I'm not sure.">I'm not sure.</option>


                    </select>
                    <span className="helper-text red-text lighten-1">{this.state.projectError}</span>
                  </div>
                </div>

                <div className="row">
                  <div className=" col s12">
                    <label htmlFor="interested">What service are you interested in?</label>
                    <select className="browser-default" name="interested" defaultValue={this.state.interested || "Select"} onChange={this.handleChange}>
                      <option disabled="" label="Select" className="">Select</option>
                      <option label="Web Design &amp; Development">Web Design &amp; Development</option>
                      <option label="Just Web Design" >Just Web Design</option>
                      <option label="Digital Ad and/or Social Media Design" >Digital Ad and/or Social Media Design</option>
                      <option label="Email Design">Email Design</option>
                      <option label="Other/I'm not sure what I need">Other/I'm not sure what I need</option>

                    </select>
                    <span className="helper-text red-text lighten-1">{this.state.interestedError}</span>
                  </div>
                </div>

                <div className="row">
                  <div className=" col s12">
                    <label htmlFor="cdetails" >Please provide more details about your project: *</label>
                    <input type="text" name="cdetails" defaultValue={this.state.cdetails} onChange={this.handleChange} />
                    <span className="helper-text red-text lighten-1">{this.state.detailsError}</span>
                  </div>
                </div>


                <div className="row">
                  <div className=" col s12">
                    <label htmlFor="about">How did you hear about me?*</label>
                    <select className="browser-default" name="about" defaultValue={this.state.about || "Select"} onChange={this.handleChange}>
                      <option disabled="" label="Select">Select</option>
                      <option label="My Website Google" >My Website/Google</option>
                      <option label="Social Media" >Social Media</option>
                      <option label="Referral" >Referral</option>
                      <option label="Dribbble" >Dribbble</option>
                      <option label="Other" >Other</option>
                    </select>
                    <span className="helper-text red-text lighten-1">{this.state.aboutError}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <label htmlFor="referred">If you were referred to me, who sent you here?</label>
                    <input type="text" name="referred" defaultValue={this.state.referred} onChange={this.handleChange} />
                    <span className="helper-text red-text lighten-1">{this.state.referredError}</span>
                  </div>
                </div>
                <div className="row">
                  <div className="col s12">
                    <button className="btn waves-effect waves-light" type="submit" name="action">Send
  </button>
  {this.state.mailSent &&
    <div>Thank you for contcting us.</div>
  }
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
