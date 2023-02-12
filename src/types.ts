export interface IUserData {
  name: string;
  id: number;
}
export interface IAlbumData {
  userId: number;
  id: number;
  title: string;
}

export interface IPhotoData {
  id: number;
  albumId: number;
  url: string;
}

export type AlbumsResponse = IAlbumData[];
export type PhotoResponse = IPhotoData[];
