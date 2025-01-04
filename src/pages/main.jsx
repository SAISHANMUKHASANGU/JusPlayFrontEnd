import { useEffect } from "react";

function Main() {
    useEffect(()=>{
        {localStorage.getItem('logins')||localStorage.setItem('logins',false)}
        {localStorage.getItem('ownerlogins')||localStorage.setItem('ownerlogins',false)}
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
             
              
        </main>
      </>
    );
  }
  
  export default Main;