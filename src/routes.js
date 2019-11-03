import Details from "./components/Details";
import Main from "./components/Main";

const routes = [
    {path: '/', component: Main},
    {path: '/:id', component: Details}
];

export default routes;