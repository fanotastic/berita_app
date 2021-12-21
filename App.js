import React from 'react';
import { View } from 'react-native';
import { BackButton } from 'react-router-native';
import { NativeRouter, Routes, Route } from 'react-router-native';
import DetailPage from './src/pages/Detail';
import HomePage from './src/pages/Home';
// import Test from './src/pages/test';

const App = (props) => {
  return (
    // NativeRouter : untuk mengakomodir routing page
    <NativeRouter>
      <BackButton>
        <Route exact path="/" component={HomePage} />
        <Route path="/detail" component={DetailPage}/>
        {/* <Route path="/test" component={TestDong}/> */}
      </BackButton>
    </NativeRouter>
    // <View>F
    //   <HomePage/>
    // </View>

  )
}

export default App;