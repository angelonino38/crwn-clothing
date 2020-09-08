import React from "react";
import StripeCheckout from "react-stripe-checkout";

//setting price as property
const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HOyP2D1EMaE5jOtWlYMZyDuo7HkM09jXhIHIOZz6vHN833c9deTmOKNw6qW3UvMTEiZ94jhwmG0Nyq6Fl2SZ47o00JDRtalZt";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress=""
      shippingAddress=""
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
