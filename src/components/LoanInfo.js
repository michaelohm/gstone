import React, { Component } from "react";
import TermDetail from "./TermDetail";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import LoanForm from "./LoanForm";
import "./LoanInfo.css";

class LoanInfo extends Component {
  constructor() {
    super();
    this.state = {
      showCount: 3
    };
  }
  handleViewMore() {
    let showCount = this.state.showCount + 3;
    this.setState({ showCount });
  }
  render() {
    let { terms } = this.props;
    if (terms) {
      console.log("showCount", terms.slice(0, 3));
    }
    return (
      <div className="loan-info-container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <LoanForm />
          </div>
        </div>
        <hr />
        <div className="row">
          {terms && (
            <div>
              {terms.slice(0, this.state.showCount).map((term, index) => {
                return <TermDetail key={index} term={term} />;
              })}
              {this.state.showCount < terms.length && (
                <div className="text-center">
                  <button
                    className="btn btn-info"
                    onClick={() => this.handleViewMore()}
                  >
                    Show More Terms
                  </button>
                </div>
              )}
            </div>
          )}
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
