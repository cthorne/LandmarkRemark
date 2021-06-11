export class Interfaces {
    constructor() {
    }
}

export interface Marker {
  id: number;
  coordinates: {
    id: number;
    longitude: number;
    latitude: number;
  };
  user: {
    userName: string;
  };
  comment: string;
}
