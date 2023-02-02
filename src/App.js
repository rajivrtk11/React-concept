import logo from './logo.svg';
import './App.css';
import Parent from './parent';
import WithPointless from './withPointless';
import { Component, Children } from 'react';
import DropzoneComponent from './dropzone';
// import KendoModal from './KendoModal';

function App(props) {
  console.log('the props is', props)
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit and save to reload.
        </p>
        <Parent/>
      </header> */}
      {/* <DropzoneComponent/> */}
      {/* <KendoModal/> */}
    </div>

    // <>
    //   {/* <Form/> */}
    //   {/* <Children {...props}/> */}
    //   <div>{props.num}</div>
    // </>
  );
}

class Form extends Component {

  render(){
      return<>inside form component</>
  }
}
export default App;
// export default WithPointless(App);
