const addItem = [];

const addItems = (state = addItem, action) => {
  console.log("state in reducer fun",state)
  switch (action.type) {
    case "ADDITEM":
      if (state?.includes(action?.payload)) {
        return [...state];
      } else {
        return [...state, action?.payload];
      }

    case "DELITEM":
      return (state = state.filter((x) => {
        return x.id !== action.payload.id;
      }));
      break;

    // case "ADD_QUNTITY":
    //   return Object.assign([], state.map(item => {
    //     if(item.id === action.id){
    //       item.quantity += action.payload.up;
    //     }
    //     return item;
    //   }
    //   ));
    //   break;

    // case "REMOVE_QUANTITY":
    //   return Object.assign([], state.map(item => {
    //     if(item.id === action.id){
    //       item.quantity -= action.payload.down;
    //     }
    //     return item;
    //   }
    //   ));
    //   break;

    default:
      return state;
      break;
  }
};

export default addItems;
