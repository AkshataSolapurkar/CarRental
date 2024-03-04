"use client"
import Hero from "./components/hero";
import CustomFillter from "./components/CustomFillter";
import SearchBar from "./components/SearchBar";

export default function Home() {
 
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="padding-x padding-y mt-12 max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalouge</h1>
          <p>Explore the cars You might like</p>
        </div>
        <div className="home__filters">
          <SearchBar/>
          <div className="home__filter-container">
            <CustomFillter
            
          />
            <CustomFillter
            />
          </div>
        </div>
      </div>
          </main>
  );
}
