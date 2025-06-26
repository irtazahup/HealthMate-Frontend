import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Heart, Zap } from 'lucide-react-native';
import { HEALTH_STATS } from '@/constants/stats';

export default function VitalsView() {
  const recentReadings = [
    {
      id: 1,
      type: 'Blood Sugar',
      value: '140',
      unit: 'mg/dL',
      date: '6/25/2025 at 8:30 AM',
      icon: '⚡'
    },
    {
      id: 2,
      type: 'Blood Pressure',
      value: '120/80',
      unit: 'mmHg',
      date: '6/25/2025 at 9:00 AM',
      icon: '❤️'
    }
  ];

  return (
    <View style={styles.sectionContainer}>
      {/* Latest Readings Cards */}
      <View style={styles.vitalsCardsContainer}>
        <View style={styles.vitalCard}>
          <View style={styles.vitalCardHeader}>
            <Heart color="#EF4444" size={24} />
            <Text style={styles.vitalCardTitle}>Blood Pressure</Text>
          </View>
          <Text style={styles.vitalCardSubtitle}>Latest Reading</Text>
          <Text style={styles.vitalCardValue}>
            {HEALTH_STATS.bloodPressure.systolic}/{HEALTH_STATS.bloodPressure.diastolic}
          </Text>
          <View style={styles.vitalCardFooter}>
            <Text style={styles.vitalCardTime}>9:00 AM</Text>
            <View style={styles.vitalCardStatusGreen}>
              <Text style={styles.vitalCardStatusTextGreen}>✓ {HEALTH_STATS.bloodPressure.status}</Text>
            </View>
          </View>
        </View>

        <View style={styles.vitalCard}>
          <View style={styles.vitalCardHeader}>
            <Zap color="#FB923C" size={24} />
            <Text style={styles.vitalCardTitle}>Blood Sugar</Text>
          </View>
          <Text style={styles.vitalCardSubtitle}>Latest Reading</Text>
          <Text style={styles.vitalCardValue}>{HEALTH_STATS.bloodSugar.value}</Text>
          <View style={styles.vitalCardFooter}>
            <Text style={styles.vitalCardTime}>8:30 AM</Text>
            <View style={styles.vitalCardStatusYellow}>
              <Text style={styles.vitalCardStatusTextYellow}>⚠ {HEALTH_STATS.bloodSugar.status}</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Recent Readings */}
      <View style={styles.recentReadingsContainer}>
        <Text style={styles.sectionTitle}>Recent Readings</Text>
        {recentReadings.map((reading) => (
          <View key={reading.id} style={styles.readingCard}>
            <View style={styles.readingHeader}>
              <Text style={styles.readingIcon}>{reading.icon}</Text>
              <Text style={styles.readingType}>{reading.type}</Text>
            </View>
            <View style={styles.readingValue}>
              <Text style={styles.readingValueText}>{reading.value}</Text>
              <Text style={styles.readingUnit}>{reading.unit}</Text>
            </View>
            <Text style={styles.readingDate}>{reading.date}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  vitalsCardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  vitalCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    flex: 1,
    marginRight: 8,
  },
  vitalCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  vitalCardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
    color: '#1F2937',
  },
  vitalCardSubtitle: {
    fontSize: 12,
    color: '#6B7280',
    marginBottom: 4,
  },
  vitalCardValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
  },
  vitalCardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  vitalCardTime: {
    fontSize: 12,
    color: '#6B7280',
  },
  vitalCardStatusGreen: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  vitalCardStatusTextGreen: {
    fontSize: 12,
    color: '#065F46',
    fontWeight: '500',
  },
  vitalCardStatusYellow: {
    backgroundColor: '#FEF3C7',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  vitalCardStatusTextYellow: {
    fontSize: 12,
    color: '#92400E',
    fontWeight: '500',
  },
  recentReadingsContainer: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  readingCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  readingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  readingIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  readingType: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  readingValue: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 4,
  },
  readingValueText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginRight: 4,
  },
  readingUnit: {
    fontSize: 14,
    color: '#6B7280',
  },
  readingDate: {
    fontSize: 12,
    color: '#6B7280',
  },
}); 