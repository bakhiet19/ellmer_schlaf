import { useEffect, useRef, useState } from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaTwitter,
  FaLinkedinIn,
  FaTelegramPlane,
  FaShareAlt,
} from "react-icons/fa";
import { SiGooglecalendar, SiGmail, SiX } from "react-icons/si";

const ShareMenu = ({ url, title, details, location, startDate, endDate }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const toggleMenu = () => setOpen(!open);

  const encodedURL = encodeURIComponent(url || "");
  const encodedTitle = encodeURIComponent(title || "");
  const encodedDetails = encodeURIComponent(details || "");
  const encodedLocation = encodeURIComponent(location || "");
  const formatDate = (date) => (date ? date.replace(/-/g, "") : "");
  const encodedDates = `${formatDate(startDate)}/${formatDate(endDate)}`;

  const shareOptions = [
    { name: "Facebook", icon: <FaFacebookF />, link: `https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`, color: "bg-blue-600 hover:bg-blue-700" },
    { name: "WhatsApp", icon: <FaWhatsapp />, link: `https://wa.me/?text=Schau+dir+das+an:+${encodedURL}`, color: "bg-green-500 hover:bg-green-600" },
    { name: "X", icon: <SiX />, link: `https://twitter.com/intent/tweet?text=Schau+dir+das+an:+${encodedURL}`, color: "bg-sky-400 hover:bg-sky-500" },
    { name: "Google Kalender", icon: <SiGooglecalendar />, link: `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodedTitle}&dates=${encodedDates}&details=${encodedDetails}&location=${encodedLocation}`, color: "bg-red-500 hover:bg-red-600" },
    { name: "Gmail", icon: <SiGmail />, link: `mailto:?subject=${encodedTitle}&body=${encodedDetails}%0A${encodedURL}`, color: "bg-red-600 hover:bg-red-700" },
    { name: "LinkedIn", icon: <FaLinkedinIn />, link: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedURL}&title=${encodedTitle}`, color: "bg-blue-700 hover:bg-blue-800" },
    { name: "Telegram", icon: <FaTelegramPlane />, link: `https://t.me/share/url?url=${encodedURL}&text=${encodedTitle}`, color: "bg-sky-500 hover:bg-sky-600" },
  ];

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div className="relative inline-block" ref={ref}>
      <button
  onClick={toggleMenu}
  className="flex items-center gap-2 bg-gray-900 text-white px-5 py-2 rounded-full shadow-md hover:bg-gray-800 transition cursor-pointer"
>  Teilen
  <FaShareAlt className="text-lg" />
</button>

      {open && (
        <div className="absolute right-0 mt-3 p-4 bg-white z-100 shadow-lg flex flex-wrap gap-3 animate-fadeIn max-w-xs rounded-2xl">
          {shareOptions.map((option, index) => (
            <a
              key={index}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-center w-9 h-9 rounded-full text-white text-xl transition ${option.color} hover:scale-110`}
              title={option.name}
            >
              {option.icon}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShareMenu;
