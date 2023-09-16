import YouImg from "./images/youtube.svg";
import XtwImg from "./images/twitter.svg";
import FaceImg from "./images/facebook-square.svg";
import InstImg from "./images/instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="mt-5 py-5 container-fluid">
        <div className="mx-auto p-2 container" style={{ width: "80%" }}>
          <div className="row mx-auto " style={{ width: "55%" }}>
            <a class="col nav-link " href="#"><img src={YouImg} alt="See More" style={{ width: "30px", height: "30px" }} /></a>
            <a class="col nav-link " href="#"><img src={XtwImg} alt="See More" style={{ width: "30px", height: "30px" }} /></a>
            <a class="col nav-link " href="#"><img src={FaceImg} alt="See More" style={{ width: "30px", height: "30px" }} /></a>
            <a class="col nav-link " href="#"><img src={InstImg} alt="See More" style={{ width: "30px", height: "30px" }} /></a>
          </div>
          <div className="row mx-auto my-4" style={{ width: "80%" }}>
          <a class="col nav-link " href="#"><p className="para">Conditions of Use</p></a>
          <a class="col nav-link " href="#"><p className="para">Privacy & Policy</p></a>
          <a class="col nav-link " href="#"><p className="para">Press Room</p></a>
          </div>
          <div className="row mx-auto mt-4" style={{ width: "80%" }}>
            <p className="airbend">© 2023 MovieBox by Ufuoma Princess Oyibo  </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
