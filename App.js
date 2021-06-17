import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import { API_KEY } from './Api';
import axios from 'axios';
import Weather from './Weather';
export default class extends React.Component {
    state = {
        isLoading: true,
    };
    getWeather = async (latitude, longitude) => {
        const {
            data: {
                main: { temp },
                weather,
            },
        } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
        this.setState({
            isLoading: false,
            temp,
            condition: weather[0].main,
        });
        // console.log(data);
    };
    getLocation = async () => {
        try {
            await Location.requestPermissionsAsync();
            const {
                coords: { latitude, longitude },
            } = await Location.getCurrentPositionAsync();
            this.getWeather(latitude, longitude);
            // this.setState({ isLoading: false });
        } catch (e) {
            Alert.alert('너를 찾을수 없습니다');
        }
    };

    componentDidMount() {
        this.getLocation();
    }

    render() {
        const { isLoading, temp, condition } = this.state;
        return isLoading ? (
            <Loading />
        ) : (
            <Weather temp={Math.round(temp)} condition={condition} />
        );
    }
}
