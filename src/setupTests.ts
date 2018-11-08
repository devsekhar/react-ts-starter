import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

Object.defineProperty(window, "localStorage", {
  value: (() => {
    const storage = {};
    return {
      getItem: key => {
        return storage[key] || null;
      },
      key: i => {
        const keys = Object.keys(storage);
        return keys[i] || null;
      },
      removeItem: key => {
        delete storage[key];
      },
      setItem: (key, value) => {
        storage[key] = value || "";
      },
      get length() {
        return Object.keys(storage).length;
      }
    };
  })()
});
