export interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string;
}

export interface PartOfCollectionProps {
  collection: {
    poster_path: string;
    name: string;
  };
  imageBaseUrl: string;
}

export interface Genre {
  id: number;
  name: string;
}

export interface GenresProps {
  genres?: Genre[];
}
