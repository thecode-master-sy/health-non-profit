import { Logo } from "./Logo";
import { Container } from "./utility";
import { FaTwitter, FaPlus } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF, FaAngleRight } from "react-icons/fa";


export const Footer = () => {
  return (
    <div className="mt-9 bg-light-bg">
      <Container>
        <div>
          <div className="flex md:justify-center">
            <Logo />
          </div>

          <nav className="mt-5">
            <ul className="flex flex-col md:flex-row md:justify-center gap-4">
              <li>Contact</li>
              <li>Events</li>
              <li>News</li>
              <li>About</li>
              <li>Blog</li>
            </ul>
          </nav>
        </div>

        <div className="flex justify-between items-center mt-5 flex-col sm:flex-row gap-4">
          <div className="flex gap-4">
            <a href="https://twitter.com">
              <FaTwitter />
            </a>

            <a href="https://facebook.com">
              <FaFacebookF />
            </a>

            <a href="https://instagram.com">
              <FiInstagram />
            </a>
          </div>

          <div>
            <p> &#169; 2023 COMPSHI. All rights reserved</p>
          </div>
        </div>
      </Container>
    </div>
  );
};
