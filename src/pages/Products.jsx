import React from 'react'
import styled from 'styled-components';

function Products() {
    const Div=styled.div`
  
    display:flex;
    align-items:center;
    justify-content:center;
   
    gap:15px;
    min-height:100vh;
    background-image:url("https://images.squarespace-cdn.com/content/v1/65899401195ba416670c0913/cc555d6e-7ffa-4817-abea-c0cbacfbb9f5/DALL%C2%B7E+2024-05-14+12.43.52+-+A+vibrant+banner+showcasing+a+dynamic+clash+between+cricket+and+badminton.+On+the+left+side%2C+draw+a+cricket+player+in+action%2C+mid-swing+with+a+bat%2C+we.jpeg?format=1500w");
    background-size:100% 100%;
    background-repeat:no-repeat
    `;
  return (
    <>
        <Div>
                <div className="prod">
                    <img className="prodimg" src="https://media.istockphoto.com/id/493868298/photo/close-up-of-a-cricket-bat.jpg?s=1024x1024&w=is&k=20&c=q2bJOBlZOSptjYSzQ83_QYEz6obvZk-P1YLJGko1pX0=" alt="" />
                    <h1>Cricket Bat</h1>
                    <p>This is the bat which is preffered by many international cricketers to hit massive sixes.</p>
                    {/* <div className="prodbuttons">
                        <div>
                            <p>$2.99</p>
                            <button className="buyrent">Rent</button>
                        </div>
                        <div>
                            <p>$60.99</p>
                            <button className="buyrent">Buy</button>
                        </div>
                        
                        
                    </div> */}
                </div>
                <div className="prod">
                <img className="prodimg" src="https://nwscdn.com/media/catalog/product/cache/h700xw700/c/r/cricket-club-ball-family_1.jpg" alt="" />
                    <h1>Cricket Ball</h1>
                    <p>This is a ball which will be interlinked with neauralink and spins as you think.</p>
                    {/* <div className="prodbuttons">
                        <div>
                            <p>$2.99</p>
                            <button className="buyrent">Rent</button>
                        </div>
                        <div>
                            <p>$60.99</p>
                            <button className="buyrent">Buy</button>
                        </div>
                        
                        
                    </div> */}
                </div>
                <div className="prod">
                <img className="prodimg" src="https://www.livemint.com/lm-img/img/2024/11/12/600x338/best_badminton_racket_1731392114857_1731392137197.webp" alt="" />
                    <h1>Racket</h1>
                    <p>This is a Racket which will produce a boost when you want a give a smash.</p>
                    {/* <div className="prodbuttons">
                        <div>
                            <p>$2.99</p>
                            <button className="buyrent">Rent</button>
                        </div>
                        <div>
                            <p>$60.99</p>
                            <button className="buyrent">Buy</button>
                        </div>
                        
                        
                    </div> */}
                </div>
              </Div>
    </>
  )
}

export default Products