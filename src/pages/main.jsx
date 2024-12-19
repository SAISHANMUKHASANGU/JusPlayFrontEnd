import { useEffect } from "react";

function Main() {
    useEffect(()=>{
        localStorage.setItem('logins',false)
      },[])    
    return (
      <>
        <main className="main-body">
        
              <div className="quote">
                  <p className="quotetxt">Book,Play,Eat,Repeat</p>
              </div>
              <div className="sidebyside">
              
                  <div id="indiadiv">
                      <img className="india" src="https://www.playspots.in/wp-content/uploads/2024/11/india-map.webp"></img>
                      
                  </div>
                  <div className="quotearea">
                      Play Anywhere,Anytime in India
                  </div>
                  
              
                  
                  
              </div>
              {/* <h2 className="Enquiryform"> Enquiry Form</h2>
              <div id="form">
                  <form id="searchingform">
                      <select id="category">
                          <option value="" disabled selected>Select a sport</option>
                          <option value="Cricket">Cricket</option>
                          <option value="Transport">Badminton</option>
                      </select>
                      <select id="states" name="states">
                          <option value="" disabled selected>Select a state</option>
                          <option value="andhra-pradesh">Andhra Pradesh</option>
                          <option value="arunachal-pradesh">Arunachal Pradesh</option>
                          <option value="assam">Assam</option>
                          <option value="bihar">Bihar</option>
                          <option value="chhattisgarh">Chhattisgarh</option>
                          <option value="goa">Goa</option>
                          <option value="gujarat">Gujarat</option>
                          <option value="haryana">Haryana</option>
                          <option value="himachal-pradesh">Himachal Pradesh</option>
                          <option value="jharkhand">Jharkhand</option>
                          <option value="karnataka">Karnataka</option>
                          <option value="kerala">Kerala</option>
                          <option value="madhya-pradesh">Madhya Pradesh</option>
                          <option value="maharashtra">Maharashtra</option>
                          <option value="manipur">Manipur</option>
                          <option value="meghalaya">Meghalaya</option>
                          <option value="mizoram">Mizoram</option>
                          <option value="nagaland">Nagaland</option>
                          <option value="odisha">Odisha</option>
                          <option value="punjab">Punjab</option>
                          <option value="rajasthan">Rajasthan</option>
                          <option value="sikkim">Sikkim</option>
                          <option value="tamil-nadu">Tamil Nadu</option>
                          <option value="telangana">Telangana</option>
                          <option value="tripura">Tripura</option>
                          <option value="uttar-pradesh">Uttar Pradesh</option>
                          <option value="uttarakhand">Uttarakhand</option>
                          <option value="west-bengal">West Bengal</option>
                   </select>
                      <input type="date" id="date"></input>
                      
                      <button className="submit" type="submit">Search</button>
                  </form>
              </div> */}
              
        </main>
      </>
    );
  }
  
  export default Main;