const ThemeRed = (state = "light", action) => {
  switch (action.type) {
    case "THEME":
      return state === "light" ? "dark" : "light";
    default:
      return state;
  }
};

export default ThemeRed;
