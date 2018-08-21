export const INPUT_CHANGE = 'input_change_action';
export const ADD_DATA = 'add_data_action';
export const DELETE_DATA = 'delete_data_action';

export const inputChangeAction = function(value){
    return {
        type: INPUT_CHANGE,
        value
    }
}

export const addAction = function(){
    return {
        type: ADD_DATA
    }
}

export const deleteAction = function(index){
    return {
        type: DELETE_DATA,
        index
    }
}
