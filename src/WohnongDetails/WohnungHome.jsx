import WohnungCart from "../Components/Cart/WohnungCart";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar/Navbar";
import KontaktSidebar from "../Components/Sidebar";
import SimilarWohnungen from "./SimilarWohnungen";
import WohnungDetails from "./WohnungDetails";

const WohnungHome = () => {
  return (
    <>
    <Navbar />
    <KontaktSidebar />
    <WohnungDetails />
    <SimilarWohnungen />
    <Footer />
    </>
  );
};

export default WohnungHome;