import React from "react";
import PropTypes from "prop-types";
import shortid from "shortid";

import useBreadcrumbs from "use-react-router-breadcrumbs";
import { Breadcrumbs as MUIBreadcrumbs } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component
 */
const Breadcrumbs = props => {
  const breadcrumbs = useBreadcrumbs();
  const breadcrumbsLength = breadcrumbs.length;

  const links = breadcrumbs.map(({ breadcrumb }, index) => {
    const { key } = breadcrumb;
    const color = index === breadcrumbsLength - 1 ? "textPrimary" : "inherit";

    return (
      <Link
        to={key}
        color={color}
        component={RouterLink}
        key={shortid.generate()}
      >
        {breadcrumb}
      </Link>
    );
  });

  return <MUIBreadcrumbs className="Breadcrumbs">{links}</MUIBreadcrumbs>;
};

Breadcrumbs.propTypes = propTypes;
Breadcrumbs.defaultProps = defaultProps;

export default Breadcrumbs;
export {
  propTypes as BreadcrumbsPropTypes,
  defaultProps as BreadcrumbsDefaultProps
};
