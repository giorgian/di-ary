import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import NoteList from '../components/note-list';
import * as NoteActions from '../actions/note-actions';

function mapStateToProps(state) {
  return {...state};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NoteActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
