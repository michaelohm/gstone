import React from "react";
import "./TermDetail.css";

const TermDetail = ({ term }) => {
  console.log("term", term);
  return (
    <div className="col-sm-4">
      <div className="term-card">
        <div>
          <div>
            <strong>75% LTV Proceeds: </strong>
            {term["75% LTV Proceeds"]}
          </div>
          <div>
            <strong># Payments: </strong>
            {term["# Payments"]}
          </div>
          <div>
            <strong>Agency: </strong>
            {term["Agency"]}
          </div>
          <div>
            <strong>Annual Debt Service: </strong>
            {term["Annual Debt Servi<strong>ce"]}
          </div>
          <div>
            <strong>Debt Constant: </strong>
            {term["Debt Constant"]}
          </div>
          <div>
            <strong>Interest Rate: </strong>
            {term["Interest Rate"]}
          </div>
          <div>
            <strong>NOI: </strong>
            {term["NOI"]}
          </div>
          <div>
            <strong>Payoff: </strong>
            {term["Payoff"]}
          </div>
          <div>
            <strong>Proceeds: </strong>
            {term["Proceeds"]}
          </div>
          <div>
            <strong>Treasury: </strong>
            {term["Treasury"]}
          </div>
          <div>
            <strong>Type: </strong>
            {term["Type"]}
          </div>
          <div>
            <strong>Value: </strong>
            {term["Value"]}
          </div>
          <div>
            <strong>Years: </strong>
            {term["Years"]}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermDetail;
