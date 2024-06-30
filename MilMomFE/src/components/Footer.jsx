import React from "react";
import { footerContent1, footerContent2, footerData } from "../data/data";
import MilMomBtn from "./MilMomBtn";
import { Icon } from "@iconify/react/dist/iconify.js";
import logo from "../assets/logo.png";
import milmom from "../assets/milmom.png";

export default function Footer() {
  return (
    <div className="flex flex-wrap py-10 px-10 tracking-wide">
      <div className="w-full sm:w-1/5 mb-10 sm:mb-0 px-5">
        <div className="flex items-center justify-center sm:justify-start mb-5">
          <img src={logo} className="w-1/4 mr-2" alt="Logo" />
          <img src={milmom} className="w-2/3" alt="MilMom" />
        </div>
        <div className="text-justify mb-3">{footerContent1}</div>
        <div className="text-justify">{footerContent2}</div>
      </div>

      <div className="w-full sm:w-3/5 flex flex-wrap justify-between mb-10 sm:mb-0 px-5">
        {footerData.map((section, index) => {
          const sectionTitle = Object.keys(section)[0];
          const sectionItems = section[sectionTitle];

          return (
            <div className="w-full sm:w-1/3 mb-5 sm:mb-0" key={index}>
              <div className="font-bold mb-5">{sectionTitle}</div>
              {sectionItems.map((item, itemIndex) => (
                <div className="mb-3" key={itemIndex}>
                  {item}
                </div>
              ))}
            </div>
          );
        })}
      </div>

      <div className="w-full sm:w-1/5 flex flex-col items-center sm:items-start px-5">
        <div className="font-medium text-center sm:text-left">
          <div className="font-bold mb-5">Liên hệ với chúng tôi tại đây</div>
          <div className="flex mb-3 w-full">
            <input
              className="w-2/3 rounded-l-lg bg-slate-950 px-3 py-2 text-neutral-500"
              placeholder="Nhập email của bạn"
            />
            <MilMomBtn content="Gửi" className="rounded-r-lg" />
          </div>
          
          <div className="flex justify-center sm:justify-start text-3xl">
            <Icon icon="logos:facebook" className="mr-3" />
            <Icon icon="logos:zalo-icon" className="mr-3" />
            <Icon icon="skill-icons:instagram" className="mr-3" />
            <Icon icon="carbon:email" className="mr-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
