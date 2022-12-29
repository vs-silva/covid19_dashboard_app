import {describe, it, expect, vi, vitest} from "vitest";
import CoreDomain from "@/core-domain";
import type {CoreDomainDrivenPort} from "../ports/driven/core-domain-driven.port";
import {CoreDomainFacade} from "../core-domain.facade";


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

        it('getCountryReport should return an empty array if no information of selected country is provided by the server', async  () => {

            const fakeReaderAdapter: CoreDomainDrivenPort = {
              get: (resourceURL: string): Promise<object> =>  { return Promise.resolve({ data: []}); }
            };

            const fakeCoreDomainFacade = CoreDomainFacade(fakeReaderAdapter);

            const spy = vi.spyOn(fakeCoreDomainFacade, 'getCountryReport');
            const result = await fakeCoreDomainFacade.getCountryReport('Portugal');

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(result).toEqual(expect.arrayContaining([]));

        });

    });

});
