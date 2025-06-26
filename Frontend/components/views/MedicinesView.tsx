import React from 'react';
import { View, StyleSheet, Modal, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import MedicineCard from '@/components/MedicineCard';

interface MedicinesViewProps {
  medicines: any[];
  handleTakeMedicine: (id: number) => void;
  handleDeleteMedicine: (id: number) => void;
  modalVisible: boolean;
  setModalVisible: (visible: boolean) => void;
  newMed: { name: string; purpose: string; dosage: string; timing: string };
  setNewMed: (med: { name: string; purpose: string; dosage: string; timing: string }) => void;
  handleAddMedicine: () => void;
}

export default function MedicinesView({
  medicines,
  handleTakeMedicine,
  handleDeleteMedicine,
  modalVisible,
  setModalVisible,
  newMed,
  setNewMed,
  handleAddMedicine,
}: MedicinesViewProps) {
  const handleInputChange = (field: string, value: string) => {
    setNewMed({ ...newMed, [field]: value });
  };

  return (
    <View style={styles.sectionContainer}>
      {/* Add Medicine Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Add New Medicine</Text>
            <Text style={styles.modalDesc}>Enter the details of your new medication below.</Text>
            <ScrollView>
              <Text style={styles.inputLabel}>Medicine Name</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g., Amlodipine"
                value={newMed.name}
                onChangeText={v => handleInputChange('name', v)}
              />
              <Text style={styles.inputLabel}>Purpose/Condition</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g., Blood Pressure Control"
                value={newMed.purpose}
                onChangeText={v => handleInputChange('purpose', v)}
              />
              <Text style={styles.inputLabel}>Dosage</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g., 5mg"
                value={newMed.dosage}
                onChangeText={v => handleInputChange('dosage', v)}
              />
              <Text style={styles.inputLabel}>Timing (comma-separated)</Text>
              <TextInput
                style={styles.input}
                placeholder="e.g., 9:00 AM, 9:00 PM"
                value={newMed.timing}
                onChangeText={v => handleInputChange('timing', v)}
              />
              <TouchableOpacity style={styles.addButton} onPress={handleAddMedicine}>
                <Text style={styles.addButtonText}>Add Medicine</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>

      {/* Medicines List */}
      {medicines.map((medicine) => (
        <MedicineCard
          key={medicine.id}
          name={medicine.name}
          dosage={medicine.dosage}
          purpose={medicine.purpose}
          frequency={medicine.frequency}
          timing={medicine.timing}
          taken={medicine.taken}
          missed={medicine.missed}
          onTake={() => handleTakeMedicine(medicine.id)}
          onDelete={() => handleDeleteMedicine(medicine.id)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalDesc: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 14,
    color: '#374151',
    marginTop: 12,
    marginBottom: 4,
  },
  input: {
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    color: '#1F2937',
    marginBottom: 4,
  },
  addButton: {
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    paddingVertical: 12,
    marginTop: 20,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cancelButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#6B7280',
    fontSize: 15,
  },
}); 