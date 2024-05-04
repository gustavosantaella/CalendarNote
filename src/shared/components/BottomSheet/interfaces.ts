import {PropsWithChildren, RefObject} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

export interface BottomSheetProps extends PropsWithChildren {
  bottomSheetRef: RefObject<BottomSheet>;
  handleSheetChanges?: (index: number) => void;
  snapPoints?: string[];
}
