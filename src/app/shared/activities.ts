import { IActivity } from './activity.model';

export const SAVED_ACTIVITIES: IActivity[] = [
    {
        "id": 1,
        "name": "Main Bike Trails",
        "date": new Date('06/01/2017'),
        "distance": 7,
        "comments": "Nice day, cool temps",
        "gpxData": "../../assets/gpx/1.gpx"
    },
    {
        "id": 2,
        "name": "Industrial Park",
        "date": new Date('06/02/2017'),
        "distance": 8,
        "comments": "Cool and windy",
        "gpxData": "../../assets/gpx/2.gpx"
    },
    {
        "id": 3,
        "name": "Forest Route",
        "date": new Date('06/03/2017'),
        "distance": 9,
        "comments": "Evening Run",
        "gpxData": "../../assets/gpx/3.gpx"
    },
    {
        "id": 4,
        "name": "Lake shore",
        "date": new Date('06/04/2017'),
        "distance": 6,
        "comments": "Cool and windy by the lake",
        "gpxData": "../../assets/gpx/4.gpx"
    }
]