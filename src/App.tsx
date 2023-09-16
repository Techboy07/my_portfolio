import "./App.css";
import WelcomePage from "./pages/WelcomePage";
import AboutPage from "./pages/AboutPage";
import TechnologiesPage from "./pages/TechnologiesPage";
import DetailPage from "./pages/DetailPage";

import ContactPage from "./pages/ContactPage";

import Footer from "./components/Footer";
import { project, tech } from "../mytypes";
import ProjectPage from "./pages/ProjectsPage";
import { useReducer } from "react";
/*iimport { BrowserRouter,Routes,Route } from '../node_modules/react-router-dom/dist/index';

 */
const ACTIONS = {
  SET_PROJECTS: "SET_PROJECTS",
  SET_TECHS: "SET_TECHS",
};

interface Action {
  type: string;
  payload: any;
}

export interface stateObject {
  projects: project[];
  techs: tech[];
}
const initialStorage = {
  projects: [],
  techs: [],
};

const reducer = (state: stateObject, action: Action) => {
  switch (action.type) {
    case ACTIONS.SET_PROJECTS:
      return { ...state, projects: [...action.payload] };

    case ACTIONS.SET_TECHS:
      return {
        ...state,
        techs: [...action.payload],
      };

    default:
      return state;
  }
};
type Reducer = typeof reducer;
const apiUrl = import.meta.env.VITE__API_URL;
async function getDocs(url: string) {
  return fetch(url)
    .then((res) => res.json())
    .then((data) => data);
}

const App = () => {
  const [storage, dispatch] = useReducer<Reducer, stateObject>(
    reducer,
    initialStorage,
    () => initialStorage
  );

  getAndDispatch("techs", ACTIONS.SET_TECHS);
  getAndDispatch("projects", ACTIONS.SET_PROJECTS);

  function getAndDispatch(route: string, type: string) {
    getDocs(`${apiUrl}/${route}`).then((res) =>
      dispatch({ type, payload: res })
    );
  }

  return storage.projects.length > 0 && storage.techs.length > 0 ? (
    <>
      <main className={""}>
        <WelcomePage />

        <AboutPage />

        <TechnologiesPage state={storage} />

        <DetailPage />

        <ProjectPage state={storage} />
        <ContactPage />

        <Footer />
      </main>
    </>
  ) : (
    <div>loading...</div>
  );
};

export default App;
