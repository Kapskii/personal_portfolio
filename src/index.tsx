import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { App } from './App';
import { HashRouter } from 'react-router-dom';
import { initialData } from './Data/initialData';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <App data={initialData}/>
  </HashRouter>
);


reportWebVitals();
