import React, {useCallback, useMemo} from 'react';
import {styles} from './style.js';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

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

  const snapPoints = useMemo(() => ['25%'], []);

  return (
    <BottomSheet
      style={styles.container}
      ref={bottomSheetRef}
      index={0}
      enableDynamicSizing={true}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}>
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheet>
  );
}
