const OfficeMap = () => {
  return (
    <div className="w-full h-80 md:h-96 mt-6 rounded-lg overflow-hidden shadow-lg">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.1942350686454!2d9.986963476977625!3d53.55430005914311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f199ef0a46d%3A0x82256cb83b238416!2sGerhofstra%C3%9Fe%2018%2C%2020354%20Hamburg!5e0!3m2!1sen!2sde!4v1756995664535!5m2!1sen!2sde"
        className="w-full h-full border-0"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default OfficeMap;
