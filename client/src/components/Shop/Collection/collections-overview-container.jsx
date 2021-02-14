import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';//lets us pass the wrappers by just callinf the functions.

import { selectIsCollectionFetching } from '../../../redux/shop/shop-selectors';
import WithSpinner from '../../with-spinner/with-spinner';
import CollectionsOverview from './collections-overview';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);//compose, evaluates from right to left. It will evaulate withSpinner 1st by passing CollectionsOverview 1st.

export default CollectionsOverviewContainer;