import React from 'react';
import './assets/App.css';
import './views/user/SignUp'
import SignUp from './views/user/SignUp';
import { connect } from 'react-redux';

function App() {
  return (
    <div className='ui container'>
      <SignUp />
    </div>
  );
}
const mapStateToProp = (state) => ({
  user: state.user
})
export default connect(mapStateToProp)(App);
