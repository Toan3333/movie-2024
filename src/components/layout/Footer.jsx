import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  const Links = [
    {
      title: "Company",
      links: [
        {
          name: "Home",
          link: "/",
        },
        {
          name: "About Us",
          link: "/about-us",
        },
        {
          name: "Contact Us",
          link: "/contact-us",
        },
        {
          name: "Movies",
          link: "/movies",
        },
      ],
    },
    {
      title: "Top Categories",
      links: [
        {
          name: "Action",
          link: "#",
        },
        {
          name: "Romantic",
          link: "#",
        },
        {
          name: "Drama",
          link: "#",
        },
        {
          name: "Historical",
          link: "#",
        },
      ],
    },
    {
      title: "My account",
      links: [
        {
          name: "Dashboard",
          link: "/dashboard",
        },
        {
          name: "My Favorites",
          link: "/favorite",
        },
        {
          name: "Profile",
          link: "/profile",
        },
        {
          name: "Change Password",
          link: "/password",
        },
      ],
    },
  ];
  return (
    <footer className="bg-dry py-10">
      <div className="container">
        <div className="grid grid-cols-4 gap-8">
          {Links.map((link, index) => (
            <div key={index}>
              <h3 className="font-medium text-lg text-white mb-6">{link.title}</h3>
              <ul className="text-sm flex flex-col space-y-3">
                {link.links.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.link}
                      className="text-border hover:text-subMain inline-block w-full">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="">
            <Link to="/">
              <img src="./logo.png" className="w-2/4 object-contain h-12" alt="Logo footer" />
              <p className="leading-7 text-sm text-border mt-3">
                <span>
                  Lorem 196 Andrew Road, Suite 200, <br />
                  New York, NY 10007
                </span>
                <br />
                <span>Tell: +255 754 661 423</span> <br />
                <span>Email: info@zpunet.com</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
