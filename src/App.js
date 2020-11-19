import React, {Component} from 'react';
import './App.css';
import Main from './components/MainComponent';
  

class App extends Component {

  render(){
    return (
      <div>
        <Main/>
      </div>
    );
  }
}

export default App;



// function App() {
//   return (
//     <div className="App">
//       <Navbar dark color="primary">
//         <div className="container">
//           <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
//         </div>
//       </Navbar>
//       <Menu />
//     </div>
//   );
// }