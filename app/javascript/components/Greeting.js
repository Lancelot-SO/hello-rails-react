import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreetingData } from "../redux/actions/greeting-action";

const Greeting = () => {
  const greetings = useSelector((state) => {
    return state.greetingSlice.greetings;
  });

  const greeting = greetings[(Math.random() * greetings.length) | 0];

  const dispatch = useDispatch();

  const fetchGreeting = () => {
    dispatch(fetchGreetingData());
  };

  return (
    <div>
      <h1>{greeting}</h1>
      <button onClick={fetchGreeting}>Get a Greeting</button>
    </div>
  );
};

export default Greeting;