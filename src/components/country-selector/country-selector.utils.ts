
export function CountrySelectorUtils() {

    function filterCountries(filterValue: string, countries: any[]) {
        return countries.filter(x => x.country.toLowerCase().includes(filterValue.toLowerCase()));
    }

    return {
        filterCountries
    };
}
