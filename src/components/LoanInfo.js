import React, { Component } from "react";
import axios from "axios";
import TermDetail from "./TermDetail";

class LoanInfo extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        income: 300023,
        expenses: 22123,
        rate: 3.22,
        noi: 20000,
        address: {
          street: "1 Bacon Street",
          city: "Brooklyn",
          state: "NY",
          county: "Kings County",
          zip: "11216"
        }
      },
      terms: []
    };
  }
  async componentDidMount() {
    const res = await axios.post(
      "https://script.google.com/macros/s/AKfycbwPGz6uQQS9IW33ASPYlcWaEtRMD8eDAK1ONg7lT2dREXpaSUYh/exec",
      JSON.stringify(this.state.data)
    );
    this.setState({ terms: res.data.terms });
  }
  render() {
    let { terms } = this.state;
    return (
      <div className="row">
        {terms.length > 0
          ? terms.map((term, index) => {
              return <TermDetail key={index} term={term} />;
            })
          : "loading"}
      </div>
    );
  }
}

export default LoanInfo;
