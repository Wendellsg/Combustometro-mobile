import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Home from './pages/home';
import GasolinePrice from './pages/gasolinePrice';
import AlcoolPrice from './pages/alcoolPrice';
import Result from './pages/result';




const Routes = createAppContainer(
createSwitchNavigator({
    Home,
    GasolinePrice,
    AlcoolPrice,
    Result,    
    
  })
);


export default Routes;
