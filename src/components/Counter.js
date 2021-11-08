import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../redux/actions";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.counter);
  return (
    <div>
      <h1>The count is {count.value}</h1>
      <Btn onClick={() => dispatch(actions.increment(count.value))}>+</Btn>
      <Btn onClick={() => dispatch(actions.decrement(count.value))}>-</Btn>
    </div>
  );
};

export default Counter;

const Btn = styled.button`
  width: 50px;
  height: 50px;
`;
