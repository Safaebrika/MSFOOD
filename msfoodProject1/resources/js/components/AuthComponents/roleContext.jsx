import { createContext } from 'react';

const RoleContext = createContext({
  role: '',
  setRole: () => {}, // Fonction vide par défaut
});

export default RoleContext;
