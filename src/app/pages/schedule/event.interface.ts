export interface Event {
    type: string;
    style: string;
    occurrence: number;
    place: {
        city: string;
        latitude: number;
        longitude: number;
    }
}
