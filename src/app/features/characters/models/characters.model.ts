
export interface IBaseResponse {
  info: IInfo;
  results: ICharacters[];
}

export interface IInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface ICharacters {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Location;
  location: Location;
  image: string;
  episode: string[];
  url: string;
  created: string;
}



export interface Location {
  name: string;
  url: string;
}


