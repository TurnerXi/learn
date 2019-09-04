import Page from '../components/Page';
import { connect } from 'react-redux';
const mapStateToProps = ({ mainPage }) => {
  return { page: mainPage }
}

const MainPage = connect(mapStateToProps)(Page);

export default MainPage;

