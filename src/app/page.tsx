import Hero from "./components/hero";
import CustomFillter from "./components/CustomFillter";
import SearchBar from "./components/SearchBar";
import { fetchCars } from "../../utils";
import CarCard from "./components/CarCard";

export default async function Home() {
  const allCars = await fetchCars();
  console.log(allCars)
  const isempty = !Array.isArray(allCars) || allCars.length <1 || !allCars;// false result means we have fetched the data so
   // therefore we have to negate the allcars when so that false means we have to render the true condition
 
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
        {!isempty ? (
            <section className="">
              <div className="home__cars-wrapper">{
                allCars?.map((cars)=> <CarCard cars={cars}/>)
              }
              </div>
            </section>
           ):(
            <div className="home__error-container">
              <h1 className="text-black text-xl font-bold">Oops!!!! No Results</h1>
            </div>
           )}
      </div>
          </main>
  );
}
