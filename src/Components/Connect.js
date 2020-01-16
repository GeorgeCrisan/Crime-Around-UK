import { connect } from 'react-redux';
import * as Actions from '../Configs/actions';

const mapStateToProps = state => ({
    ...state
});

export default connect(mapStateToProps, {...Actions});