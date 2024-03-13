export interface ReviewData {
    _id: string,
    body: string,
    rating: number
}

export interface CampData {
    map(arg0: (camp: any) => import("react").JSX.Element): unknown
    filter(arg0: (camp: any) => any): unknown
    name: string,
    city: string,
    state: string,
    geolocation: {
        type: {
            type: string,
            enum: ['Point'],
            required: false
        },
        coordinates: {
            type: [number],
            required: false
        }
    },
    description: string,
    imageURL: string,
    price: number,
    reviews: [ReviewData]
}