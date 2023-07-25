import './App.css';
import WelcomePage from './pages/WelcomePage';
import AboutPage from './pages/AboutPage';    import TechnologiesPage from './pages/TechnologiesPage';
import DetailPage from './pages/DetailPage';

import ContactPage from './pages/ContactPage';

import Footer from './components/Footer';

import ProjectPage from './pages/ProjectsPage';

/*iimport { BrowserRouter,Routes,Route } from '../node_modules/react-router-dom/dist/index';
 */const App = () => {
  return (
    <>
      <main className={""}>

        <WelcomePage/>

        <AboutPage/>

        <TechnologiesPage/>

        <DetailPage/>

        <ProjectPage/>
        <ContactPage/>

        <Footer/>
      </main>
    </> 
  )

}

export default App;
