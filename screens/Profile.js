import React from 'react'
import { Container, Content, Root, Text, View, Header, Thumbnail } from 'native-base'
import { FontAwesome5, Fontisto, Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FlatList } from 'react-native'

const Data = [
    { id: '1', name: 'highlight', pic: 'https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/69274007_370899453812208_1781072654120830218_n.jpg?_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=CqDjBRQKNaEAX_HXGO3&tp=1&oh=917687d697c2d0f5bce619f0f70dfe9b&oe=60264842' },
    { id: '2', name: 'baai', pic: 'https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/39398530_319284471982976_6785961818448723968_n.jpg?_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=eEE8fm0PpgsAX_3yYjc&tp=1&oh=f671c669b16454bd5397beb0d1941722&oe=60263D8D' },
    { id: '3', name: 'cube', pic: 'https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.186.480.480a/s150x150/67288528_2268533966598789_425631773838517986_n.jpg?_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=XoAWEvKdjuYAX-kyFOY&tp=1&oh=d994935208f99baacd6db050499468e8&oe=602636BE' },
    { id: '4', name: 'vr mall', pic: 'https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/66814258_691678461283632_6438632468869261323_n.jpg?_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=z95ZqZBYS_kAX8xCcAw&tp=1&oh=734496b73ff22a608679ca21e45bac2a&oe=60262EFB' },
    { id: '5', name: 'farewell', pic: 'https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/53152936_2212031745714529_4032031759005633400_n.jpg?_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=K6pbERFTTwIAX9rY6HI&tp=1&oh=82dd1963b527672f8d1d092e4c4e6a2f&oe=60262634' },
    { id: '6', name: 'vjs anna', pic: 'https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.419.1081.1081a/s150x150/54457856_2220347218217048_2916427056896183277_n.jpg?_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=YA2EnhXWTNwAX_IiTdW&tp=1&oh=89ac59ad20065f7e8a48616c5965ec04&oe=6025CA7D' },
    { id: '7', name: 'ooty', pic: 'https://instagram.fmaa11-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/52739851_796320114061616_7547831543614253669_n.jpg?_nc_ht=instagram.fmaa11-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=LTJHfsZbd0EAX_Ff_IS&tp=1&oh=663525f5c24fb66e035c674d19b6b376&oe=6025FFD1' }
];

const Tab = createMaterialTopTabNavigator();

const PostScreen = () => {
    return (
        <View>
            <Text>No post available</Text>
        </View>
    )
}

const TagScreen = () => {
    return (
        <View>

            <Text>No Tags available</Text>
        </View>
    )
}

const ReelScreen = () => {
    return (
        <View>
            <Text>No Reels available</Text>
        </View>
    )
}

const IgtvScreen = () => {
    return (
        <View>

            <Text>No TIgtv available</Text>
        </View>
    )
}

const highlight = ({ item }) => {
    return (
        <View style={{ margin: 5, justifyContent: 'center' }}>
            <Thumbnail circular large source={{ uri: item.pic }} style={{ borderWidth: 1, borderRadius: 50, borderColor: 'gray', padding: 20 }} />
            <Text style={{ textAlign: 'center' }}>{item.name}</Text>
        </View>
    )
}

export default function Profile() {
    return (
        <Root>
            <Container>
                <Header style={{ backgroundColor: 'white' }}>
                    <View style={{ flex: 1, flexDirection: 'row', margin: 10, marginHorizontal: 1, fontWeight: 'bold', justifyContent: 'space-between' }}>
                        <Ionicons name="ios-lock-closed-outline" size={28} color="black" style={{ fontWeight: '500' }} />
                        <Text style={{ fontWeight: 'bold', fontSize: 22 }}>_call_me_uv</Text>
                        <Ionicons name="md-chevron-down" size={24} color="black" style={{ fontWeight: '500', padding: 5 }} />
                        <Fontisto name="plus-a" size={26} color="black" style={{ fontWeight: '500', marginLeft: 100, marginTop: 5 }} />
                        <Ionicons name="menu" size={35} color="black" style={{ marginLeft: 20 }} />
                    </View>
                </Header>
                <Content>
                    {/* DEtails */}
                    <View style={{ flex: 1, flexDirection: 'row', margin: 15, justifyContent: 'space-around' }} >
                        <Thumbnail source={{ uri: "https://www.cricbuzz.com/a/img/v1/152x152/i1/c180290/michael-hussey.jpg" }} style={{ height: 100, width: 100, borderRadius: 50 }} />
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginLeft: 10 }}>28</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Posts</Text>
                        </View>
                        <View style={{ justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginLeft: 10 }}>446</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Followers</Text>
                        </View>
                        <View style={{ justifyContent: 'center', }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 5, marginLeft: 10 }}>218</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', }}>Following</Text>
                        </View>
                    </View>
                    {/* Bio */}
                    <View style={{ margin: 5 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 21, color: 'gray' }}> Y U V I  </Text>
                        <Text numberOfLines={4} lineBreakMode='tail' style={{ width: 200 }}>
                            ℍ𝕒𝕜𝕜𝕦𝕟𝕒𝕄𝕒𝕥𝕒𝕥𝕒
                            🎀2111🎀
                            Ⓒⓡⓘⓒⓚⓔⓣ🏏
                            𝔈𝔵 #𝒶𝓂𝒿𝒸🎓,#𝓋𝒸𝒽𝓈𝓈🎒
                            🅒🅔🅖 🅘🅐🅝,𝒜𝓃𝓃𝒶 𝒰𝓃𝒾𝓋𝑒𝓇𝓈𝒾𝓉𝓎
                            𝕌𝟙 𝕒𝕕𝕕𝕚𝕔𝕥🎧
                            ℭ𝔞𝔭𝔱𝔞𝔦𝔫𝔄𝔪𝔢𝔯𝔦𝔠𝔞🔥
                            ꪜ​ꪖ​ᦔ​ꪖ​ᥴ​ꫝ​ꫀ​ꪀ​ꪀ​ꪖ​𝓲​𝓽​ꫀ​🔥

                        </Text>
                    </View>

                    {/* Highlights */}
                    <View style={{ margin: 10 }}>
                        <FlatList
                            horizontal={true}
                            data={Data}
                            renderItem={highlight}
                            keyExtractor={item => item.id}
                        />
                    </View>
                    {/* Post */}
                    <View>
                        <Tab.Navigator
                            activeColor="black"
                            inactiveColor="gray"
                            showIcon="true"
                            barStyle={{ backgroundColor: 'white', paddingBottom: 10 }}
                        >
                            <Tab.Screen name="Post" component={PostScreen}
                                options={{
                                    tabBarLabel: 'Post',
                                    tabBarIcon: ({ color }) => (
                                        <FontAwesome5 name="user" size={24} color="black" style={{ borderRadius: 1, borderWidth: 3 }} />
                                    ),
                                }} />
                            <Tab.Screen name="Igtv" component={IgtvScreen}
                                options={{
                                    tabBarLabel: 'Igtv',
                                    tabBarIcon: ({ color }) => (
                                        <FontAwesome5 name="user" size={24} color="black" style={{ borderRadius: 1, borderWidth: 3 }} />
                                    ),
                                }} />
                            <Tab.Screen name="Reel" component={ReelScreen}
                                options={{
                                    tabBarLabel: 'Reel',
                                    tabBarIcon: ({ color }) => (
                                        <FontAwesome5 name="user" size={24} color="black" style={{ borderRadius: 1, borderWidth: 3 }} />
                                    ),
                                }} />
                            <Tab.Screen name="Tag" component={TagScreen}
                                options={{
                                    tabBarLabel: 'Tag',
                                    tabBarIcon: ({ color }) => (
                                        <FontAwesome5 name="user" size={24} color="black" style={{ borderRadius: 1, borderWidth: 3 }} />
                                    ),
                                }} />
                        </Tab.Navigator>
                    </View>
                </Content>
            </Container>
        </Root>
    )
}
