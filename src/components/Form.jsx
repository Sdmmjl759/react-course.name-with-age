import { useState } from "react";
import Card from "./Card-SC";
import styles from './Form.module.css'

const Form = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameChangeHandler = e => setEnteredUsername(e.target.value);
  const ageChangeHandler = e => setEnteredAge(e.target.value);

  const submitHandler = (e) => {
    e.preventDefault();
    
    const userData = {
      username: enteredUsername,
      age: enteredAge,
      id: Math.random()
    }

    if (
      enteredUsername.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) return;
    if (+enteredAge < 0) return;

    props.onSaveUserData(userData);
    setEnteredUsername('');
    setEnteredAge('');
  }

  return (
    <Card>
      <form onSubmit={submitHandler}>
        <div className={styles['input-container']}>
          <label>Username</label>
          <input
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
        </div>
        <div className={styles['input-container']}>
          <label>Age</label>
          <input
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </div>
        <button>Add User</button>
      </form>
    </Card>
  )
};

export default Form;