import React, { useState, useEffect } from 'react'
import { Root, Container, Content, Left, Right, Header, Text, View, Thumbnail } from 'native-base'
import { Entypo, Feather, FontAwesome5, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { FlatList, Animated } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
import { StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator();

const DATA = [
    {
        id: '1', name: 'yuvi2111',
        dpLink: 'https://images.firstpost.com/wp-content/uploads/large_file_plugin/2020/08/1597376897_chrisevansF.jpg?impolicy=website&width=640&height=363',
        post: 'https://static2.srcdn.com/wordpress/wp-content/uploads/2019/11/Captain-America-with-Mjolnir-in-Avengers-Endgame.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5',
        views: 121, quotes: 'I can do this all day',
        liked: true
    },
    {
        id: '2', name: 'yuvi2111',
        dpLink: 'https://images.firstpost.com/wp-content/uploads/large_file_plugin/2020/08/1597376897_chrisevansF.jpg?impolicy=website&width=640&height=363',
        post: 'https://resizing.flixster.com/_LYhssjpzEl6rKJURXaqwHUOFPY=/206x305/v2/https://flxt.tmsimg.com/assets/p170620_p_v10_an.jpg',
        views: 111, quotes: 'Love u 3000', liked: false
    },
];

const AICon = Animatable.createAnimatableComponent(AntDesign)
const BounceHeart = Animated.createAnimatedComponent(AntDesign)

export default function Profile({ navigation }) {

    const [liked, setLiked] = useState(false)
    const [visible, setvisible] = useState(false)

    const currentValue = new Animated.Value(1)

    const changeLiked = () => {
        setLiked(!liked)
        if (!liked) {
            setvisible(true)
        }

    }



    useEffect(() => {
        if (liked) {
            Animated.spring(currentValue, {
                toValue: 2,
                friction: 2
            }).start(() => {
                Animated.spring(currentValue, {
                    toValue: 1
                }).start(() => setvisible(false))
            })
        }
    }, [liked])

    const renderItem = ({ item }) => (
        <View style={{ elevation: 10 }}>
            <View style={{ flex: 1, flexDirection: 'row', margin: 10 }}>
                <Thumbnail circular small source={{ uri: item.dpLink }} style={{ padding: 10, margin: 10, marginBottom: 0 }} />
                <Text style={{ marginTop: 12, fontSize: 17, fontWeight: 'bold' }}>
                    {item.name}
                </Text>
                <Right>
                    <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
                </Right>

            </View>
            <View>

                <TouchableNativeFeedback onPress={changeLiked}>
                    {visible &&
                        <BounceHeart name='heart' color='white' size={55}
                            style={{
                                position: 'absolute',
                                top: 190, left: 175,
                                zIndex: 2,
                                borderRadius: 160,
                                elevation: 4,
                                transform: [
                                    { scale: currentValue }
                                ]
                            }}
                        />
                    }
                    <Thumbnail square source={{ uri: item.post }} style={{ height: 380, width: "100%" }} />
                </TouchableNativeFeedback>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={changeLiked}>
                        <AICon size={28} color="black"
                            name={liked ? 'heart' : 'hearto'}
                            color={liked ? 'red' : 'black'}
                            duration={1000}
                            animation={liked ? 'bounce' : ''}
                            style={{
                                margin: 5, marginHorizontal: 10,
                                paddingHorizontal: 10,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}
                        />
                    </TouchableOpacity>
                    <FontAwesome5 name="comment" size={28} color="black" style={{ margin: 5, marginHorizontal: 10 }} />
                    <Feather name="send" size={28} color="black" style={{ margin: 5, marginHorizontal: 10 }} />
                    <Right>
                        <Feather name="bookmark" size={28} color="black" style={{ marginRight: 10 }} />
                    </Right>
                </View>


                <View style={{ flexDirection: 'row', margin: 3, marginBottom: 1 }}>
                    <Text style={{ fontWeight: 'bold', marginLeft: 5 }}>{item.views}</Text>
                    <Text> Liked by </Text>
                    <Text style={{ fontWeight: 'bold' }}> yuvi </Text>
                    <Text> and others</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 5 }}>
                    <Text style={{ fontWeight: 'bold', marginLeft: 10, marginRight: 10 }}>
                        {item.name}
                    </Text>
                    <Text>{item.quotes}</Text>
                </View>
            </View>
        </View>

    );

    return (
        <Root>

            <StatusBar barStyle='dark-content' backgroundColor='white' />
            <Container>

                <Header style={{ backgroundColor: "white" }}>
                    <Left>
                        <TouchableOpacity onPress={() => { navigation.navigate('Cam') }} >
                            <Entypo name="squared-plus" size={26} color="black" />
                        </TouchableOpacity>
                    </Left>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 70 }}>
                        <Text style={{ fontWeight: '700', fontSize: 25, fontFamily: 'monospace' }}>Instagram</Text>
                    </View>
                    <Right>
                        <TouchableOpacity onPress={() => { navigation.push('Dmsg') }}>
                            <MaterialCommunityIcons name="facebook-messenger" size={26} color="black" />
                        </TouchableOpacity>
                    </Right>
                </Header>

                <Content>
                    <View>
                        <Thumbnail circular large source={{ uri: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c180290/michael-hussey.jpg" }} style={{ padding: 10, margin: 10, marginBottom: 0, borderColor: "#E4007D", borderWidth: 2, }} />
                    </View>

                    <Text color="black" size={10} style={{ marginLeft: 14 }}>Your story</Text>

                    <View>
                        <FlatList
                            data={DATA}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                        />
                    </View>

                </Content>
            </Container>
        </Root>
    )
}