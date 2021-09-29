import React, { useState } from 'react'
import { Container, Content, Root, Text, View } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { StatusBar, TextInput, FlatList } from 'react-native'
import { Icon } from 'react-native-elements'

const Data = [
    { id: '1', cat: 'IGTV' },
    { id: '2', cat: 'Travel' },
    { id: '3', cat: 'Food' },
    { id: '4', cat: 'Style' },
    { id: '5', cat: 'Art' },
    { id: '6', cat: 'Beauty' },
    { id: '7', cat: 'Music' },
    { id: '8', cat: 'Tv' },
    { id: '9', cat: 'Movies' },
    { id: '10', cat: 'sports' },
]


export default function Search() {
    const [Val, setVal] = useState('');

    const renderItem = ({ item }) => (
        <Text style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 10, margin: 5, fontSize: 18, padding: 3, paddingLeft: 10, width: 80 }}>{item.cat}</Text>
    )

    return (
        <Root>
            <StatusBar barStyle='dark-content' backgroundColor='white' />
            <Container>
                <Content>

                    <View style={{
                        flex: 1,
                        margin: 10, marginBottom: 0,
                        flexDirection: 'row',
                    }}>
                        <View style={{
                            flexDirection: 'row',
                            backgroundColor: '#e8e8e8',
                            height: 40,
                            borderRadius: 5,

                        }}>

                            <Icon name='search' style={{ flex: 1, alignItems: 'center', padding: 10, }} color='gray' />
                            <TextInput keyboardAppearance='dark' keyboardType='web-search' textContentType='name'
                                onChangeText={Val => setVal(Val)}
                                defaultValue={Val}
                                placeholder="search" placeholderTextColor='gray'
                                style={{ marginRight: 30, width: 265, height: 43, borderRadius: 7, fontSize: 18, alignItems: 'center' }}
                            />
                        </View>
                        <MaterialCommunityIcons name="qrcode-scan" size={24} color="black" style={{ margin: 5, marginLeft: 15 }} />

                    </View>

                    <View style={{ margin: 5 }}>
                        <FlatList
                            data={Data}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            horizontal={true}
                        />
                    </View>
                </Content>
            </Container>

        </Root>
    )
}