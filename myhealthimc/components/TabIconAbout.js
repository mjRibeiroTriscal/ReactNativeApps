import * as React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIconAbout(props) {
  return (
    <MaterialIcons
      name={props.name}
      size={props.size}
      style={{ marginBottom: -10 }}
      color={props.focused ? Colors.tabIconSelectedInfo : Colors.tabIconDefault}
    />
  );
}
