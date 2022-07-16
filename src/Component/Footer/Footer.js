import React from "react";
import "./Footer.css";
import { BiCopyright } from "react-icons/bi";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="firstFoot">
          <div>About Great Game Guarantee</div>
          <div>Great Game Guarantee Terms</div>
          <div>Legal</div>
          <div>Contact Us</div>
        </div>
        <div className="secondFoot">
          <div>Terms of Sale</div>
          <div>User Agreement</div>
          <div>Corporate Information</div>
          <div>Privacy and Cookie Policy.Your Privacy Rights.</div>
        </div>
        <div className="thirdFoot">
          <div className="copyright">
            <p>
              <BiCopyright />
            </p>
            <h5>2022 CloverGroup Inc</h5>
          </div>
          <div>
            <h6>LawGate ,Jalandar, Punjab Jalandhar, Punjab</h6>
          </div>
          <div>
            <h6>Origin v10.4.74-2632-1d12df91</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
