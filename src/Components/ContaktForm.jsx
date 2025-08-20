import { useState } from "react";
import Head from "./Head";
import FirmenInfo from "./Contact/FirmenInfo";
import ContectFormular from "./Contact/ContectFormular";

export default function KontaktSection() {




  


  return (
    <div className="max-w-6xl mx-auto px-6 pb-8 sm:pb-12 lg:pb-16" id="Kontakt">
      <Head className='text-center'>Kontakt</Head>
      <div className="grid md:grid-cols-2 gap-10">
        <FirmenInfo />
        <ContectFormular />
       
      </div>
    </div>
  );
}