import { useState } from 'react';

import './App.css';

import IntroText from './components/IntroText'
import OutlinedButton from './components/OutlinedButton'
import OscillatingIcon from './components/OscillatingIcon'

function App() {

  return (
<>
<IntroText  temp="Hi my name is Toluwalase. i'm a react developer!" styles="text-blue-900 font-bold text-2xl"/>

<OutlinedButton buttonText="view my work" styles="p-3"/>

<OscillatingIcon icon="bx bx-down-arrow-alt"/>
 </> )

  
}

export default App;
