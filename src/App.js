import React, {Component} from  'react';
import './App.css';
import Good from './Good';

class App extends Component {

  state = {
    name: "good"
  }

  _callGoods = async () => {
    try {
      const patato = await fetch('.asset/위탁재고_190711.xlsx');
      const json = await patato.json();
      console.log(json)
      return json;
    }
    catch (err) {
      return console.log(err);
    }
  }

  componentDidMount(){
  }

  render() {
    return (
      <div className="App">
        <header className="header">
        <img src="https://shop-phinf.pstatic.net/20190702_17/ncp_1nq2uj_01_1562054355047mnXo4_JPEG/50108458439258749_-647527624.jpg" className="App-logo" alt="logo" />
        </header>
        <h1><Good name={this.state.name}/></h1>
      </div>
    );
  }
}



export default App;
