
const initialState = {
  cardTheme: THEME_DANGER,
};

export default function themes(state, action) {
  if (!state) state = initialState;
  return state;
}

