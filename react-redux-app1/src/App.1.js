import React, { Component } from 'react';
import './App.css';

import store from './store'
import {inputChangeAction} from './store/actionCreator'

class App extends Component {
  constructor(){
    super();
    this.state = store.getState().list;

    this.inputChange = this.inputChange.bind(this);
  }

  render() {
    let {value, data} = this.state;
    return (
      <div className="App">
        <div className="handle">
          <input type="text" value={value} onChange={this.inputChange}/>
          <button>新增</button>
        </div>
        <ul className="list">
          {
            data.map((item, index)=>{
              return (
                <li key={item.id}>
                  {item.val}
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }

  inputChange(ev){
    console.log(ev.target.value);
    let action = inputChangeAction(ev.target.value);
    store.dispatch(action);
  }

  componentDidMount(){
    // 监听数据的变化
    store.subscribe(()=>{
      this.setState(store.getState().list);
    })
  }
}

export default App;
