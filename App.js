import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';

export default class extends React.Component {
    state = {
        isLoading: true,
    };
    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync();
            // console.log(response);
            const {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync();
            this.setState({ isLoading: false });
        } catch (e) {
            Alert.alert('너를 찾을수 없습니다');
        }
    };

    componentDidMount() {
        this.getLocation();
    }

    render() {
        const { isLoading } = this.state;
        return isLoading ? <Loading /> : null;
    }
}
