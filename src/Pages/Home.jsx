import Cart from "../Components/Cart/Cart";
import UberUns from "../Components/Features/UberUns";
import HeroPage from "../Components/HeroPage";
import Navbar from "../Components/Navbar/Navbar";
import Wohnung from "../Components/Wohnung";

export default function Home(){
    return(
        <>
        <Navbar />
        <HeroPage />
         <Cart /> 
        <UberUns />
        {/* <Wohnung /> */}
        </>
    )
}