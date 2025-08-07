import { get} from '@vercel/edge-config'
import { AllArraysData, Area, Doctor, Service, SiteConfig } from './types'
import {services as SERVICES,doctors as DOCTORS,areas as AREAS,siteConfig as SITECONFIG} from "@/lib/site";

export async function getSiteConfig(){
  let siteConfig;
  try{
     siteConfig = await get('siteConfig') as SiteConfig;
    if (typeof siteConfig !== 'object' && siteConfig == null) {
      siteConfig = SITECONFIG;
    }
  }catch(e){
    console.log(e,"ERROR IN FETCHING SITECONFIG");
    siteConfig = SITECONFIG;
  }
  
  return siteConfig;
}

export async function getAllArrayData(){
    let allArrayData = await get('allArraysData') as AllArraysData;
    if(typeof allArrayData !== 'object' && allArrayData == null){
        allArrayData = {
            services:SERVICES,
            doctors:DOCTORS,
            areas:AREAS
        }
    }
    return allArrayData;
}



// export async function getServices() {
//   let services = await get('services') as Service[]
//   if(typeof services !=='object' && services === null){
//     services = SERVICES
//   }
//   return services;
  
// }

// export async function getDoctors() {
//   let doctors = await get('doctors') as Doctor[]
//   if(typeof doctors !=='object' && doctors === null){
//     doctors = DOCTORS
//   }
//   return doctors;
  
// }

// export async function getAreas() {
//   let areas = await get('areas') as Area[]
//   if(typeof areas !=='object' && areas === null){
//     areas = AREAS
//   }
//   return areas;
  
// }