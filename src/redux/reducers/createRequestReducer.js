export const createReducer =
  (initialState, handlers) =>
  (state = initialState, action = {}) => {
    if (action.type in handlers) {
      return handlers[action.type](state, action);
    }
    return state;
  };

export const createRequestReducer = (
  requestAction,
  initialState = {},
  { prepareData, actions = [] } = {}
) => {
  return createReducer(initialState, {
    [requestAction]: (state) => ({ ...state, isLoading: true }),

    [`${requestAction}_SUCCESS`]: (state, { payload }) => ({
      ...state,
      data: prepareData(payload),
      isLoading: false,
    }),

    [`${requestAction}_FAILED`]: (state, { payload, error = true }) => ({
      data: [],
      error: payload || error,
    }),

    ...actions,
  });
};
