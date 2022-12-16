import {ref} from "vue";
import type {CountryDTO} from "@/core-domain/dtos/country.dto";
import type {CountryReportDTO} from "@/core-domain/dtos/country-report.dto";
import CoreDomain from "@/core-domain";

export function DomainStore () {

    const countries = ref(<CountryDTO[]>[]);
    const country = ref(<CountryReportDTO>{});

    async function getCountries() {
        countries.value = await CoreDomain.getAllCountries();
    }

    async function getCountryReport(countryName:string) {
        country.value = await CoreDomain.getCountryReport(countryName);
    }

    return{
        countries,
        country,
        getCountries,
        getCountryReport
    };
};
