import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import * as actions from "../actions";

class LoanField extends Component {
  render() {
    return (
      <div className="form-group">
        <label>{this.props.label}</label>
        <input
          className="form-control"
          {...this.props.input}
          placeholder={this.props.placeholder}
          // required={this.props.required}
        />
      </div>
    );
  }
}

class LoanForm extends Component {
  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(values => {
            this.props.fetchTerms({ values });
          })}
        >
          <Field
            label="Street"
            type="text"
            name="street"
            placeholder="1 Cool Street"
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
          />
          <Field
            label="County"
            type="text"
            name="county"
            placeholder="New York County"
            component={LoanField}
          />
          <Field
            label="Zip"
            type="text"
            name="zip"
            placeholder="12345"
            component={LoanField}
          />
          <Field
            label="Income"
            type="text"
            name="income"
            component={LoanField}
          />{" "}
          <Field
            label="Expenses"
            type="text"
            name="expenses"
            component={LoanField}
          />{" "}
          <Field label="NOI" type="text" name="noi" component={LoanField} />
          <div className="text-right">
            <button className="btn btn-success" type="submit">
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
