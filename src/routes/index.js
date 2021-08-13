import { createRouter, createWebHistory } from "vue-router";

//Components
import Home from "../components/Home";
import AddProject from "../components/AddProject";
import EditProject from "../components/EditProject";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/add",
    name: "AddProject",
    component: AddProject,
  },
  {
    path: "/project/:id",
    name: "EditProject",
    component: EditProject,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
