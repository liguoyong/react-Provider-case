import {INPUT_CHANGE, ADD_DATA, DELETE_DATA} from './actionCreator'

let flag = 4;
const initialState = {
    value: 'hello',
    data: [
        {id: 1, val: 'a'},
        {id: 2, val: 'b'},
        {id: 3, val: 'c'},
        {id: 4, val: 'd'}
    ]
}
export default function listReducer(state = initialState, action){

    console.log(action);
    //文件输入框修改事件
    if(action.type === INPUT_CHANGE){
        //深拷贝state的数据
        let newState = JSON.parse(JSON.stringify(state));
        newState.value = action.value;
        return newState;
    }
    // 新增事件
    if(action.type === ADD_DATA){
        let newState = JSON.parse(JSON.stringify(state));
        flag++;
        newState.data.push({
            id: flag,
            val: newState.value
        });
        newState.value = '';
        return newState;
    }

    // 删除事件
    if(action.type === DELETE_DATA){
        let newState = JSON.parse(JSON.stringify(state));
        newState.data.splice(action.index, 1);
        return newState;
    }


    return state;
}