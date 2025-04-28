export interface Youtuber {
  name: string;
  logo: string;
  subscribers: string;
  link: string;
}

export const youtubers: Youtuber[] = [
  {
    name: "WeRStupid",
    logo: "/images/Werstupid.jpg",
    subscribers: "700K+",
    link: "https://www.youtube.com/@WeRStupid"
  },
  {
    name: "Meher Malhan",
    logo: "/images/meher.jpg",
    subscribers: "31K+",
    link: "https://www.youtube.com/@MeherMalhan"
  },
  {
    name: "Vardaan Malhan",
    logo: "/images/vardaan.jpg",
    subscribers: "45K+",
    link: "https://www.youtube.com/@vardaanmalhan"
  },
  {
    name: "Gaurav Shrivastav",
    logo: "/images/gaurav.jpg",
    subscribers: "43K+",
    link: "https://www.youtube.com/@srgaurav"
  },
  {
    name: "Zframe Unplugged",
    logo: "/images/zframe.jpg",
    subscribers: "800+",
    link: "https://www.youtube.com/@zframesunplugged"
  }
];