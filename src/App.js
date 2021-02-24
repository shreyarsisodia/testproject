import './App.css';
import  CardandText from './components/molecules/CardandText';
import PodcastList from './components/organisms/PodcastList';
import ChannelNameBox from './components/organisms/ChannelNameBox';
import CommonNavbar from './components/organisms/CommonNavbar';
import PlaylistName from './components/atoms/PlaylistName';
import Nexticon from './components/atoms/Nexticon';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import PodcastActivity from './components/pages/PodcastActivity';
import MyDrafts from './components/pages/MyDrafts';
import PlaylistPage from './components/pages/PlaylistPage';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import LandingPage from './components/pages/LandingPage';
import Playerpage from './components/pages/Playerpage';
const App=()=>{
    return(
    <BrowserRouter>
        <div>
        <Switch>
         <Route path='/' exact component={LandingPage}/>
         <Route path='/Login' exact component={Login}/>
         <Route path='/Register' exact component={Register}/>
        <Route path='/PodcastActivity' exact component={PodcastActivity}/>
        <Route path='/MyDrafts' component={MyDrafts}/>
        <Route path='/PlaylistPage' component={PlaylistPage}/>
        <Route path='/Playerpage/:id/:title' component={Playerpage}/>
        </Switch>
        </div>
        </BrowserRouter>
);
}

export default App;
