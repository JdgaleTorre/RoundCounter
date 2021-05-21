import React, {
  useContext,
  createContext,
  useState,
  useEffect,
  useMemo,
} from 'react';

//Context
export const AppContext = createContext(null);

//Provider
export const AppContextProvider = ({ children }) => {
  const [context, setContext] = useState({
    selected: { project: '', start: 0, end: 10, increment: 1 },
    listProjects: [],
  });

  //ComponentDidMouunt
  useEffect(() => {}, []);

  //
  const values = useMemo(
    () => ({
      context, // States que seran visibles en el contexto.
      setContext, // Funciones que son exportadas para manejo externo.
    }),
    [context]
  ); // States que serán visibles en el contexto.

  // Interface donde será expuesto como proveedor y envolverá la App.
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

//
export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    console.error('Error deploying App Context!!!');
  }

  return context;
}

export default useAppContext;
