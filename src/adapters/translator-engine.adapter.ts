import type {LanguageManagerDrivenPort} from "@/language-manager/ports/driven/language-manager-driven.port";

export function TranslatorEngineAdapter(): LanguageManagerDrivenPort {

    function translate(key: string, language: string): string {
        console.log(key);
        console.log(language);
        return '';
    }

    return {
        translate
    };
}
