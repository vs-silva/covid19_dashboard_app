import type {LanguageManagerDriverPort} from "@/language-manager/ports/driver/language-manager-driver.port";
import type {LanguageManagerDrivenPort} from "@/language-manager/ports/driven/language-manager-driven.port";

export function LanguageManagerFacade(translator: LanguageManagerDrivenPort): LanguageManagerDriverPort {

    function translate(key:string, language:string): string {

        console.log(key);
        console.log(language);

        return '';
    }

    return {
        translate
    };
}
