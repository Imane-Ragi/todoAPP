import AddTodoContainer from "../AddTodo";
import AddTodo from "../AddTodo/componant";
import App from "./composant";

const AppContainer = (props) => {
    var days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      var d = new Date();
      var dayName = days[d.getDay()];

  return <App date={dayName} handleAdd={handleAdd}/>;
};

export const handleAdd =  <AddTodo pre="test"/>;

export default AppContainer;
