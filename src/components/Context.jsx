import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext();

export function ContextProvider({ children }) {
  const [reglageAlarmeHeure, setReglageAlarmeHeure] = useState(0);
  const [reglageAlarmeMinute, setReglageAlarmeMinute] = useState(0);
  const [cadreAlarme, setCadreAlarme] = useState(false);

  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [heure, setHeure] = useState(0);

  return (
    <ThemeContext.Provider
      value={{
        second,
        setSecond,
        minute,
        setMinute,
        heure,
        setHeure,
        reglageAlarmeHeure,
        setReglageAlarmeHeure,
        reglageAlarmeMinute,
        setReglageAlarmeMinute,
        cadreAlarme,
        setCadreAlarme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.object,
};

export const MyContext = () => useContext(ThemeContext);
