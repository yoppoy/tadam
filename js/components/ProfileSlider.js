import React, {useState} from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {View, Text, Dimensions} from 'react-native';

const Profile = profile => {
    return (
        <View>
            <Text>{profile.data.firstname} - {profile.data.lastname}</Text>
        </View>
    );
};

export default function ProfileSlider() {
    const [state, setState] = useState({
        entries: PROFILES,
        activeSlide: 1,
        paginationIndex: 1,
    });
    console.log(state.paginationIndex);
    const renderItem = ({item, index}) => {
        return <Profile data={item} />;
    };

    const pagination = () => {
        const {entries, paginationIndex} = state;
        return (
            <Pagination
                dotsLength={entries.length < 5 ? entries.length : 5}
                activeDotIndex={paginationIndex % 5}
                containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: 'red',
                }}
                inactiveDotStyle={{}}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    };

    return (
        <View style={{flex: 1}}>
            <Carousel
                data={state.entries}
                renderItem={renderItem}
                sliderWidth={Dimensions.get('window').width}
                windowSize={Dimensions.get('window').width}
                itemWidth={60}
                initialNumToRender={6}
                onBeforeSnapToItem={index => {
                    console.log('about to snap baby ', index);
                    setState({...state, pagzinationIndex: index});
                }}
                onSnapToItem={index => setState({...state, activeSlide: index, paginationIndex: index})}
            />
            {pagination()}
        </View>
    );
}

const PROFILES = [
    {
        firstname: 'john',
        lastname: 'smith',
    },
    {
        firstname: 'john',
        lastname: 'deckner',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'smith',
    },
    {
        firstname: 'john',
        lastname: 'deckner',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'smith',
    },
    {
        firstname: 'john',
        lastname: 'deckner',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'smith',
    },
    {
        firstname: 'john',
        lastname: 'deckner',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'smith',
    },
    {
        firstname: 'john',
        lastname: 'deckner',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'smith',
    },
    {
        firstname: 'john',
        lastname: 'deckner',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    }, {
        firstname: 'john',
        lastname: 'smith',
    },
    {
        firstname: 'john',
        lastname: 'deckner',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'smith',
    },
    {
        firstname: 'john',
        lastname: 'deckner',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },
    {
        firstname: 'john',
        lastname: 'flicker',
    },

];
