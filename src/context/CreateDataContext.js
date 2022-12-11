/**
 @param defaultValue = default state exp , [] ''
 @param reducer = ala cu switch=ul , sa treci prin fiecare
 @actions astea sunt functiile si trebuie date call cu dispatch
 @ContextProvider react component ce face ca datele sa fie disponibile pentru toate componentele children
 @Provider componente ce face ca toate datele sa fie accesate in toata aplicatia 
 @Context un obiect pe care il folosim sa accesam informatia din unul dintre screenuri
 */

import React, { useReducer } from "react";

export default (reducer, actions, defaultValue) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch); // aici luam fiecare funtie in parte si o parcurgem
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
