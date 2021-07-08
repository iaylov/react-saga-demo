import * as type from "../types";
import { createRequestReducer } from "./createRequestReducer";

const initialState = {
  data: [],
};

const todos = createRequestReducer(type.GET_TODOS, initialState, {
  prepareData: (data) => data,
  actions: {
    [type.REMOVE_TODO]: (state, action) => ({
      ...state,
      data: state.data.filter((todo) => todo.id !== action.payload),
    }),
  },
});
export default todos;
