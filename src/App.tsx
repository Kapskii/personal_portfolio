import './App.css';
import { Header } from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './components/pages/HomePage/HomePage';
import { SkillsPage } from './components/pages/SkillsPage/SkillsPage';
import { ProjectsPage } from './components/pages/ProjectsPage/ProjectsPage';
import { ExperiancePage } from './components/pages/ExperiancesPage/ExperiancesPage';
import { ContactsPage } from './components/pages/ContactsPage/ContactsPage';
import { DataType } from './State/initialDataType';

type PropsType = {
  data: DataType
}

export const App = (props: PropsType) => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='' element={<HomePage profileData={props.data.homePage}/>} />
        <Route path='home' element={<HomePage profileData={props.data.homePage}/>} />
        <Route path='skills' element={<SkillsPage skillData={props.data.skillPage}/>} />
        <Route path='projects' element={<ProjectsPage />} />
        <Route path='experiance' element={<ExperiancePage />} />
        <Route path='contacts' element={<ContactsPage />} />
      </Routes>
    </div>
  );
}