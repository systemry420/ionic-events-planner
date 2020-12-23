export interface Event {
    title: string;
    type: string;
    style: string;
    occurrence: number;
    date: string[];
    tags: string[];
    status: string;
    place: {
        city: string;
        latitude: number;
        longitude: number;
    }
}
