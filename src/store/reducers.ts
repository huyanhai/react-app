export const count = (state = 1, action: { type: any }) => {
  switch (action.type) {
    case "count/IN":
      console.log("add");

      return state++;
    case "count/DE":
      return state--;
    default:
      return state;
  }
};

// export const todo = (state = { count: 0 }, action: { type: any }) => {
//   switch (action.type) {
//     case "todo/IN":
//       return state.count++;
//     case "todo/DE":
//       return state.count--;
//     default:
//       return state;
//   }
// };
