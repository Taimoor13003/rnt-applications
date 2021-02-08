export const changeRoute=(e)=>{
    return{
        type:'ROUTE_CHANGE',
        payload: e
    }
}

export const galleryRoute =()=>{
    return{
        type:'CHANGE'
    }

}
export const addProject = (newCard)=>{
    return{
        type:'PROJECT_ADD',
        payload: {...newCard}
    }

}