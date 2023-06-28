export interface route {
  id: string;
  name: string;
  path: string;
}

const routes: route[] = [
  { id: "woman", name: "Woman", path: "/woman" },
  { id: "man", name: "Man", path: "/man" },
  { id: "jewelry", name: "Jewelry", path: "/jewelry" },
];

export default routes;
