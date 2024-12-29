import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ItemCard({ item }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.carImage} />

      <View style={styles.detailsContainer}>
        <Text style={styles.title}>
          {item.make} {item.model} ({item.year})
        </Text>
        <Text style={styles.subtitle}>
          {item.mileage} miles · {item.fuelType} · {item.transmission}
        </Text>
        <Text style={styles.price}>${item.price.toLocaleString()}</Text>

        <Text style={styles.features}>
          Features: {item.features.join(', ')}
        </Text>
        <Text style={styles.owners}>Previous Owners: {item.owners}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    elevation: 3, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: '90%',
    alignSelf: 'center',
  },
  carImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  detailsContainer: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 10,
  },
  features: {
    fontSize: 14,
    color: '#777',
    marginBottom: 5,
  },
  owners: {
    fontSize: 14,
    color: '#999',
  },
});
