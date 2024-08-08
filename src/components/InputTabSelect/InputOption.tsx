import React, {useState} from 'react';

import {InputTabSelect, TabButtonType} from './InputTabSelect.tsx';

export enum CustomTab {
  Tab1,
  Tab2,
}

export function InputOption(): React.JSX.Element {
  const [selectTab, setSelectTab] = useState<CustomTab>(CustomTab.Tab2);

  const buttons: TabButtonType[] = [
    {title: 'Tab1', value: 1},
    {title: 'Tab2', value: 2},
  ];

  return (
    <InputTabSelect
      buttons={buttons}
      selectedTab={selectTab}
      setSelectedTab={setSelectTab}
    />
  );
}
