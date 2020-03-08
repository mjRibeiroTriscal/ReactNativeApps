import * as React from 'react';
import { Text } from 'react-native';

export default ScreenTitle = props => {
    switch (props.screen) {
        case 'Home':
            return <Text style={props.style}>Ronaldo (0)</Text>
        case 'About':
            return <Text style={props.style}>Brilha (1)</Text>
    }
}
