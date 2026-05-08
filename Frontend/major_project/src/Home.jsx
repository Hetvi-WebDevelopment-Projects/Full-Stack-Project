import { Link } from 'react-router-dom';
import Plan from './Plan';

function Home(){

    return(
      <div>
    <div className="home">
      <div className="">
        <section>
      <h1 style={{ color: 'white', textAlign: 'center', fontSize: '50px' }}>Engineering Unforgettable Sporting & Adventure Experiences</h1>
      <p style={{ color: 'white', textAlign: 'center', fontSize: '20px' }}>
          From local tournaments to elite brand activations, we manage the details so you can focus on the game.</p>
          <br></br>
        <Link to="/plan" style={{ display: 'block', textDecoration: 'none' }}>
          <button className='button' style={{ 
      display: 'block', 
      margin: '0 auto', 
      marginBottom: '10px'}}>Plan Your Next Event</button>
        </Link>
      </section>

      <section style={{ color: 'white', textAlign: 'center', fontSize: '30px' }}>
        <h2>Our Services</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li>Brand Consultancy</li>
            <li>Sports Events Management</li>
        </ul>
      </section>

      <section style={{ color: 'white', textAlign: 'center', fontSize: '20px' }}>
        <h2>
            Key Highlights
        </h2>
        <p>30+ Events Managed | 5000+ Athletes Engaged</p>
      </section>

      <section style={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', lineHeight: '1.5' }}>
        <h2>
          TRUSTED BY
        </h2>
        <br></br>
        <p>UNLOX Academy | Vijyant NCC | RUFC (Rajasthan United Football Club) | Activenex | Sportsvilla | Streetplay.ai | Aashray Care Home </p>
      </section>
      </div>

      
      </div><br/>
       {/*} <div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://images.pexels.com/photos/31518101/pexels-photo-31518101.jpeg" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Sports Management</h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://images.pexels.com/photos/31825809/pexels-photo-31825809.jpeg" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Trophy</h5>
        <p></p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://images.pexels.com/photos/7888985/pexels-photo-7888985.jpeg" class="d-block w-100" alt="..."></img>
      <div class="carousel-caption d-none d-md-block">
        <h5>Teamwork</h5>
        <p></p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>*/}
<div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="https://images.pexels.com/photos/31518101/pexels-photo-31518101.jpeg" className="d-block w-100" alt="Sports Management" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Sports Management</h5>
        <p>Professional execution for elite events.</p>
      </div>
    </div>
    
    <div className="carousel-item" data-bs-interval="2000">
      <img src="https://images.pexels.com/photos/31825809/pexels-photo-31825809.jpeg" className="d-block w-100" alt="Trophy" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Excellence in Branding</h5>
        <p>Elevating your brand to the podium.</p>
      </div>
    </div>
    
    <div className="carousel-item">
      <img src="https://images.pexels.com/photos/7888985/pexels-photo-7888985.jpeg" className="d-block w-100" alt="Teamwork" />
      <div className="carousel-caption d-none d-md-block">
        <h5>Collaborative Logistics</h5>
        <p>Bridging the gap between talent and success.</p>
      </div>
    </div>
  </div>

  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
    )
}

export default Home;