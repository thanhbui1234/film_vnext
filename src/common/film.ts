export interface IFilm {
  id?: number;
  image?: string;
  name?: string;
  actor?: string;
  view?: number;
  createAt?: Date;
  description?: string;
  subscribe?: number;
  likes?: number;
  timevideo?: string;
  avt?: string;
  title?: string;
  username?: string;
}

export interface IState {
  film: {
    films: IFilm[];
    isLoading: string;
  };
}
