import UberUns from "../Components/Features/UberUns";
import HeroPage from "../Components/HeroPage";
import Navbar from "../Components/Navbar/Navbar";
import Kunden from "../Components/swipper/Kunden";
import ApartmentMap from "../Components/Map/Map";
import Footer from "../Components/Footer";
import Carts from "../Components/Cart/Carts";


export default function Home(){
    return(
        <>
        <Navbar />
        <HeroPage />
         <Carts /> 
        <UberUns />
        <ApartmentMap />
        <Kunden />      
        <Footer />
        {/* <Wohnung /> */}
        </>
    )
}   