import ScrollNav from '../../../assets/components/scrollnav';
import { connect } from 'react-redux';
import { switchMainPage } from '../../../store/actions';
const mapStateToProps = ({ mainPage }) => {
  return { current: mainPage }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    dispatchPage: function (pagename) {
      dispatch(switchMainPage(pagename));
    }
  }
}

const Scroller = connect(mapStateToProps, mapDispatchToProps)(ScrollNav);

export default Scroller;
