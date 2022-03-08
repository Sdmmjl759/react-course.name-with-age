import { useState } from 'react';
import Form from './components/Form';
import Users from './components/Users';

const DUMMY_USSERDATA = []

function App() {
  const [userData, setUserData] = useState(DUMMY_USSERDATA);
  const saveUserDataHandler = (userData) => {
    setUserData(prevUserData => [userData, ...prevUserData])
  }

  return (
    <div className="App">
      <Form onSaveUserData={saveUserDataHandler} />
      <Users items={userData} />
      {/* {...userData.filter(ud=>)} */}
    </div>
  );
};

export default App;
