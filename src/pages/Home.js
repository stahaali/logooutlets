import React from "react";
import Homebanner from "./sections/Herobanner";
import Howwedesign from "./sections/Howwedesign";
import Ourportfolio from "./sections/Ourportfolio";
import Faq from "./sections/Faq";
import Contactsection from "./sections/Contactsection";

export default function Home() 
{
  return (
    <>
       <Homebanner/>
       <Howwedesign/>
       <Ourportfolio/>
       <Faq/>
       <Contactsection/>
    </>
  )
}
