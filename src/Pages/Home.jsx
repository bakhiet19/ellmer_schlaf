import Cart from "../Components/Cart/Cart";
import UberUns from "../Components/Features/UberUns";
import HeroPage from "../Components/HeroPage";
import Navbar from "../Components/Navbar/Navbar";


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