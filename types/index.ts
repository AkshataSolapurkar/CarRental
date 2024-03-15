import { MouseEventHandler } from "react";



export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };

export interface CustomBtnProps {
    title:string;
    handlebtn: MouseEventHandler<HTMLButtonElement>;
    containerstyles?:string;
    textstyles?:string;
    rightIcon?:string;
}
export interface Manufactureprops{
    setmanufacture:(manufacture:string) => void;
    manufacture:string;
}
export interface carprops{
    city_mpg:number;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
    class:string;
}

export interface FilterProps {
    manufacturer?: string;
    year?: number;
    model?: string;
    limit?: number;
    fuel?: string;
  }