import React, {useCallback, useMemo, useRef} from 'react';
import {Text} from 'react-native';
import {Calendar} from 'react-native-calendars';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {Button} from 'react-native-paper';

export default function Home() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['1%', '30%'], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  return (
    <>
      <Calendar
        onDayPress={range => console.log(range)}
        startDate={new Date(2018, 3, 30)}
      />
      <Button mode="contained" onPress={() => bottomSheetRef.current?.expand()}>
        Press me
      </Button>
      <BottomSheet
        ref={bottomSheetRef}
        onChange={handleSheetChanges}
        snapPoints={snapPoints}>
        <BottomSheetView>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheet>
    </>
  );
}
