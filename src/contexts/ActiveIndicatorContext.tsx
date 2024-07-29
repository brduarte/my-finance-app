import React, {createContext, ReactNode, useContext, useState} from 'react';

type IActiveIndicatorContext = {
  active: () => boolean;
  isActive: () => boolean;
  disabled: () => boolean;
};

type ActiveIndicatorContextProps = {
  children?: ReactNode | undefined;
};

const ActiveIndicatorContext = createContext<IActiveIndicatorContext>(
  {} as IActiveIndicatorContext,
);

export function ActiveIndicatorProvider({
  children,
}: ActiveIndicatorContextProps): React.JSX.Element {
  const [activeState, setActiveState] = useState<boolean>(false);

  function active() {
    setActiveState(true);
    return true;
  }

  function isActive() {
    return activeState;
  }

  function disabled() {
    setActiveState(false);
    return false;
  }

  return (
    <ActiveIndicatorContext.Provider value={{active, isActive, disabled}}>
      {children}
    </ActiveIndicatorContext.Provider>
  );
}

export function useActiveIndicator() {
  return useContext(ActiveIndicatorContext);
}
