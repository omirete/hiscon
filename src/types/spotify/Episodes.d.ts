import Episode from "./Episode";

export default interface Episodes {
    href: string;
    items: Episode[];
    limit: number;
    next: any;
    offset: number;
    previous: any;
    total: number;
}
