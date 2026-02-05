import { createContext, useContext } from "react";

const ScrollRootContext = createContext(null);

export function ScrollRootProvider({ value, children }) {
  return (
    <ScrollRootContext.Provider value={value}>
      {children}
    </ScrollRootContext.Provider>
  );
}

export function useScrollRoot() {
  return useContext(ScrollRootContext);
}
