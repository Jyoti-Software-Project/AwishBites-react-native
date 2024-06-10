import React, { useEffect, useRef, useState } from "react";
import { FlatList, Image, ImageBackground, ScrollView, Text, TextInput, TouchableOpacity, View, VirtualizedList } from "react-native";
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import styles from "../../assets/Props/HomeProps";
import myFoodSelect from "../../assets/DemoJson/SecDemoJson.js";
import myCarousel from "../../assets/DemoJson/CarouselImage.js";
import { useDarkMode } from './../../assets/GlobalComponents/IsDarkMode';

const Home = ({ navigation }) => {
    const { darkMode } = useDarkMode();
    const carouselRef = useRef(null);

    const [isFoodTypeFocus, setIsFoodTypeFocus] = useState('1');
    const [isFoodSelectFocus, setIsFoodSelectFocus] = useState('1');
    const [isIconFocus, setIsIconFocus] = useState('home');

    const foodType = require("../../assets/DemoJson/DemoJson.json");
    const foodSelect = myFoodSelect;
    const carouselImage = myCarousel;
    
    const autoChangeSlide = () => {
        if (carouselRef.current) {
            carouselRef.current.snapToNext();
        }
    };

    const handleFoodTypeChange = (id) => {
        setIsFoodTypeFocus(id);
    };

    const handleFoodSelectChange = (id) => {
        setIsFoodSelectFocus(id);
    };

    const handleIconChange = (icon, route) => {
        setIsIconFocus(icon);
        navigation.navigate(route);
    };

    const capitalizeName = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1);
    };
    
    useEffect(() => {
        const timer = setInterval(autoChangeSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <View style={[styles.container, {backgroundColor: darkMode ? "#183153" : "#ffffff"}]}>
            <View style={styles.homeContainer}>
                <ScrollView>
                    <View style={styles.carouselContainer}>
                        <Carousel ref={carouselRef} loop={true} data={carouselImage} sliderWidth={393} itemWidth={393} renderItem={({ item }) => (
                            <ImageBackground style={{width: "100%", height: 220, alignItems: "center", justifyContent: "center"}} source={item.image} resizeMode="cover">
                                <Text style={[styles.title, {fontWeight: "100", color: "#183153"}]}>
                                    Find your{'\n'}<Text style={[styles.title, {fontWeight: "bold", color: "#183153"}]}>Best Food&nbsp;</Text>here
                                </Text>
                            </ImageBackground>
                        )} />
                    </View>
                    <View style={styles.searchContainer}>
                        <View style={styles.searchBox}>
                            <Icon style={styles.icon} name={'search'} size={20} color={darkMode ? "#fdfdfd" : "#303030"} />
                            <TextInput style={styles.searchInput} placeholder="Search food" placeholderTextColor={darkMode ? "#fdfdfd" : "#303030"} />
                        </View>
                        <TouchableOpacity style={styles.button} activeOpacity={0.6}>
                            <Icon name={'retweet'} style={{transform: [{rotate: '-45deg'}]}} size={20} color="#fafafa" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listContainer}>
                        <FlatList data={foodType} horizontal showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => handleFoodTypeChange(item.id)} activeOpacity={1}>
                                    <View style={[styles.foodTypeContainer, {backgroundColor: isFoodTypeFocus === item.id ? "#e60023" : "#c0c0c0"}]}>
                                        <MaterialIcon name={item.icon} size={22} color={isFoodTypeFocus === item.id ? "#ffffff" : "#000000"} />
                                        <Text style={[styles.foodTypeText, {color: isFoodTypeFocus === item.id ? "#ffffff" : "#000000"}]}>{item.food}</Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                            keyExtractor={(key) => {
                                return key.id;
                            }}
                        />
                    </View>
                    <View style={styles.listContainer}>
                        <VirtualizedList data={foodSelect} horizontal showsHorizontalScrollIndicator={false} getItemCount={(data) => data.length}
                            getItem={(data, index) => data[index]} keyExtractor={(key) => key.id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => handleFoodSelectChange(item.id)} activeOpacity={1}>
                                    <View style={[styles.foodSelectContainer, {backgroundColor: darkMode ? "#afafaf" : "#f0f0f0", height: isFoodSelectFocus ? 280 : 280}]}>
                                        <Image style={styles.foodImage} source={item.image} />
                                        <Text style={[styles.title, {color: darkMode ? "#ffffff" : "#183153"}]}>{item.title}</Text>
                                        <Text style={[styles.name, {color: darkMode ? "#ffffff" : "#183153"}]}>{capitalizeName(item.name)}</Text>
                                        <Text style={[styles.rating, {color: darkMode ? "#ffffff" : "#183153"}]}>
                                            <Icon name="star" size={20} />&nbsp;{item.rating}
                                        </Text>
                                        <Text style={[styles.amount]}>
                                            <Icon name="dollar" size={20} />&nbsp;{item.amount}
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                </ScrollView>
            </View>
            <View style={[styles.footerContainer, {backgroundColor: darkMode ? "#00000080" : "#b0b0b080"}]}>
                <TouchableOpacity onPress={() => handleIconChange('home', 'Home')} activeOpacity={0.6}>
                    <MaterialIcon name={'home'} size={32} color={isIconFocus === 'home' ? '#e60023' : '#a0a0a0'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleIconChange('favorite', 'Favorite')} activeOpacity={0.6}>
                    <MaterialIcon name={'favorite'} size={32} color={isIconFocus === 'favorite' ? '#e60023' : '#a0a0a0'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleIconChange('shopping-cart', 'Cart')} activeOpacity={0.6}>
                    <MaterialIcon name={'shopping-cart'} size={32} color={isIconFocus === 'shopping-cart' ? '#e60023' : '#a0a0a0'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleIconChange('notifications', 'Notification')} activeOpacity={0.6}>
                    <MaterialIcon name={'notifications'} size={32} color={isIconFocus === 'notifications' ? '#e60023' : '#a0a0a0'} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handleIconChange('person', 'Profile')} activeOpacity={0.6}>
                    <MaterialIcon name={'person'} size={32} color={isIconFocus === 'person' ? '#e60023' : '#a0a0a0'} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default Home;