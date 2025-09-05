import Footer from "../Components/Sections/Footer";
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