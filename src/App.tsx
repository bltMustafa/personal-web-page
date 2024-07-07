import Background from "./Components/Background.tsx"
import SidebarMenu from './Components/SidebarMenu';
import ProfileCard from './Components/ProfileCard';
import { Layout} from 'antd';

import './styles/MainPage.css';

function App() {
  return (
    <Layout className="App">
      <div className="canvas-container">
        <Background />
      </div>
      <SidebarMenu />
      <ProfileCard />
    </Layout>
  );
}

export default App;
