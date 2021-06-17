import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
    Haze: {
        iconName: 'weather-hail',
        gradient: ['#7b4397', '#dc2430'],
        title: '날씨가 좋습니다',
        subtitle: '날씨가 좋답니다',
    },
    Atmosphere: {
        iconName: 'weather-hail',
        gradient: ['#8e9eab', '#eef2f3'],
        title: '날씨가 좋습니다',
        subtitle: '날씨가 좋답니다',
    },
    Snow: {
        iconName: 'weather-snowy',
        gradient: ['#136a8a', '#267871'],
        title: '날씨가 좋습니다',
        subtitle: '날씨가 좋답니다',
    },
    Clear: {
        iconName: 'weather-sunny',
        gradient: ['#FEAC5E', '#7b4397'],
        title: '날씨가 아주 좋아요',
        subtitle: '날씨가 좋답니다',
    },
    Clouds: {
        iconName: 'weather-cloudy',
        gradient: ['#ff0084', '#33001b'],
        title: '날씨가 좋습니다',
        subtitle: '날씨가 좋답니다',
    },
    Mist: {
        iconName: 'weather-hail',
        gradient: ['#833ab4', '#fd1d1d'],
        title: '날씨가 좋습니다',
        subtitle: '날씨가 좋답니다',
    },
    Dust: {
        iconName: 'weather-hail',
        gradient: ['#FEAC5E', '#C779D0'],
        title: '날씨가 좋습니다',
        subtitle: '날씨가 좋답니다',
    },
    Thunderstorm: {
        iconName: 'weather-hail',
        gradient: ['#2a0845', '#6441A5'],
        title: '날씨가 좋습니다',
        subtitle: '날씨가 좋답니다',
    },
    Drizzle: {
        iconName: 'weather-hail',
        gradient: ['#ffb347', '#ffcc33'],
        title: '날씨가 좋습니다',
        subtitle: '날씨가 좋답니다',
    },
    Rain: {
        iconName: 'weather-rainy',
        gradient: ['#7b4397', '#dc2430'],
        title: '날씨가 좋습니다',
        subtitle: '날씨가 좋답니다',
    },
};

export default function Weather({ temp, condition }) {
    return (
        // <View style={styles.container}>
        <LinearGradient
            style={styles.container}
            colors={weatherOptions[condition].gradient}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons
                    name={weatherOptions[condition].iconName}
                    size={96}
                    style={{ color: 'white' }}
                />
                <Text style={styles.temp}>{temp}도</Text>
            </View>

            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>
                    {weatherOptions[condition].title}
                </Text>
                <Text style={styles.subtitle}>
                    {weatherOptions[condition].subtitle}
                </Text>
            </View>
        </LinearGradient>
        // </View>
    );
}
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        'Thunderstorm,Drizzle',
        'Rain',
        'Snow',
        'Atmosphere',
        'Clear',
        'Clouds',
        'Haze',
        'Mist',
        'Dust',
    ]).isRequired,
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 42,
        color: 'white',
    },
    halfContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: 'white',
        fontSize: 44,
        fontWeight: '300',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    },
    textContainer: {
        paddingHorizontal: 30,
        alignItems: 'flex-start',
    },
});
