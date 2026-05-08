

function Portfolio(){
    return(
        <div className="portfolio"
        style={{ 
      textAlign: 'center',justifyContent: 'center',display: 'flex', flexDirection: 'column', padding: '60px 20px', backgroundColor: '#eeeeee',}}>
            <h1 style={{ fontSize: '30px', marginBottom: '10px' }}>Our Portfolio</h1>
            
            <p style={{color: 'black', fontSize: '20px', marginBottom: '10px'}}>The goal: Show proof of success.</p><br/>
            <div className="portfolio-content">
<p style={{color: 'black', fontSize: '20px', marginBottom: '10px'}}>Outcome: "Successfully managed 500+ participants with zero downtime."<br/><br/>
Gallery: High-resolution photos capturing the "emotional impact" of participants having fun or competing.
</p>


            </div><br/><br/>

    <div className="card mb-3" style={{ maxWidth: '540px' }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://images.pexels.com/photos/29658122/pexels-photo-29658122.jpeg" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Regional Sports Meet Expansion</h5>
        <p className="card-text" style={{lineHeight: '1.2'}}>Successfully scaled a local tournament into a professionally branded regional championship by bridging the gap between raw talent and professional execution.</p>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3" style={{ maxWidth: '540px' }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src='https://images.pexels.com/photos/18066950/pexels-photo-18066950.jpeg' className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">All-India Inter-College Sports Fest</h5>
        <p className="card-text" style={{lineHeight: '1.2'}}>Orchestrating a large-scale multi-sport event featuring 20+ disciplines, where we managed everything from professional referee sourcing to high-definition live-streaming and athlete hospitality.</p>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3" style={{ maxWidth: '540px' }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://images.pexels.com/photos/34970425/pexels-photo-34970425.jpeg" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Regional Youth Football Scouting League</h5>
        <p className="card-text" style={{lineHeight: '1.2'}}>Providing a professional platform for grassroots talent by combining elite-level match coordination with a comprehensive digital branding strategy to attract national scouts and sponsors.</p>
      </div>
    </div>
  </div>
</div>
    </div>
    )
}

export default Portfolio;