import { services as SERVICES, doctors as DOCTORS, areas as AREAS, siteConfig as SITECONFIG } from "@/lib/site";

export function getAllStaticData() {
    const allArrayData = {
        services: SERVICES,
        doctors: DOCTORS,
        areas: AREAS
    }
    return allArrayData;
}