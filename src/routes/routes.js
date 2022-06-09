import MainPage from "../pages/mainPage";
import PeoplePage from "../pages/people";
import FilmsPage from "../pages/films";
import StarshipsPage from "../pages/starships";
import VehiclesPage from "../pages/vehicles";
import SpeciesPage from "../pages/species";
import PlanetsPage from "../pages/planets";
import PersonPage from "../pages/people/person";
import FilmPage from "../pages/films/film";
import StarshipPage from "../pages/starships/starship";
import VehiclePage from "../pages/vehicles/vehicle";
import SpeciesTypePage from "../pages/species/species-type";
import PlanetPage from "../pages/planets/planet";

export const routes = [
  {
    path: "/",
    component: <MainPage />,
    showInNavigation: false,
    label: "Main page",
  },
  {
    path: "/people",
    component: <PeoplePage />,
    showInNavigation: true,
    label: "People",
  },
  {
    path: "/people/:id",
    component: <PersonPage />,
    showInNavigation: false,
    label: "Person",
  },
  {
    path: "/films",
    component: <FilmsPage />,
    showInNavigation: true,
    label: "Films",
  },
  {
    path: "/films/:id",
    component: <FilmPage />,
    showInNavigation: false,
    label: "Film",
  },
  {
    path: "/starships",
    component: <StarshipsPage />,
    showInNavigation: true,
    label: "Starships",
  },
  {
    path: "/starships/:id",
    component: <StarshipPage />,
    showInNavigation: false,
    label: "Starship",
  },
  {
    path: "/vehicles",
    component: <VehiclesPage />,
    showInNavigation: true,
    label: "Vehicles",
  },
  {
    path: "/vehicles/:id",
    component: <VehiclePage />,
    showInNavigation: false,
    label: "Vehicle",
  },
  {
    path: "/species",
    component: <SpeciesPage />,
    showInNavigation: true,
    label: "Species",
  },
  {
    path: "/species/:id",
    component: <SpeciesTypePage />,
    showInNavigation: false,
    label: "Species type",
  },
  {
    path: "/planets",
    component: <PlanetsPage />,
    showInNavigation: true,
    label: "Planets",
  },
  {
    path: "/planets/:id",
    component: <PlanetPage />,
    showInNavigation: false,
    label: "Planet",
  },
];
