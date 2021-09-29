import React from 'react'
import { Text, View, Header, Container, Content } from 'native-base'
import { Feather, Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';

const Tab = createMaterialTopTabNavigator();

const ChatScreen = () => {
    return (
        <View>
            <Text>Chat</Text>
        </View>
    )
}

const RoomScreen = () => {
    return (
        <View>
            <Text>Chat</Text>
        </View>
    )
}

const ActiveScreen = () => {
    return (
        <View>
            <Text>Chat</Text>
        </View>
    )
}

export default function Dmsg({ navigation }) {
    return (

        <Container>
            <Header style={{ backgroundColor: 'white' }} name='fadeInLeft' duration={1000}>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <TouchableNativeFeedback onPress={() => { navigation.goBack() }}>
                        <Ionicons name="arrow-back" size={25} color="black" style={{ margin: 3, marginHorizontal: 5 }} />
                    </TouchableNativeFeedback>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>_call_me_uv</Text>
                    <Feather name="video" size={28} color="black" style={{ marginHorizontal: 18, marginLeft: 160 }} />
                    <Feather name="edit" size={28} color="black" style={{ marginLeft: 18 }} />
                </View>
            </Header>
            <Content>
                <View name=''>
                    <Tab.Navigator
                        barStyle={{ backgroundColor: 'white', paddingBottom: 10 }}
                    >
                        <Tab.Screen name="Chat" component={ChatScreen} />
                        <Tab.Screen name="Active" component={ActiveScreen} />
                        <Tab.Screen name="Rooms" component={RoomScreen}
                            options={{
                                tabBarLabel: 'Rooms',
                                tabBarIcon: ({ color }) => (
                                    <FontAwesome5 name="user" size={24} color="black" style={{ borderRadius: 1, borderWidth: 3 }} />
                                ),
                            }} />
                    </Tab.Navigator>
                </View>
            </Content>
        </Container>

    )
}