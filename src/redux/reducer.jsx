import WatchedList from "../Components/WatchedList";

const initialState = {
  WatchedList: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "first":
      return { ...state, WatchedList: [...state.WatchedList, payload] };
    case "remove":
      let arr = [];
      for (let i = 0; state.WatchedList.length > i; i++) {
        if (!(payload == state.WatchedList[i])) {
          arr.push(state.WatchedList[i]);
        }
      }
      return { ...state, WatchedList: arr };

    default:
      return state;
  }
};
