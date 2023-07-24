import './App.css';
import WelcomePage from './pages/WelcomePage';
import AboutPage from './pages/AboutPage';    import TechnologiesPage from './pages/TechnologiesPage';
import DetailPage from './pages/DetailPage';

import ContactPage from './pages/ContactPage';

import Footer from './components/Footer';

import ProjectPage from './pages/ProjectsPage';
const App = () => {
  return (
    <>
      <div className={""}>

        <WelcomePage/>

        <AboutPage/>

        <TechnologiesPage/>

        <DetailPage/>

        <ProjectPage/>
        <ContactPage/>

        <Footer/>
      </div>
    </> 
  )

}

export default App;
