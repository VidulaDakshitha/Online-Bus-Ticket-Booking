var initialize={
    client:[],
    allUsers:[],
    posts:[]
}

function reducer(state=initialize,action) {

    switch (action.type) {
        case 'addClient':{
            return {...state,client: [...action.clients]}
        }



        case 'addPosts':{
            return {...state,posts: [...action.posts]}
        }
        case 'currentUser':{
            return {...state,currentUser: action.user}
        }
        case 'addUsers':{
            return {...state,allUsers: [...action.users]}
        }
        case 'addNewUser':{
            var users=[...state.allUsers,action.user]
            return {...state,allUsers: users}
        }default:{
            return state;
        }
    }


}export default reducer;