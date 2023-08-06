import Image from "./Image";
import Episodes from "./Episodes";

export default interface Show {
    available_markets: string;
    copyrights: string[];
    description: string;
    episodes: Episodes;
    explicit: boolean;
    external_urls: Record<string, string>;
    href: string;
    id: string;
    images: Image[];
    is_externally_hosted: boolean;
    languages: string[];
    media_type: string;
    name: string;
    publisher: string;
    total_episodes: number;
    type: string;
    uri: string;
}
