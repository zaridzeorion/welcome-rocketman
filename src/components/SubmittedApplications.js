import React from "react";
import useFetch from "../hooks/useFetch";

const SubbmittedApplications = () => {
  const API_TOKEN = "89nOpas%7Casdanjjh%5E%26as";
  const APPLICATIONS_REQUEST_URL = `https://bootcamp-2022.devtest.ge/api/applications?token=${API_TOKEN}`;

  const { data: users, error, loading } = useFetch(APPLICATIONS_REQUEST_URL);

  const TECHNOLOGIES_REQUEST_URL = `https://bootcamp-2022.devtest.ge/api/skills`
  const { technologies } = useFetch(TECHNOLOGIES_REQUEST_URL)

  return (
    <div>
      <h1>Submitted Applications</h1>

      <ul>
        {error && error}
        {loading && loading}
        {users &&
          users.map((user) => { 


          return (
            <li>
              <div>
                <h3>Personal Information</h3> 

                <p>First Name {user.first_name}</p>
                <p>Last Name {user.last_name}</p> 
                <p>E Mail {user.email}</p>
                <p>Phone {user.phone}</p>
              </div>

              <div>
                <h3>Covid Situation</h3>

                <h4>How would you prefer to work?</h4>
                <input readOnly type="checkbox" checked={user.work_preference === 'from_office' ? true : false} />
                <label>From Sairme Office</label>

                <br />

                <input readOnly type="checkbox" checked={user.work_preference === 'from_home' ? true : false} />
                <label>From Home</label>

                <br />

                <input readOnly type="checkbox" checked={user.work_preference === 'hybrid' ? true : false} />
                <label>Hybrid</label>


                <h4>When did you have covid 19?</h4>
                <input readOnly type="date" value={user.had_covid_at} />

                <h4>Have you been vaccinated?</h4>
                <input readOnly type="checkbox" checked={user.vaccinated && true} />
                <label>Yes</label>

                <br />

                <input readOnly type="checkbox" checked={!user.vaccinated && true } />
                <label>No</label>


                <h3>When did you get covid vaccine?</h3>
                <input readOnly type="date" value={user.vaccinated_at} />

                </div>

                <div>
                <h3>Skillset</h3>
                <ul>
                  {
                    user.skills.map(skill => {
                      return (
                        <li>
                           {technologies[skill.id - 1].title} Years of experience: {skill.experience}
                        </li>
                    )})
                  }
                </ul>
                
              </div>

              <div>
                <h3>Insights</h3>
                
                <h4>Would you attend Devtalks and maybe also organize your own?</h4>
                <input readOnly type="checkbox" checked={user.will_organize_devtalk && true} />
                <label>Yes</label>

                <br />

                <input readOnly type="checkbox" checked={!user.will_organize_devtalk && true } />
                <label>No</label>

                <br />

                <h4>What would you speak about at Devtalk?</h4>
                <textarea readOnly value={user.devtalk_topic} />

                <h4>Tell us something special</h4>
                <textarea readOnly value={user.something_special} />
            
              </div>
            </li>
          )})}
              
      </ul>
                
    </div>
  );
};

export default SubbmittedApplications;
