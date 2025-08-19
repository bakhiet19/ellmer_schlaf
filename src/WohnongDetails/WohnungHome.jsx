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
    <Footer />
    </>
  );
};

export default WohnungHome;