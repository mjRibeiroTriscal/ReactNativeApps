import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import TabBarIcon from '../components/TabBarIcon';
import TabIconAbout from '../components/TabIconAbout';
import ScreenTitle from '../components/ScreenTitle';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
	navigation.setOptions({ headerTitle: getHeaderTitle(route) });

	return (
		<BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
			<BottomTab.Screen
				name="Home"
				component={HomeScreen}
				options={{
					title: '',
					tabBarIcon: ({ focused }) => <TabBarIcon size={35} focused={focused} name="food-apple" />,
				}}
			/>
			<BottomTab.Screen
				name="About"
				component={AboutScreen}
				options={{
					title: '',
					tabBarIcon: ({ focused }) => <TabIconAbout size={35} focused={focused} name="info-outline" />,
				}}
			/>
		</BottomTab.Navigator>
	);
}

function getHeaderTitle(route) {
	const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

	switch (routeName) {
		case 'Home':
			return <ScreenTitle screen='Home' />
		case 'About':
			return <ScreenTitle screen='About' />
	}
}
