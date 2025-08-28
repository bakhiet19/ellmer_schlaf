import WohnungCart from "../Components/Cart/WohnungCart";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar/Navbar";
import KontaktSidebar from "../Components/Sidebar";
import WohnungDetails from "./WohnungDetails";

const WohnungHome = () => {
  return (
    <>
    <Navbar />
    <WohnungDetails />
    <KontaktSidebar />
    {/* <WohnungCart /> */}
    <Footer />
    </>
  );
};

export default WohnungHome;