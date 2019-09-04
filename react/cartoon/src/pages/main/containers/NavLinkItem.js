import Nav from '../components/Nav';
import { connect } from 'react-redux';
import { switchMainPage } from '../../../store/actions';
const mapStateToProps = ({ mainPage }) => {
  return { current: mainPage }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClickEvent: function () {
      dispatch(switchMainPage(ownProps.pageName));
    }
  }
}

const NavLinkItem = connect(mapStateToProps, mapDispatchToProps)(Nav);

export default NavLinkItem;
