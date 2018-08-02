import React, { Component } from "react";
import TermDetail from "./TermDetail";
import { reduxForm } from "redux-form";
import { connect } from "react-redux";
import LoanForm from "./LoanForm";

class LoanInfo extends Component {
  constructor() {
    super();
    this.state = {
      showCount: 3
    };
  }
  handleViewMore() {
    this.setState({ showCount: (this.state.showCount += 3) });
  }
  render() {
    let { terms } = this.props;
    if (terms) {
      console.log("showCount", terms.slice(0, 3));
    }
    return (
      <div>
        <div className="row">
          <div className="col-sm-6">asdf</div>
          <div className="col-sm-6">
            <LoanForm />
          </div>
        </div>
        <hr />
        <div className="row">
          {terms && (
            <div className="text-center">
              {terms.slice(0, this.state.showCount).map((term, index) => {
                return <TermDetail key={index} term={term} />;
              })}
              {this.state.showCount < terms.length && (
                <button className="btn" onClick={() => this.handleViewMore()}>
                  Show More Terms
                </button>
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
