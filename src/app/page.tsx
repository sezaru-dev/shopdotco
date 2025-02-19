'use client'
import Brands from "@/components/Brands";
import BrowseByDressStyle from "@/components/BrowseByDressStyle";
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
    </>
  );
}
