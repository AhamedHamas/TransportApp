import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Text, ImageBackground, TouchableOpacity } from 'react-native';
import ItemCard from '../Components/ItemCard'; 
import { useClickCount } from '../ClickCountContext';

const HomeScreen = ({ route }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { username } = route.params;

  const { clickCount, incrementClickCount } = useClickCount();

  const handleItemClick = () => {
    incrementClickCount(); 
  };

  const fetchData = async () => {
    try {
      const response = await fetch('https://freetestapi.com/api/v1/cars?limit=3');
      const json = await response.json();
      setData(json);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>

    <ImageBackground
        source={{ uri: 'https://img.freepik.com/free-vector/car-showroom-center-with-autos-exhibition-inside-automobile-dealership-store-shop-interior-new-modern-vehicles-models-demonstration-sale-trading_575670-1511.jpg?t=st=1735493765~exp=1735497365~hmac=e58fef9c35a0449f944c801779d14f658ccb82a0d080517e442181bda0e79813&w=1060' }} 
        style={styles.banner}
        resizeMode="cover">
        

        <Text style={styles.greeting}>Hello, {username}!</Text>

        <Text style={styles.tagline}>
        Discover the best deals, trusted quality, and unbeatable prices!
        </Text>

    </ImageBackground>

        {
            loading ? (<ActivityIndicator size="large" color="#0000ff" />) : (
                <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={handleItemClick}>
                      <ItemCard item={item} />
                    </TouchableOpacity>
                  )}
                showsVerticalScrollIndicator={false}
                />
            )
        }
        <View style={styles.floatingButtonContainer}>
            <TouchableOpacity style={styles.floatingButton}>
                <Text style={styles.buttonText}>{clickCount}</Text>
            </TouchableOpacity>
        </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 10,
  },
  banner: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    textAlign: 'center'
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  greeting: {
    fontSize: 23,
    fontWeight: '600',
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 10,
  },
  tagline: {
    fontSize: 17,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
    marginTop: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 5,
    borderRadius: 5,
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    zIndex: 1,
  },
  floatingButton: {
    backgroundColor: '#FFD700',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

export default HomeScreen;
