import React, { Fragment } from "react";
import { Route, Redirect } from "react-router-dom";
import { TOKEN } from "../../util/config";

const CheckoutTemplates = (props) => {
  const { Component, ...restProps } = props;

  // if (!localStorage.getItem(TOKEN)) {
  //   return <Redirect to="/login" />;
  // }

  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
};

export default CheckoutTemplates;
