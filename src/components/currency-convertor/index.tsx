import React, { useState, useEffect } from "react";
import { QuizQuestion } from "./QuizQuestion";
import { Button } from 'reactstrap';
import { RouteComponentProps } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import { ControlledAlert } from "../common/ControlledAlert";
import { Loader } from "../common/Loader";
import { IQuestion, IConverter } from '../../models/entities/ICurrencyConverter';



interface Identifiable {
  id: string;
}

const from = 'HKD';
const to = "EUR"

export const Preview: React.FC<RouteComponentProps<Identifiable>> = (
  props: RouteComponentProps<Identifiable>
) => {
  const {
    match: { params: { amount }}
  } = props;
  const { data, isLoading, isError } = useFetch<IConverter>(`/latest?base=${from} `);
  let result = 0;
  const refresh = () => {
    if (data) {
     result = data.rates[to] * amount
    }
  };
  if (isLoading) {
    return <Loader />;
  } else if (data) {
    return (
      <div className="preview">
        <div className="resultView">
          {result}
        </div>
      </div>
    );
  } else if (isError) {
    return <ControlledAlert message="Exchange Rate server is down, please try after some time." />;
  } else {
    return null;
  }
};
