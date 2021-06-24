const initialState = {
    test : 'kor',
    main_title1: "알림확인",
    main_title2: 'check'
}

export const testReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'change':
            console.log(state)
             return {
                ...state,
                test: state.test === "kor" ? 'eng' : 'kor',
            };
               case 'changeTemp':
          
             return {
                ...state,
                test: action.payload,
            };
        default:
           return {
               ...state
           }
    }



}