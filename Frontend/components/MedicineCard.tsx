import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Pill, Clock, Trash2 } from 'lucide-react-native';

interface MedicineCardProps {
  name: string;
  dosage: string;
  purpose: string;
  frequency: string;
  timing: string[];
  taken: boolean;
  missed?: number;
  onTake: () => void;
  onDelete: () => void;
}

export default function MedicineCard({
  name,
  dosage,
  purpose,
  frequency,
  timing,
  taken,
  missed,
  onTake,
  onDelete
}: MedicineCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.medicineInfo}>
          <Pill color="#3B82F6" size={20} />
          <View style={styles.nameSection}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.dosage}>{dosage}</Text>
          </View>
        </View>
        <TouchableOpacity onPress={onDelete} style={styles.deleteButton}>
          <Trash2 color="#EF4444" size={18} />
        </TouchableOpacity>
      </View>

      <Text style={styles.purpose}>{purpose}</Text>
      
      <View style={styles.frequencyRow}>
        <Clock color="#6B7280" size={16} />
        <Text style={styles.frequency}>{frequency}</Text>
      </View>

      <Text style={styles.timingLabel}>Timing:</Text>
      <View style={styles.timingContainer}>
        {timing.map((time, index) => (
          <View key={index} style={styles.timingChip}>
            <Text style={styles.timingText}>{time}</Text>
          </View>
        ))}
      </View>

      <View style={styles.actionRow}>
        <View style={styles.statusSection}>
          {taken ? (
            <View style={styles.takenButton}>
              <Text style={styles.takenText}>✓ Taken</Text>
            </View>
          ) : (
            <TouchableOpacity 
              onPress={onTake}
              style={styles.takeButton}
            >
              <Text style={styles.takeText}>Take</Text>
            </TouchableOpacity>
          )}
          {missed && missed > 0 && (
            <View style={styles.missedChip}>
              <Text style={styles.missedText}>⚠ {missed} missed</Text>
            </View>
          )}
        </View>
        {!taken && (
          <TouchableOpacity style={styles.markTakenButton}>
            <Text style={styles.markTakenText}>Mark Taken</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  medicineInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  nameSection: {
    marginLeft: 12,
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  dosage: {
    fontSize: 14,
    color: '#6B7280',
  },
  deleteButton: {
    padding: 4,
  },
  purpose: {
    fontSize: 14,
    fontWeight: '600',
    color: '#3B82F6',
    marginBottom: 8,
  },
  frequencyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  frequency: {
    fontSize: 14,
    color: '#374151',
    marginLeft: 8,
  },
  timingLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1F2937',
    marginBottom: 8,
  },
  timingContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  timingChip: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginRight: 8,
    marginBottom: 8,
  },
  timingText: {
    fontSize: 12,
    color: '#374151',
  },
  actionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  statusSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  takenButton: {
    backgroundColor: '#10B981',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  takenText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  takeButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  takeText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  missedChip: {
    backgroundColor: '#FEE2E2',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginLeft: 8,
  },
  missedText: {
    color: '#DC2626',
    fontSize: 12,
  },
  markTakenButton: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  markTakenText: {
    color: '#374151',
    fontWeight: '600',
    fontSize: 14,
  },
});