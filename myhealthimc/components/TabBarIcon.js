import * as React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon(props) {
  return (
    <MaterialCommunityIcons
      name={props.name}
      size={props.size}
      style={{ marginBottom: -10 }}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
