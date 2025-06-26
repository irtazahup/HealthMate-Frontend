import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Bell, CircleAlert as AlertCircle, CircleCheck, Clock, Pill, Trash2Icon } from 'lucide-react-native';
import { REMINDERS_STATS } from '@/constants/stats';

interface Reminder {
  id: number;
  medicineName: string;
  dosage: string;
  time: string;
  frequency: string;
  status: 'enabled' | 'disabled';
}

interface RemindersViewProps {
  reminders: Reminder[];
  setReminders: React.Dispatch<React.SetStateAction<Reminder[]>>;
}

export default function RemindersView({ reminders, setReminders }: RemindersViewProps) {
  const handleToggleReminder = (id: number) => {
    setReminders(reminders.map(reminder =>
      reminder.id === id ? { ...reminder, status: reminder.status === 'enabled' ? 'disabled' : 'enabled' } : reminder
    ));
  };

  return (
    <View style={styles.sectionContainer}>
      {/* Reminder Stats */}
      <View style={styles.reminderStatsContainer}>
        <View style={styles.reminderStatsRow}>
          <View style={[styles.reminderStatCard, { backgroundColor: 'lightblue' }]}>
            <View style={styles.reminderStatIconRow}>
              <Bell color="#3B82F6" size={24} />
              <Text style={[styles.reminderStatValue, { color: 'darkblue' }]}>{REMINDERS_STATS.active}</Text>
            </View>
            <Text style={[styles.reminderStatLabel, { color: 'darkblue' }]}>Active Reminders</Text>
          </View>
          <View style={[styles.reminderStatCard, styles.reminderStatCardRed, { backgroundColor: '#FEE2E2' }]}>
            <View style={styles.reminderStatIconRow}>
              <AlertCircle color="#EF4444" size={24} />
              <Text style={[styles.reminderStatValue, { color: '#EF4444' }]}>{REMINDERS_STATS.overdue}</Text>
            </View>
            <Text style={[styles.reminderStatLabel, { color: '#EF4444' }]}>Overdue</Text>
          </View>
          <View style={[styles.reminderStatCard, styles.reminderStatCardRed, { backgroundColor: '#D1FAE5' }]}>
            <View style={styles.reminderStatIconRow}>
              <CircleCheck color="#10B981" size={24} />
              <Text style={[styles.reminderStatValue, { color: '#10B981' }]}>{REMINDERS_STATS.onTrack}</Text>
            </View>
            <Text style={[styles.reminderStatLabel, { color: '#10B981' }]}>On Track</Text>
          </View>
        </View>
      </View>
      
      {/* Reminders List */}
      <Text style={styles.remindersListTitle}>ALL Reminders</Text>
      <View style={styles.remindersList}>
        {reminders.map((reminder) => (
          <View key={reminder.id} style={styles.container}>
            <View style={styles.header}>
              <View style={styles.medicineInfo}>
                <Pill color="#3B82F6" size={20} />
                <View style={styles.nameSection}>
                  <Text style={styles.name}>{reminder.medicineName}</Text>
                  <Text style={styles.dosage}>{reminder.dosage}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.purpose}>Time: {reminder.time}</Text>
            <View style={styles.frequencyRow}>
              <Clock color="#6B7280" size={16} />
              <Text style={styles.frequency}>{reminder.frequency}</Text>
            </View>
            <View style={styles.actionRow}>
              <TouchableOpacity
                style={[styles.toggleButton, reminder.status === 'enabled' ? styles.enabled : styles.disabled]}
                onPress={() => handleToggleReminder(reminder.id)}
              >
                <Text style={reminder.status === 'enabled' ? styles.enabledText : styles.disabledText}>
                  {reminder.status === 'enabled' ? 'Enabled' : 'Disabled'}
                </Text>
              </TouchableOpacity>
            </View>
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
  reminderStatsContainer: {
    marginBottom: 24,
  },
  reminderStatsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  reminderStatCard: {
    padding: 16,
    borderRadius: 12,
    flex: 1,
    marginRight: 8,
  },
  reminderStatCardRed: {
    marginRight: 0,
    marginLeft: 8,
  },
  reminderStatIconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  reminderStatValue: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#1F2937',
  },
  reminderStatLabel: {
    fontSize: 14,
    color: '#6B7280',
  },
  remindersList: {
    marginTop: 16,
  },
  reminderCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  reminderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reminderInfo: {
    flex: 1,
  },
  reminderTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
  },
  reminderTime: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  reminderActions: {
    flexDirection: 'row',
  },
  actionText: {
    color: '#3B82F6',
    fontSize: 14,
    marginLeft: 16,
  },
  remindersListTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 12,
  },
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
  toggleButton: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  enabled: {
    backgroundColor: '#10B981',
  },
  enabledText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  disabled: {
    backgroundColor: '#EF4444',
  },
  disabledText: {
    color: 'black',
    fontWeight: '600',
    fontSize: 14,
  },
}); 