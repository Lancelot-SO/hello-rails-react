import { greetingActions } from "../slice/greetingSlice";

export const fetchGreetingData = () => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:3000/api/v1/messages");
    const data = await response.json();

    console.log(data);

    data.forEach((el) => {
      const greeting = el.text;
      dispatch(greetingActions.addGreeting(greeting));
    });
  };
};