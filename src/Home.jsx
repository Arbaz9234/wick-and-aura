import React, { useRef } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Collection from "./components/Collection";
import Footer from "./components/Footer";
import OurPolicy from "./components/OurPolicy";

export default function Home() {
  const collectionRef = useRef(null);

  const scrollToCollection = () => {
    collectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="">
      <Header />
      <Banner onShopNowClick={scrollToCollection} />
      <div ref={collectionRef}>
        <Collection />
      </div>
      <OurPolicy />
      <Footer />
    </div>
  );
}
