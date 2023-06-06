import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchGreetingData } from "../redux/actions/greeting-action";

const Greeting = () => {
  const greetings = useSelector((state) => state.greetingSlice.greetings);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetingData());
  }, [dispatch]);

  const getRandomGreeting = () => {
    if (greetings.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
  };

  const greeting = getRandomGreeting();

  return (
    <div>
      {greeting && <h1>{greeting}</h1>}
      <button onClick={() => dispatch(fetchGreetingData())}>
        Get a Greeting
      </button>
    </div>
  );
};

export default Greeting;
