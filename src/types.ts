export interface IAlbumItem {
  albumData: { id: number; userId: number; title: string };
}

export interface IUserdata {
  name: string;
  id: number;
}

export interface AlbumRes {
  id: number;
  userId: number;
  title: string;
}
export type AlbumsResponse = AlbumRes[];
