import { FaLinkedin } from "react-icons/fa";
import footerContact from "../../api/footerApi.json";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

import { NavLink } from "react-router-dom";
const Footer = () => {
    const footerIcon = {
        MdPlace: <MdPlace />,
        FaLinkedin: <FaLinkedin />,
        TbMailPlus: <TbMailPlus />,
      };
  return (
    <footer className="footer-section">
    <div className="container grid grid-three-cols">
      {footerContact.map((curData, index) => {
        const { icon, title, details,link } = curData;
        return (
          <div className="footer-contact" key={index}>
            <div className="icon">{footerIcon[icon]}</div>
            <div className="footer-contact-text">
              <p>{title}</p>
              <p>{details}</p>
            </div>
          </div>
        );
      })}
    </div>

    <div className="copyright-area">
      <div className="container">
        <div className="grid grid-two-cols">
          <div className="copyright-text">
            <p>
              Copyright &copy; 2025, All Right Reserved
            </p>
          </div>

          <div className="footer-menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>

              <li>
                <NavLink
                  to="https://www.instagram.com/vd_7905/"
                  target="_blank"
                >
                  Social
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="https://www.linkedin.com/in/vikas-dixit-2846b21b9/">LinkedIn</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
