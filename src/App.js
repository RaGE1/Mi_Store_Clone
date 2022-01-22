import './App.css';
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar.js';
import Slider from './components/Slider.js'
import data from './data/data.json';
import Offers from './components/Offers.js';
import Heading from './components/Heading.js';
import StarProducts from './components/StarProducts.js';
import HotAccessoriesMenu from './components/HotAccessoriesMenu.js'
import HotAccessories from './components/HotAccessories.js';
import Productreview from './components/ProductReview.js';
import Videos from './components/Videos.js';
import Banner from './components/Banner.js';
import Footer from './components/Footer.js';
import NavOptions from './components/NavOptions.js';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <Router >
      <PreNavbar/>
      <Navbar/>
      <NavOptions miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
      <Slider start={data.banner.start}/>
      <Offers offers={data.offer}/>
      <Heading text="STAR PRODUCTS"/>
      <StarProducts starProducts={data.starProduct}/>
      <Heading text="HOT ACCESSORIES"/>
      <HotAccessoriesMenu/>
      <Routes>
      <Route path="/" element={<HotAccessories sides={data.hotAccessories.music} Cover={data.hotAccessoriesCover.music}/>}>
      </Route>
      <Route path="/music" element={<HotAccessories sides={data.hotAccessories.music} Cover={data.hotAccessoriesCover.music}/>}>
      </Route>
      <Route path="/smartDevices" element={<HotAccessories sides={data.hotAccessories.smartDevice} Cover={data.hotAccessoriesCover.smartDevice}/>}>
      </Route>
      <Route path="/home" element={<HotAccessories sides={data.hotAccessories.home} Cover={data.hotAccessoriesCover.home}/>}>
      </Route>
      <Route path="/lifeStyle" element={<HotAccessories sides={data.hotAccessories.lifeStyle} Cover={data.hotAccessoriesCover.lifeStyle}/>}>
      </Route>
      <Route path="/mobileAccessories" element={<HotAccessories sides={data.hotAccessories.mobileAccessories} Cover={data.hotAccessoriesCover.mobileAccessories}/>}>
      </Route>
      </Routes>
      <Heading text="PRODUCT REVIEWS"/>
      <Productreview productReviews={data.productReviews}/>
      <Heading text="VIDEOS"/>
      <Videos videos={data.videos}/>
      <Heading text="IN THE PRESS"/>
      <Banner banner={data.banner}/>
      <Footer footer={data.footer}/>
    </Router>
  );
}

export default App;
