import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import './App.css';
import { app } from './firebase';

function App() {
  const [formdata, setformdata] = useState({});

  const collect = (event) => {
    setformdata({
      ...formdata,
      [event.target.name]: event.target.value,
    });
  };

  const auth = getAuth(app);

  const submit = (e) => {
    e.preventDefault();
    const { email, password } = formdata;
    signInWithEmailAndPassword(auth, email, password)
      .then((value) => {
        console.log(value);
      })
      .catch((error) => {
        console.error('Error signing in:', error);
      });
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" onChange={collect} />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" onChange={collect} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
