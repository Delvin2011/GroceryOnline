import React from 'react';
import {Route} from 'react-router-dom'; //putting the collections over-view in a route

import CollectionsOverviewContainer from '../../components/Shop/Collection/collections-overview-container';
import CollectionPageContainer from '../collection/collection-container';
//inside of the App.js, the shopPage is being nested in a route and it automatically passes the 3 objects (match, location and history) into our component as props
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop-actions';


class ShopPage extends React.Component {

    
    componentDidMount(){
        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();
    }
    render(){
        const {match} = this.props;
        //oonly renders withspinner if isCollectionLoaded is true
        console.log(match)
        return( 
            <div className = 'shop-page'>
                <Route exact path = {`${match.path}`} component = {CollectionsOverviewContainer}/>
                <Route path = {`${match.path}/:collectionId`}  component = {CollectionPageContainer}/> 
            </div>
    );
    }
} 
//render is a method that takes a function where the parameters of the function are prety much the parameters which the component will receive. The match location in history props, our route passes into our compoent. Which gives our collection page access to the object we used in our selector. 


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
//inside div, use string interpolation
//We want the collection to dynamically pluck off the right category from the reducer so that it knows what to display on the category. E.g hats. 
