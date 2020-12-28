export class IEvent {
    title: string;
    type: string;
    style: string;
    occurrence: number;
    dates: string[];
    tags: string[];
    status: string;
    place: {
        city: string;
        lat: number;
        lng: number;
    }

    constructor(
        type, style, occurrence, dates, {lat, lng}
    ) {
        this.type = type;
        this.style = style;
        this.occurrence = occurrence;
        this.dates = dates;
        this.place = {city: "Beirut", lat, lng};
    }
}
