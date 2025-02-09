import footerData from "@/json/footerApi.json";
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Mail } from "lucide-react";
import { JSX } from "react";
import { FooterApi } from "@/utils";
import { Github } from "lucide-react";
import { Facebook } from "lucide-react";
import { Instagram } from "lucide-react";

const Footer = () => {
  const footerIcons: Record<string, JSX.Element> = {
    MapPin: <MapPin />,
    Phone: <Phone />,
    Mail: <Mail />,
  };

  return (
    <>
      <footer className="w-full p-5 mt-10">
        <div className="secs">
          <div className="flex flex-wrap gap-10 justify-between">
            {(footerData as FooterApi[]).map((each) => {
              return (
                <li key={each.id} className="list-none flex gap-5">
                  <div className="text-2xl text-blue-600 pt-2">
                    {footerIcons[each.icon]}
                  </div>
                  <div>
                    <h2 className="text-lg">{each.title}</h2>
                    <p className="text-dimmed-texts text-sm">{each.details}</p>
                  </div>
                </li>
              );
            })}
          </div>
        </div>
      </footer>
      <div className="bg-gray w-full">
        <div className="flex flex-col md:flex-row-reverse   md:justify-between items-center gap-8 p-7 secs">
          <ul className="flex gap-10">
            <a href="#"><Github /></a>
            <Facebook />
            <Instagram />
          </ul>
          <p className="text-sm text-dimmed-texts">
            &copy;All rights reserved, Sizan
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
