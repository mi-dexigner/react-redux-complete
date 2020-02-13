import React from 'react';

const Contact = () =>{
    
return(
   <>
   <div className="container">
<h2 className="center">Contact</h2>
<div className="row">
    <div className="col s12">
      <div className="row">
        <div className=" col s6">
          <label htmlFor="cname">Name</label>
          <input type="text" id="cname"/>
        </div>
        <div className=" col s6">
          <label htmlFor="cemail">Email</label>
          <input type="text" id="cemail" className="autocomplete" />
        </div>
      </div>
      <div className="row">
        <div className=" col s6">
          <label htmlFor="cphone">Phone</label>
          <input type="text" id="cphone" className="autocomplete" />
        </div>
        <div className=" col s6">
          <label htmlFor="csubject">Support</label>
          <select className="browser-default">
      <option value="0" >Choose your option</option>
      <option value="1">Option 1</option>
      <option value="2">Option 2</option>
      <option value="3">Option 3</option>
    </select>
        </div>
      </div>
      <div className="row">
        <div className=" col s12">
          <label htmlFor="cmessage">Message</label>
          <input type="text" id="cmessage" className="autocomplete" />
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
    </div>
   </>
)
}

export default Contact;