const initState = {
    galleryRoute: null,
    AdminPermission: false,
    galleryHeading: '/projects/gallery',
    DarkMode: false,
    showChat:false
}

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ROUTE_CHANGE':
            return {
                ...state,
                galleryRoute: action.payload
            }
        case 'HEADING':
            return {
                ...state,
                galleryHeading: action.payload
            }
        case 'COLOR_CHANGE':
            return {
                ...state,
                DarkMode: action.payload
            }
        case 'ADMIN':
            return {
                ...state,
                AdminPermission: action.payload
            }
        case 'CHAT_CHANGE':
            return {
                ...state,
                showChat: action.payload
            }
        default: return state
    }

}

export default rootReducer;
