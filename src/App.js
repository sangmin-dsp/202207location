import './App.css';
import Header from './Components/Header'
import Item from './Components/Item.js'

import Accessories from './assets/Desktop-Accessories.jpg'
import ModelS from './assets/Desktop-ModelS.jpeg'
import Model3 from './assets/Desktop-Model3.jpeg'
import ModelX from './assets/Desktop-ModelX.jpeg'
import ModelY from './assets/Desktop-ModelY.jpeg'
import SolarPanels from './assets/Desktop-SolarPanels.jpeg'
import SolarRoof from './assets/Desktop-SolarRoof.jpeg'

function App() {
  return (
    <div className="App">
      <Header />
      <div class="app__itemsContainer">
        <Item
          title='레갈에 대한 정보'
          desc='레갈수: 240개, 구역수: 7개, 김창수: 윽ㅋㅋ'
          descLink=''
          backgroundImg={SolarPanels}
          leftBtnTxt='상품명으로 검색'
          leftBtnLink=''
          rightBtnTxt='위치로 검색'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='A구역'
          desc='레갈수: 40개'
          descLink=''
          backgroundImg={ModelS}
          leftBtnTxt='상품명으로 검색'
          leftBtnLink=''
          rightBtnTxt='위치로 검색'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='B구역'
          desc='레갈수: 40개'
          descLink=''
          backgroundImg={Model3}
          leftBtnTxt='상품명으로 검색'
          leftBtnLink=''
          rightBtnTxt='위치로 검색'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='C구역'
          desc='레갈수: 40개'
          descLink=''
          backgroundImg={ModelX}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Model Y'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={ModelY}
          leftBtnTxt='CUSTOM ORDER'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
        <Item
          title='Solar for New Roofs'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={SolarRoof}
          leftBtnTxt='OPEN NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
         <Item
          title='Accessories'
          desc='Money-back guarantee'
          descLink=''
          backgroundImg={Accessories}
          leftBtnTxt='SHOP NOW'
          leftBtnLink=''
          rightBtnTxt='LEARN MORE'
          rightBtnLink=''
          twoButtons='true'
        />
      </div>
    </div>
  );
}

export default App;
