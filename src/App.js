import './App.css';
import React, {Component} from  'react';
import Good from './Good'

class App extends Component {
  state = {
    source: null
  }
  handleChange = (e)=>{
    let file = e.target.files[0];
    let fileReader = new FileReader();
    // fileReader.onload = () => {
    //   // const read = JSON.parse(JSON.stringify(fileReader.result))
    //   // // const read = JSON.parse(fileReader.result)
    //   // console.log(read)
    //   // this.setState({
    //   //   source: read
    //   // })
    //   this.test(fileReader.result);
    // };
    fileReader.onload = (function (theFile) {
      return function (e) {
       console.log('e readAsText = ', e);
       console.log('e readAsText target = ', e.target);
       console.log("jyp")
       try {
        let json = JSON.parse(e.target.result)
        // alert('json global var has been set to parsed json of this file here it is unevaled = \n' + JSON.stringify(json));
        console.log(json.Workbook.OfficeDocumentSettings);
       } catch (ex) {
        alert('err json = ' + ex);
       }
      }
     })(file);
    fileReader.readAsText(file);
  }

  // test = (text) => {
  //   console.log(text);
  //   console.log(typeof text === 'string')
  //   const read = JSON.parse(text);
  //   console.log(read);
  //   this.setState({
  //     source: read
  //   });
  // }

  _renderGoods = () => {
    // console.log(this.state.source)
    console.log(this.state.source ? this.state.source.Workbook : "jyp")
    // const goods = this.state.source.map((good, index) => {
    //   console.log(good)
    //   return <Good key={index}/>
    // });
    // return goods
  }
  render() {
    return (
      <div className="App">
        <header className="header">
        <img src="https://shop-phinf.pstatic.net/20190702_17/ncp_1nq2uj_01_1562054355047mnXo4_JPEG/50108458439258749_-647527624.jpg" className="App-logo" alt="logo" />
        </header>
        <div>
          <input type="file" onChange={this.handleChange.bind(this)} />
        </div>
        {this._renderGoods() }
        <Good code="" image="" brand="" goodCode="" uniqueness="" size="" totalCount="" cost="" lowCost="" tcgCost="" key=""/>
      </div>
    );
  }
}
export default App;
