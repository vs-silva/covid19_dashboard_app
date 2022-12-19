export interface CoreDomainDrivenPort{
    get(resourceURL:string): Promise<object>;
}
