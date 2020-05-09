import * as React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Snackbar} from 'react-native-paper';
import {closeToast} from '../../Actions/toast';

class Toast extends React.Component {
  render() {
    const {message, isVisible} = this.props;
    return (
      <View>
        <Snackbar
          duration={2000}
          visible={isVisible}
          onDismiss={() => {
            this.props.closeToast();
          }}>
          {message}
        </Snackbar>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  isVisible: state.toastReducer.isVisible,
  message: state.toastReducer.message,
});

const mapDispatchToProps = {
  closeToast,
};

export default connect(mapStateToProps, mapDispatchToProps)(Toast);
