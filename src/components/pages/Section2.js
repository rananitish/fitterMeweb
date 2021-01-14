import React from 'react'
import "./Section2.css"

function Section2() {

    return (
        <div id="Features" className='container'>
        
        <h2 className="heading">
        Features</h2>
       <div className="features">
            <div className="container1">
          <div className="text"> <h3 className="heading-primary">News</h3> 
            <p className="info">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
          </div>
            <div className="phone">
            <img src="https://firebasestorage.googleapis.com/v0/b/fitterme-39927.appspot.com/o/News.png?alt=media&token=3ec7f530-371a-4753-877b-30d67f50c743" alt="" className="pic"/>
            </div></div>
           
           <div className="container1">
           <div className="phone">
           <i class="fas fa-fire fa-7x"></i>
           </div>
           <div className="text">
            <h3 className="heading-primary">Calories Tracker</h3> 
            <p className="info">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
            </div>
           
           </div>
           
           <div className="container1"><div className="text">
           <h3 className="heading-primary">B.M.I</h3>
           <p className="info">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
           </div>
           <div className="phone"><img src="https://firebasestorage.googleapis.com/v0/b/fitterme-39927.appspot.com/o/maintain.png?alt=media&token=6e97a1f2-1726-470d-a216-828b46cf1d11" alt="" className="pic"/></div>
           </div>
           
           <div className="container1">
           <div className="phone"><img src="https://firebasestorage.googleapis.com/v0/b/fitterme-39927.appspot.com/o/YourDiet.png?alt=media&token=fea4478a-ef95-47f2-a563-346575341011" alt="" className="pic"/></div>
           <div className="text"> 
           <h3 className="heading-primary">DIET</h3>
           <p className="info">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
           </div>
           
            </div>
       </div>
        
        </div>
    )
}

export default Section2
