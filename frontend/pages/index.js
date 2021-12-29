import React from 'react';
import { connect } from 'react-redux';
import { wrapper } from "../src/store/createStore";
import { getHomesAction } from "../src/actions";
import { END } from 'redux-saga';

const mapStateToProps = state => ({
    homes: state.homes,
});
class Index extends React.Component {
    render() {
        console.log('INDEX homes', this.props.homes)
        return (
            <div className="container">
                HELLO
            </div>
        );
    }
}
export default connect(mapStateToProps)(Index);

export const getStaticProps = wrapper.getStaticProps(store => async context => {
    store.dispatch(getHomesAction());
    store.dispatch(END);
    await store.sagaTask.toPromise();
});