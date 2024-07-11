import React from 'react';

import {useBottomSheet} from '../../contexts/BottomSheetContext.tsx';
import {Layout} from './Layout.tsx';

export function ModalSheet() {
  const bottomSheet = useBottomSheet();
  const bottomSheetRef = bottomSheet.getRef();

  return (
    <Layout bottomSheetRef={bottomSheetRef}>{bottomSheet.getChildren()}</Layout>
  );
}
