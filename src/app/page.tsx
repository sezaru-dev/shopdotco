'use client'
import Brands from "@/components/Brands";
import BrowseByDressStyle from "@/components/BrowseByDressStyle";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import NewArrivals from "@/components/NewArrivals";
import Testimonies from "@/components/Testimonies";
import TopSelling from "@/components/TopSelling";

export default function Home() {
  
  return (
    <>
      <Hero/>
      <Brands/>
      <NewArrivals/>
      <div className="wrapper">
        <div className="my-16 w-full h-[1px] bg-black/10"/>
      </div>
      <TopSelling/>
      <BrowseByDressStyle/>
      <Testimonies/>
      {/*
      slider of this component still needs to be fix 
      1. rightmost part of the slider items needs to be still at rightmost of the wrapper
        -either change the button functions or
        -change the approach of how i make the slider like overflow-x-scroll, scroll-snap
      2. slider component for small screens is still not exist yet
      */}
      <Footer/>
    </>
  );
}
