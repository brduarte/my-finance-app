import React, {createContext, useContext, useRef, useState} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';
import {Text} from 'react-native';

type IBottomSheetContext = {
  open: () => void;
  close: () => void;
  getRef: () => React.Ref<BottomSheet>;
  setChildren: (children: React.JSX.Element) => void;
  getChildren: () => React.JSX.Element;
};

const BottomSheetContext = createContext<IBottomSheetContext>(
  {} as IBottomSheetContext,
);

type IBottomSheetProvider = {
  children: any;
};

export function BottomSheetProvider({children}: IBottomSheetProvider) {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [content, setContent] = useState<React.JSX.Element>(
    <Text>Any text</Text>,
  );

  function open() {
    bottomSheetRef.current?.expand();
  }

  function close() {
    bottomSheetRef.current?.close();
  }

  function getRef() {
    return bottomSheetRef;
  }

  function setChildren(element: React.JSX.Element) {
    setContent(element);
  }

  function getChildren(): React.JSX.Element {
    return content;
  }

  return (
    <BottomSheetContext.Provider
      value={{open, close, getRef, setChildren, getChildren}}>
      {children}
    </BottomSheetContext.Provider>
  );
}

export function useBottomSheet() {
  return useContext(BottomSheetContext);
}
