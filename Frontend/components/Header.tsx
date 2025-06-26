import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Heart } from 'lucide-react-native';

export default function Header() {
  return (
    <LinearGradient
      colors={['#5B6EFB', '#6366F1']}
      style={styles.container}
    >
      <View style={styles.content}>
        <View style={styles.titleRow}>
          <Heart color="white" size={24} />
          <Text style={styles.title}>Smart HealthMate</Text>
        </View>
        <Text style={styles.subtitle}>
          Your AI-Powered Medicine & Health Tracking Companion
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 24,
    paddingHorizontal: 24,
    
  },
  content: {
    alignItems: 'flex-start',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: 14,
  },
});