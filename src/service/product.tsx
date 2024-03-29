import { AxiosResponse } from "axios";
import instance from "../core/api";
import { IFilm } from "../common/film";

export const getAllFilms = async () => {
  try {
    const rest: AxiosResponse<IFilm[]> = await instance.get("/film");
    return (rest.data as IFilm[]) || [];
  } catch (error: any) {
    console.log(error);
  }
};

export const getFilmById = async (id: number) => {
  try {
    const rest: AxiosResponse = await instance.get(`/film/${id}`);
    return (rest.data as IFilm) || {};
  } catch (error: any) {
    return error.message;
  }
};
