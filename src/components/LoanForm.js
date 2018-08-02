import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../actions";
import "./LoanForm.css";

class LoanField extends Component {
  render() {
    return (
      <div className="form-group">
        <label className="col-sm-4">{this.props.label}</label>
        <div className="col-sm-8">
          <input
            className="form-control"
            {...this.props.input}
            placeholder={this.props.placeholder}
            required={this.props.required}
          />
        </div>
      </div>
    );
  }
}

class LoanForm extends Component {
  render() {
    return (
      <div className="loan-form-wrapper">
        <h4 className="text-center">Get your loan terms today!</h4>
        <form
          onSubmit={this.props.handleSubmit(values => {
            this.props.fetchTerms({ values });
          })}
        >
          <Field
            label="Street"
            type="text"
            name="street"
            placeholder="1 Grey Street"
            component={LoanField}
            required
          />
          <Field
            label="City"
            type="text"
            name="city"
            placeholder="Greystone Dr"
            component={LoanField}
            required
          />
          <Field
            label="State"
            type="text"
            name="state"
            placeholder="NY"
            component={LoanField}
            required
          />
          <Field
            label="County"
            type="text"
            name="county"
            placeholder="New York County"
            component={LoanField}
            required
          />
          <Field
            label="Zip"
            type="text"
            name="zip"
            placeholder="12345"
            component={LoanField}
            required
          />
          <Field
            label="Income"
            type="text"
            name="income"
            component={LoanField}
            required
          />
          <Field
            label="Expenses"
            type="text"
            name="expenses"
            component={LoanField}
            required
          />
          <Field
            label="NOI"
            type="text"
            name="noi"
            component={LoanField}
            required
          />
          <div className="text-center">
            <button className="btn btn-success loan-form-submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ form }) {
  return {
    form
  };
}

LoanForm = connect(mapStateToProps, actions)(LoanForm);

export default reduxForm({ form: "loanForm" })(LoanForm);
