import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Covid = () => {


  return (
    <>
      <div>
        <h2>Covid Stuff</h2>

        <h5>How would you prefer to work?</h5> <br />
        <input type="checkbox" />
        <label>From Sairme Office</label> <br />
        <input type="checkbox" />
        <label>From Home</label> <br />
        <input type="checkbox" />
        <label>Hybrid</label>

        <h5>Did you contanct covid 19? :(</h5> <br />
        <input type="checkbox" /> 
        <label>Yes</label> <br />
        <input type="checkbox" />  
        <label>No</label>

        <h5>When?</h5> <br/>
        <input type="date" />

        <h5>Have you been vaccinated?</h5> <br />
        <input type="checkbox" /> 
        <label>Yes</label> <br />
        <input type="checkbox" />  
        <label>No</label>

        <h5>When did you get your last covid vaccine?</h5> <br/>
        <input type="date" />



        <ul>
          <li><Link to="/skillset">Prev</Link></li>
          <li><Link to="/personal-information">personal-information</Link></li>
          <li><Link to="/skillset">skillset</Link></li>
          <li><Link to="/covid">covid</Link></li>
          <li><Link to="/insights">insights</Link></li>
          <li></li>
          <li><Link to="/insights">Next</Link></li>
        </ul>
      </div>

      <div>
        <h2>Redberry Covid Policies</h2>
        <p>
          As this infamous pandemic took over the world, we adjusted our working
          practices so that our employees can be as safe and comfortable as
          possible. We have a hybrid work environment, so you can either work
          from home or visit our lovely office on Sairme Street. If it was up to
          us, we would love you to see us in the office because we think
          face-to-face communications {`>`} Zoom meetings. Both on the fun and
          productivity scales.
        </p>
      </div>

    </>
  );
};

export default Covid;
