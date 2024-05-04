import React, {useMemo} from 'react';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {BottomSheetProps} from './interfaces';

export default function ({
  bottomSheetRef,
  handleSheetChanges,
  snapPoints,
  children,
}: BottomSheetProps) {
  const points = snapPoints ?? useMemo(() => ['1%', '30%'], []);
  return (
    <BottomSheet
      ref={bottomSheetRef}
      onChange={handleSheetChanges}
      snapPoints={points}>
      <BottomSheetView>{children}</BottomSheetView>
    </BottomSheet>
  );
}
