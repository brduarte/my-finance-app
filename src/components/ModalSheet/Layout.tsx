import React, {useCallback, useMemo} from 'react';
import {styles} from './style.js';
import BottomSheet from '@gorhom/bottom-sheet';

export type ModalSheetProps = {
  bottomSheetRef?: React.Ref<BottomSheet>;
  onPress?: () => void;
  children: React.JSX.Element;
};

export function Layout({bottomSheetRef, children}: ModalSheetProps) {
  const handleSheetChanges = useCallback((index: number) => {
    if (index === 0) {
      // @ts-ignore
      bottomSheetRef?.current.close();
    }
  }, []);

  const snapPoints = useMemo(() => ['10%', '25%', '50%'], []);

  return (
    <BottomSheet
      style={styles.container}
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      {children}
    </BottomSheet>
  );
}
