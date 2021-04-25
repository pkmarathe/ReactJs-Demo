import './App.css';

import MainNav from "./components/main-nav/main-nav.component";
import LeftNav from "./components/left-nav/left-nav.component";
import TopNav from "./components/top-nav/top-nav.component"
import DashboardMainOne from "./components/dashboard-main-one/dashboard-main-one.component";
import DashboardMainTwo from "./components/dashboard-main-two/dashboard-main-two.component";


const App = () => {
  return (
    <div className="main-page">
      <MainNav/>
      <LeftNav/>
      <div className="cards-section">
        <div className="cards-section-one">
          <TopNav/>
        </div>
        <DashboardMainOne/>
        <DashboardMainTwo/>
      </div>
    </div>
  )
}


export default App;
