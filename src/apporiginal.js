import React from 'react';
import './style.css'; // Assuming your styles are in style.css
//import './navbarStyle.css'; // Replace navbarStyle.css with the actual file name for your navbar styles

function App() {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <img src="logo.webp" className="logo" alt="Spotify Logo" />
        <label className="sptfy">Spotify</label>
        <label className="hgh">.Highlight</label>
        <ul>
          <li><a href="#">PREMIUM</a></li>
          <li><a href="#">SUPPORT</a></li>
          <li><a href="#">DOWNLOAD</a></li>
          <li>|</li>
          <li><a href="#">SIGNUP</a></li>
          <li className="lgn"><a href="#">LOGIN</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="page1">
        <div className="box">
        <a href="#"><img src="album1.jpg" className="album1" alt="Album 1" /></a>
      </div>

      {/* Repeat this block for each album */}
       <div className="box">
         <a href="#"><img src="album2.jpg" className="album2" alt="Album 2" /></a>
       </div>

       <div className="box">
         <a href="#"><img src="album3.jpg" className="album3" alt="Album 3" /></a>
       </div>

       <div className="box">
        <a href="#"><img src="album4.jpg" className="album4" alt="Album 4" /></a>
       </div>

      <div className="box">
       <a href="#"><img src="album5.jpg" className="album5" alt="Album 5" /></a>
      </div>
    </div>


      <p className="text">TOP ALBUMS THIS WEEK</p>

      <div className="page2">
        <div className="bg">
          <img src="bg2.png" className="bg" alt="Background 2" />
        </div>
        <p className="text2">AI DJ IS HERE!</p>
        <p className="text3">
          Ready for a brand-new way to listen on Spotify and connect even more deeply with the artists you love?
          The DJ is a personalized AI guide that knows you and your music taste so well that it can choose what to play for you.
          This feature, first rolling out in beta, will deliver a curated lineup of music alongside commentary around the tracks and artists we think you’ll like in a stunningly realistic voice.
        </p>
        <a href="#" className="lnow"><p className="text4">LISTEN NOW</p></a>
        <div className="dj">
          <img src="dj.jpg" className="dj" alt="DJ" />
        </div>
      </div>

    <div className="page3">
     <div className="bg2">
      <img src="bg3.png" className="bg2" alt="Background 3" />
     </div>
     <h1 className="wrapped">2023 <br />Wrapped</h1>
      <div className="line"></div>
       <p className="text5">What is Wrapped?</p>
      <div className="arrow"><img src="arrow.png" className="arrow" alt="Arrow" /></div>
       <p className="text6">
        The artists you loved most. The songs and podcasts you had on repeat. And lots more. Keep listening, and we'll get in touch when it's ready.<br /><br /><br />
        Until then, revisit the top songs of 2022.
       </p>
     <div className="year"><img src="2023.png" className="year" alt="2023" /></div>
    </div>


    <footer className="footer">
  <div className="container">
    <img src="logo.webp" className="logo" alt="Spotify Logo" />
    <label className="sptfy">Spotify</label>
    <label className="hgh">.Highlight</label>
    <div className="row">
      <div className="footer-col">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">For the Record</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Community</h4>
        <ul>
          <li><a href="#">Spotify for Podcasters</a></li>
          <li><a href="#">Spotify for Artists</a></li>
          <li><a href="#">Spotify for Developers</a></li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Highlights</h4>
        <ul>
          <li><a href="#">Top Albums</a></li>
          <li><a href="#">Top Artists</a></li>
          <li><a href="#">What's New?</a></li>
          <li><a href="#">2023 Wrapped</a></li>
        </ul>
      </div>
      <div className="footer-links">
        <div className="social-links">
          <a href="#" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="#" className="fa fa-instagram"></a>
        </div>
      </div>
      <div className="footer-bot">
        <a href="#">Legacy</a>
        <a href="#">Privacy Center</a>
        <a href="#">Privacy Policy</a>
        <label className="crdts">© 2023 Spotify AB</label>
      </div>
    </div>
  </div>
    </footer>
    </div>
  );
}

export default App;
