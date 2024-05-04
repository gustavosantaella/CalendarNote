import React, {useRef} from 'react';
import {Calendar} from 'react-native-calendars';
import {Button, Text} from 'react-native-paper';
import BottomSheet from '../../shared/components/BottomSheet';
import {BottomSheetMethods} from '@gorhom/bottom-sheet/lib/typescript/types';

export default function () {
  const bottomSheetRef = useRef<BottomSheetMethods>(null);

  // callbacks

  return (
    <>
      <Calendar
        onDayPress={range => console.log(range)}
        startDate={new Date(2018, 3, 30)}
      />
      <Button mode="contained" onPress={() => bottomSheetRef.current?.expand()}>
        Press me
      </Button>

      <BottomSheet bottomSheetRef={bottomSheetRef}>
        <Text>hola</Text>
      </BottomSheet>
    </>
  );
}
