export interface IAlbumData {
  id: number;
  userId: number;
  title: string;
}

export interface IUserData {
  name: string;
  id: number;
}

export type AlbumsResponse = IAlbumData[];
