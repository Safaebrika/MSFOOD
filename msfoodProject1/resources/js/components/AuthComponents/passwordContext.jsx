import { createContext } from 'react';

const PasswordContext = createContext({
  expectedPassword: '',
});

export default PasswordContext;
