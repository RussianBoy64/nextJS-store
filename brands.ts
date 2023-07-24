import { StaticImageData } from "next/image";

import adidasLogo from "@/public/images/logos/adidas.png";
import asosLogo from "@/public/images/logos/asos.png";
import bershkaLogo from "@/public/images/logos/bershka.png";
import levisLogo from "@/public/images/logos/levi-s.png";
import nikeLogo from "@/public/images/logos/nike.png";
import pullAndBearLogo from "@/public/images/logos/pull-bear.png";

export interface IBrand {
  id: number;
  name: string;
  src: string;
  logo: StaticImageData;
  alt: string;
}

const brands: IBrand[] = [
  { id: 0, name: "adidas", src: "#adidas", logo: adidasLogo, alt: "adidas" },
  { id: 1, name: "asos", src: "#asos", logo: asosLogo, alt: "asos" },
  { id: 2, name: "berskha", src: "#bershka", logo: bershkaLogo, alt: "bershka" },
  { id: 3, name: "levis", src: "#levis", logo: levisLogo, alt: "levis" },
  { id: 4, name: "nike", src: "#nike", logo: nikeLogo, alt: "nike" },
  {
    id: 5,
    name: "pullandbear",
    src: "#pullandbear",
    logo: pullAndBearLogo,
    alt: "pullandbear",
  },
];

export default brands;
