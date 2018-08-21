import React from 'react';
import './App.css';
import { connect } from 'react-redux'//react关联redux的插件
import { inputChangeAction, addAction, deleteAction } from './store/actionCreator'

/*
class App extends Component {
  render() {
    let {value} = this.props;
    return (
      <div className="App">
        <div className="handle">
          <p>{value}</p>
          <input type="text" value={value} onChange={this.props.handleInputChange}/>
          <button>新增</button>
        </div>
        <ul className="list">
         
        </ul>
      </div>
    );
  }
}
*/

// 无状态组件。
// 无状态组件在组件的实现中，只有render函数时，建议使用。
// 提升性能。
const App = (props)=>{
    let {value, data} = props;
    return (
      <div className="App">
        <div className="handle">
          <p>{value}</p>
          <input type="text" value={value} onChange={props.handleInputChange}/>
          <button onClick={props.handleAddAction}>新增</button>
        </div>
        <ul className="list">
          {
            data.map((item, index)=>{
              return (
                <li key={item.id}>
                  {item.val}
                  <span onClick={props.handleDeleteAction(index)}>X</span>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
}




//将store中的state值转为组件的props使用
const mapStateToProps = (state)=>{
  return {
    //key为组件的props的名字
    // value值，为state中的值
    value: state.list.value,
    data: state.list.data
  }
}


//将store中的dispatch转为组件的props使用
const mapDispatchToProps = (dispatch)=>{
  return {
    //key为组件的props的名字
    // value值为事件，内部可以操作dispatch
    handleInputChange(ev){
      // console.log('触发了');
      let action = inputChangeAction(ev.target.value);
      dispatch(action);
    },
    handleAddAction(){
      let action = addAction();
      dispatch(action);
    },
    handleDeleteAction(index){
      return function(){
        let action = deleteAction(index);
        dispatch(action);
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);



/*
function a(param1){
  return function b(param2){
    return param1 + '-' + param2;
  }
}
a('q')('w')

console.log(a('q')('w'));
*/