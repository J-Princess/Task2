import YouImg from "./images/youtube.svg";
import XtwImg from "./images/twitter.svg";
import FaceImg from "./images/facebook-square.svg";
import InstImg from "./images/instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="container-fluid mt-5 py-5">
        <div className="mx-auto p-2" style={{ width: "600px" }}>
          <div className="row mx-auto " style={{ width: "250px" }}>
            <a class="col nav-link " href="#"><img src={YouImg} alt="See More" style={{ width: "30px", height: "30px" }} /></a>
            <a class="col nav-link " href="#"><img src={XtwImg} alt="See More" style={{ width: "30px", height: "30px" }} /></a>
            <a class="col nav-link " href="#"><img src={FaceImg} alt="See More" style={{ width: "30px", height: "30px" }} /></a>
            <a class="col nav-link " href="#"><img src={InstImg} alt="See More" style={{ width: "30px", height: "30px" }} /></a>
          </div>
          <div className="row mx-auto my-4" style={{ width: "500px" }}>
          <a class="col nav-link " href="#"><p className="para">Conditions of Use</p></a>
          <a class="col nav-link " href="#"><p className="para">Privacy & Policy</p></a>
          <a class="col nav-link " href="#"><p className="para">Press Room</p></a>
          </div>
          <div className="row mx-auto mt-4" style={{ width: "500px" }}>
            <p className="airbend">© 2023 MovieBox by Ufuoma Princess Oyibo  </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
