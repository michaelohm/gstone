import React, { Component } from "react";
import TermDetail from "./TermDetail";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import LoanForm from "./LoanForm";

class LoanInfo extends Component {
  render() {
    let { terms } = this.props;
    return (
      <div>
        <div>
          <LoanForm />
        </div>
        <hr />
        <div className="row">
          {terms &&
            terms.map((term, index) => {
              return <TermDetail key={index} term={term} />;
            })}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ terms }) {
  return { terms };
}

LoanInfo = connect(mapStateToProps)(LoanInfo);

export default reduxForm({ form: "loanForm" })(LoanInfo);
