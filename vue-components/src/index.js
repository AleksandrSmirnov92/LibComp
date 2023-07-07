import NewButton from "./components/NewButton.vue";
import NewInput from "./components/NewInput.vue";
export default {
  install: (app, options) => {
    app.component("NewButton", NewButton);
    app.component("NewInput", NewInput);
  },
};
export { NewButton, NewInput };
