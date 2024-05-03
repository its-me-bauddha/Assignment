
import Logo from "../assets/office-building.png";
import { InstagramLogo ,FacebookLogo ,LinkedinLogo ,TwitterLogo } from "phosphor-react";
const Footer = () => {
  return (
    <div className="px-40 mt-16 bg-gray-300">
      <div className="flex items-center justify-between pt-12 ">
        <div className="">
          <img src={Logo} className="w-16" alt="" />
          <p className="mt-4 font-bold">Let's hustle with hustler</p>
          <div className="flex mt-4">
            <InstagramLogo size={32} className="hover:cursor-pointer hover:scale-110" />
            <FacebookLogo  size={32} className="hover:cursor-pointer hover:scale-110"/>
            <LinkedinLogo  size={32} className="hover:cursor-pointer hover:scale-110"/>
            <TwitterLogo  size={32} className="hover:cursor-pointer hover:scale-110"/>
          </div>
        </div>
        
          <div className="flex gap-8">
            <div className="flex-col">
              <h2>Company</h2>
              <ul className="flex-col">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
              </ul>
            </div>
            <div className="flex-col">
              <h2>Resources</h2>
              <ul className="flex-col">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
              </ul>
            </div>
            <div className="flex-col">
              <h2>Quick Link</h2>
              <ul className=" flex-col">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
              </ul>
            </div>
            <div className="flex-col">
              <h2>More</h2>
              <ul className=" flex-col">
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
              </ul>
            </div>
          </div>
        </div>
      
      <footer className="text-center mt-7 py-5 text-xl text-yellow-800">Made with ❤️ in INDIA , Hustler @2024</footer>
    </div>
  );
};

export default Footer;
