import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface StatsCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  backgroundColor: string;
  onPress?: () => void;
}

export default function StatsCard({ icon, value, label, backgroundColor, onPress }: StatsCardProps) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        <View style={styles.iconRow}>
          {icon}
          <Text style={styles.value}>{value}</Text>
        </View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 4,
    minHeight: 80,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  value: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  label: {
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: 12,
    fontWeight: '500',
  },
});