import React from "react";
import "../styles/aboutDetail.css";

function AboutMeDetail() {
  return (
    <div className="home">
        <div className="container fluid">
            <img src="./me.jpg" className="myImg"/>
            <h3>Hello! My name is Vishal Kashyap.</h3>
            <p>I am a full stack web developer</p>
            <p>MERN Stack developer</p>
        </div>
      <div className="row main justify-content-center">
        <div className="col-lg-3 division">
          <img src="https://yt3.googleusercontent.com/h0n8phylgeZKuMlGmcPhkOM8rkV1IHTr5oumqZL581iQCSeMeFrnmYB69a69RQAQoVqgxM5ENX8=s900-c-k-c0x00ffffff-no-rj" className="aboutImg" />
          <p className="highTone">Clean & Efficient Work</p>
          <p className="lowTone">I have good problem solving skills.</p>
        </div>
        <div className="col-lg-3 division">
          <img src="https://f.hubspotusercontent10.net/hubfs/6448316/web-programming-languages.jpg" className="aboutImg" />
          <p className="highTone">Web Development</p>
          <p className="lowTone">I have decent knowledge about web development both back-end and front-end.</p>
        </div>
        <div className="col-lg-3 division">
          <img src="https://www.mydavinci.com/x/821453048/ma.jpg" className="aboutImg" />
          <p className="highTone">Clean Artworks</p>
          <p className="lowTone">I have little knowledge about sketching and all.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMeDetail;
