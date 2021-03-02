import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsCollectionFetching } from "../../redux/shop/shop-selectors";
import WithSpinner from "../../components/with-spinner/with-spinner";
import LandingPage from "./Landing";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const LandingPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(LandingPage);

export default LandingPageContainer;

//containers don't render anything. They just pass props down to components.
