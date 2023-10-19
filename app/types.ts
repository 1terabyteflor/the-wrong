export interface Artist {
  id: number;
  title: string;
  about: string;
  artist: string;
  bio: string;
  isAudio: boolean;
  video: string;
  images: string[];
  social: string[];
  album?: Album[];
}

export interface Album {
  coverImage: string;
  title: string;
  tracks: Track[];
}

export interface Track {
  title: string;
  audioUrl: string;
}
