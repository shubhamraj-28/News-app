import Logo from './NewsAppLogo.png'
import {BsLinkedin,BsGithub} from 'react-icons/bs'
export default function Footer(){
    return(
        <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            <img src={Logo} alt="logo" />
          </h3>
          
          <p className="footer-company-name">Created By Shubham Raj</p>
          <div className="footer-icons">
           
          
            <a href="https://www.linkedin.com/in/shubham-raj-06a1b7214/">
              <BsLinkedin/>
            </a>
            <a href="https://github.com/shubhamraj-28">
              <BsGithub/>
            </a>
          </div>
        </div>
        <div className="footer-right">
          <p>Contact Us</p>
          <form>
            <input type="text" name="email" placeholder="Email" />
            <textarea name="message" placeholder="Message" defaultValue={""} />
            <button>Send</button>
          </form>
        </div>
      </footer>
      
    )
}