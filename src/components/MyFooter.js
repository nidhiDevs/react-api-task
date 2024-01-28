import React from "react";
import facebook from "../assets/socialmedia/facebook-logo.png";
import instagram from "../assets/socialmedia/instagram.png";
import twitter from "../assets/socialmedia/twitter.png";
import youtube from "../assets/socialmedia/youtube.png";
import gplay from "../assets/gplaystore.png";
import aplay from "../assets/applestore.png";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import product from "../assets/deliveryicon/insurance.png";
import cost from "../assets/deliveryicon/fast-delivery.png";
import offer from "../assets/deliveryicon/cost-saving.png";
import returnoption from "../assets/deliveryicon/returning-visitor.png";

const MyFooter = () => {
  return (
    <div>
       <footer class="mx-auto w-full max-w-screen-xl ">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-between p-5 px-4 md:px-16">
          <div className="flex gap-2 items-center text-sm">
            <img className="w-10 h-10" src={product} alt="product" /><div>Original Products</div>
          </div>
          <div  className="flex gap-2 items-center text-sm">
            <img className="w-10 h-10" src={cost} alt="cost" /><div>Original Products</div>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <img className="w-10 h-10" src={offer} alt="offer"/><div>Original Products</div>
          </div>
          <div className="flex gap-2 items-center text-sm">
            <img className="w-10 h-10" src={returnoption} alt="returnoption" /><div>Original Products</div>
          </div>
        </div>
        <div className="bg-lcolor grid md:grid-cols-2 lg:grid-cols-4 px-4 md:px-16 pt-4">
          <div className="">
            <h1 className="font-barlow">Company</h1>
            <ul className="text-gray-500 text-sm font-barlow py-2">
              <li className="py-1 cursor-pointer">Help / Support & FAQ</li>
              <li className="py-1 cursor-pointer">
                Dealership/Franchise Query
              </li>
              <li className="py-1 cursor-pointer">About Us</li>
              <li className="py-1 cursor-pointer">Contact Us</li>
              <li className="py-1 cursor-pointer">Sitemap</li>
              <li className="py-1 cursor-pointer">B2B Buyer Login</li>
            </ul>
          </div>
          <div className="">
            <h1 className="font-barlow">Policy & Term</h1>
            <ul className="text-gray-500 text-sm font-barlow py-2">
              <li className="py-1 cursor-pointer">Privacy Policy</li>
              <li className="py-1 cursor-pointer">Shipping Policy</li>
              <li className="py-1 cursor-pointer">Returns Policy</li>
              <li className="py-1 cursor-pointer">Terms & Conditions</li>
              <li className="py-1 cursor-pointer">Disclosure Policy</li>
              <li className="py-1 cursor-pointer">Cancellation Policy</li>
            </ul>
          </div>
          <div className="">
            <h1 className="font-barlow">Customer Care</h1>
            <ul className="text-gray-500 text-sm font-barlow py-2">
              <li className="py-1 cursor-pointer flex gap-2 items-center">
                <IoIosCall />
                <span>9564778364</span>
              </li>
              <li className="py-1 cursor-pointer flex gap-2 items-center">
                <IoLogoWhatsapp />
                <span>9564778364</span>
              </li>
              <li className="py-1 cursor-pointer flex gap-2 items-center">
                <MdEmail />
                <span>singh@gmail.com</span>
              </li>
              <li className="py-1 cursor-pointer flex gap-2 items-center">
                <FaLocationDot />
                <span>Noida sec-2 </span>
              </li>
            </ul>
          </div>
          <div className="">
            <h1 className="font-barlow">Company</h1>
            <ul className="text-gray-500 text-sm font-barlow flex gap-4 py-3">
              <li className="py-1 cursor-pointer">
                <img className="w-10 h-10" src={facebook} alt="facebook" />
              </li>
              <li className="py-1 cursor-pointer">
                <img className="w-10 h-10" src={instagram} alt="instagram" />
              </li>
              <li className="py-1 cursor-pointer">
                <img className="w-10 h-10" src={twitter} alt="twitter" />
              </li>
              <li className="py-1 cursor-pointer">
                <img className="w-10 h-10" src={youtube} alt="youtube" />
              </li>
            </ul>
            <div className="uppercase py-3">Shop Faster With the app</div>
            <div className="flex gap-2 py-3">
              <div>
                <img className="w-50 h-10" src={gplay} alt="gplay" />
              </div>
              <div>
                <img className="w-50 h-10" src={aplay} alt="aplay" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MyFooter;
