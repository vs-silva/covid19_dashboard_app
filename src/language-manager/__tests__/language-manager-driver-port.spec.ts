import {describe, it, expect, vi, vitest, expectTypeOf} from "vitest";
import LanguageManager from "@/language-manager";
import {TranslationKeyConstants} from "../constants/translation-key.constants";
import {LanguagesConstants} from "../constants/languages.constants";

describe('Language Manager Tests', () => {

    describe('Language Manager Driver Port Tests', () => {

        it('translate method should exist on port', () => {

            const ports = LanguageManager;

            expect(ports).toEqual(expect.objectContaining({
                translate: expect.anything()
            }));

            expectTypeOf(ports.translate).toBeFunction();

        });

        it('translate method should received two params key and language', () => {

            const spy = vi.spyOn(LanguageManager, 'translate');

            const payload = {
                key: TranslationKeyConstants.SEARCH_PLACEHOLDER_MESSAGE,
                language: LanguagesConstants.EN
            };

            LanguageManager.translate(payload.key, payload.language);

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(payload.key, payload.language);

        });


    });

});
