import { useState } from 'react';
import './App.css';
import {
  isPassEasy,
  isPassMedium,
  isPassStrong,
} from './helpers/passwordTests';

function App() {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    let newStrength;
    if (newPassword.length === 0) {
      newStrength = '';
    } else if (newPassword.length >= 8) {
      if (isPassEasy(newPassword)) newStrength = 'easy';

      if (isPassMedium(newPassword)) newStrength = 'medium';

      if (isPassStrong(newPassword)) newStrength = 'strong';
    } else {
      newStrength = 'short';
    }

    setStrength(newStrength);
  };

  return (
    <div className='wrapper'>
      <div className='container'>
        <input
          className='passwordInput'
          placeholder='Password'
          type='text'
          value={password}
          onChange={handleChange}
        />
        <div className='strengthBars'>
          <div
            className='strengthBar'
            style={{
              backgroundColor:
                strength === ''
                  ? 'gray'
                  : strength === 'short'
                  ? 'red'
                  : strength === 'medium'
                  ? 'yellow'
                  : strength === 'strong'
                  ? 'green'
                  : 'red',
            }}></div>
          <div
            className='strengthBar'
            style={{
              backgroundColor:
                strength === ''
                  ? 'gray'
                  : strength === 'easy'
                  ? 'gray'
                  : strength === 'medium'
                  ? 'yellow'
                  : strength === 'strong'
                  ? 'green'
                  : 'red',
            }}></div>
          <div
            className='strengthBar'
            style={{
              backgroundColor:
                strength === 'short'
                  ? 'red'
                  : strength === 'strong'
                  ? 'green'
                  : 'gray',
            }}></div>
          <p>{strength || 'Empty'}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
