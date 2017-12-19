/**
 *
 * HomePage
 *
 */

import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { initRedux } from 'utils/configureStore';
import monitorSagas from 'utils/monitorSagas';

import logo from 'static/img/logo.png';

import isTruthy from 'helpers/isTruthy';
// import isFalsy from 'helpers/isFalsy';
// import isImmutable from 'helpers/isImmutable';

// import { selectLoading, selectInfo, selectError } from 'containers/App/selectors';
import {
  selectTitle,
} from './selectors';
import { } from './constants';
import {
  changeTitle,
} from './actions';
import reducer from './reducer';
import saga from './saga';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static async getInitialProps({ store, isServer }) {
    store.dispatch(changeTitle());
    await monitorSagas(store);
    return {
      isServer,
    };
  }
  render() {
    const { title, dispatch } = this.props;
    return (
      <div>
        <Head>
          <title>HomePage</title>
        </Head>
        <div className="flex flex-column items-center justify-center homepage-wrapper">
          <h1>{isTruthy(title) ? title : 'Homepage'}</h1>
          <img className="w5" src={logo} alt="logo" />
          <hr />
          <button onClick={() => dispatch(changeTitle())}>Change Title</button>
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  // loading: PropTypes.object.isRequired,
  // info: PropTypes.object.isRequired,
  // error: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  title: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  // loading: selectLoading(),
  // info: selectInfo(),
  // error: selectError(),
  title: selectTitle(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withRedux = initRedux({ key: 'homePage', reducer, saga });
export default compose(
  withRedux,
  withConnect,
)(HomePage);
