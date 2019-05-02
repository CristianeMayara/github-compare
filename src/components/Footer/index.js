import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { Text } from './styles';

const Footer = ({ count }) => <Text>{`Você tem ${count} favoritos`}</Text>;

Footer.propTypes = {
  count: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  count: state.favorites.data.length,
});

export default connect(mapStateToProps)(Footer);
