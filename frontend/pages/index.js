import React from 'react';
import { connect } from 'react-redux';
import { wrapper } from "../src/store/createStore";
import { getHomesAction } from "../src/actions";
import { END } from 'redux-saga';
import { Trans, withTranslation } from 'react-i18next';

const mapStateToProps = state => ({
    homes: state.homes,
});
class Index extends React.Component {

    render() {
        const { i18n } = this.props;

        const changeLanguage = (lng) => {
            i18n.changeLanguage(lng);
        };
        return (
            <div className="container">
            </div>
        );
    }
}
export default connect(mapStateToProps)(withTranslation()(Index));

export const getStaticProps = wrapper.getStaticProps(store => async context => {
        store.dispatch(getHomesAction());
        store.dispatch(END);
        await store.sagaTask.toPromise();
    });