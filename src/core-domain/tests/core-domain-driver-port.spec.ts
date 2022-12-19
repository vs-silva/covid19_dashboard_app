import {describe, it, expect, vi} from "vitest";
import CoreDomain from "@/core-domain";

describe('Core Domain Tests', () => {

    describe('Core Domain Driver Ports Tests', () => {


        it('getAllCountries should return a list of all available countries', async () => {

            const spy = vi.spyOn(CoreDomain, 'getAllCountries');
            const result = await CoreDomain.getAllCountries();

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();

            expect(result.length).toBeGreaterThan(0);

            expect(result[0]).toEqual(expect.objectContaining({
                country: expect.any(String),
                slug: expect.any(String)
            }));
        });

        it('getCountryReport should return report information of selected country since day one', async () => {

            const spy = vi.spyOn(CoreDomain, 'getCountryReport');
            const result = await CoreDomain.getCountryReport('Portugal');

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();

            expect(result).toEqual(expect.objectContaining({
                country: expect.any(String),
                countryCode: expect.any(String),
                reports: expect.arrayContaining([expect.objectContaining({
                    date: expect.any(String),
                    active: expect.any(Number),
                    confirmed: expect.any(Number),
                    recovered: expect.any(Number),
                    deaths: expect.any(Number)
                })])
            }));
        });

    });

});
