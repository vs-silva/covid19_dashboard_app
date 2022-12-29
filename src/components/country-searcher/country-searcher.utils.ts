export function CountrySearcherUtils(eventbus: any){

    function emitChange(eventType:string ,countryName: string){
        eventbus.emitter.emit(eventType, sanitizeRegex(countryName));
    }

    function sanitizeRegex(inputValue:string) {
        return inputValue.replace(/[-[/\]{}()*+?.,\\^$|#\s]/g, '\\$&');
    }

    return {
        emitChange
    };
}
