import React, { useEffect } from "react";
import CustomButton from "../CustomButtons/Button";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";

class PaymentCheckoutButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myForm: false,
    };
  }

  onInputChange = (event) => {
    //destructure off of the event
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div>
        <form
          action="https://www.payfast.co.za/eng/process"
          method="POST"
          id="checkout"
        >
          <input
            type="hidden"
            name="merchant_id"
            value="17538504"
            onChange={this.onInputChange}
          />
          <input
            type="hidden"
            name="merchant_key"
            value="kyijbt7muhktl"
            onChange={this.onInputChange}
          />
          <input
            type="hidden"
            name="return_url"
            value="https://www.starhomecleaners.co.za/TransactionSuccess"
            onChange={this.onInputChange}
          />
          <input
            type="hidden"
            name="cancel_url"
            value="https://www.starhomecleaners.co.za/TransactionFailed"
            onChange={this.onInputChange}
          />
          <input
            type="hidden"
            name="notify_url"
            value="https://www.starhomecleaners.co.za/notify.html"
            onChange={this.onInputChange}
          />
          <input
            type="hidden"
            name="name_first"
            value={this.props.item.customerName}
            onChange={this.onInputChange}
          />
          <input
            type="hidden"
            name="email_address"
            value={this.props.item.email}
            onChange={this.onInputChange}
          />
          <input
            type="hidden"
            name="m_payment_id"
            value="1"
            onChange={this.onInputChange}
          />
          <input
            type="hidden"
            name="amount"
            value={this.props.item.total}
            onChange={this.onInputChange}
          />
          <input
            type="hidden"
            name="item_name"
            value={this.props.item.category}
            onChange={this.onInputChange}
          />
          <input
            type="hidden"
            name="item_description"
            value="10"
            onChange={this.onInputChange}
          />
          <input
            type="hidden"
            name="custom_int1"
            value="1"
            onChange={this.onInputChange}
          />

          {this.props.item.phoneNumber !== "" &&
          this.props.item.address !== "" ? (
            <p style={{ textAlign: "center" }}>
              <CustomButton
                type="submit"
                onClick={() => this.props.addItem(this.props.item)}
                style={{ "margin-top": "12.5px", background: "#e91e63" }}
                size="sm"
              >
                MAKE PAYMENT
              </CustomButton>
            </p>
          ) : (
            <p style={{ textAlign: "center" }}>
              <CustomButton
                style={{ "margin-top": "12.5px", background: "#e91e63" }}
                size="sm"
              >
                COMPLETE FORM
              </CustomButton>
            </p>
          )}
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(PaymentCheckoutButton);
