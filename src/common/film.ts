export interface IFilm {
  id?: number;
  image?: string;
  name?: string;
  actor?: string;
  view?: number;
  createAt?: Date;
  description?: string;
  subciriber?: number;
  likes?: number;
  datetime?: string;
  avt?: string;
  title?: string;
  username?: string;
  timevideo?: string;
}

export interface IState {
  film: {
    films: IFilm[];
    film: IFilm;
    isLoading: string;
  };
}
