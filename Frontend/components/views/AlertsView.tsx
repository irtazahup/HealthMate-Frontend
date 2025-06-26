import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { AlertTriangle, Bell, Clock, Phone, Mail, Shield, CheckCircle, XCircle } from 'lucide-react-native';

export default function AlertsView() {
  const alerts = [
    {
      id: 1,
      title: 'Blood Pressure Alert',
      message: 'Your BP reading is 145/95 - Consider contacting your doctor',
      type: 'warning',
      priority: 'high',
      time: '2 hours ago',
      read: false,
      icon: '❤️'
    },
    {
      id: 2,
      title: 'Medication Reminder',
      message: 'Time to take your evening medication - Amlodipine 5mg',
      type: 'reminder',
      priority: 'medium',
      time: '30 minutes ago',
      read: false,
      icon: '💊'
    },
    {
      id: 3,
      title: 'Appointment Tomorrow',
      message: 'You have a doctor appointment tomorrow at 10:00 AM',
      type: 'info',
      priority: 'medium',
      time: '1 day ago',
      read: true,
      icon: '📅'
    },
    {
      id: 4,
      title: 'Blood Sugar High',
      message: 'Your morning reading is 180 mg/dL - Monitor closely',
      type: 'alert',
      priority: 'high',
      time: '3 hours ago',
      read: false,
      icon: '📊'
    }
  ];

  const emergencyContacts = [
    {
      id: 1,
      name: 'Dr. Sarah Johnson',
      role: 'Primary Care',
      phone: '+1 (555) 123-4567',
      available: true
    },
    {
      id: 2,
      name: 'Emergency Services',
      role: 'Emergency',
      phone: '911',
      available: true
    },
    {
      id: 3,
      name: 'Pharmacy',
      role: 'Medication',
      phone: '+1 (555) 987-6543',
      available: false
    }
  ];

  const alertStats = [
    {
      title: 'Unread Alerts',
      value: '3',
      color: '#EF4444'
    },
    {
      title: 'Today',
      value: '5',
      color: '#3B82F6'
    },
    {
      title: 'This Week',
      value: '12',
      color: '#10B981'
    }
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Alert Stats */}
      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>Alert Summary</Text>
        <View style={styles.statsGrid}>
          {alertStats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <View style={[styles.statIcon, { backgroundColor: stat.color + '20' }]}>
                <Bell color={stat.color} size={20} />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statTitle}>{stat.title}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* Health Alerts */}
      <View style={styles.alertsContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Health Alerts</Text>
          <TouchableOpacity style={styles.markAllButton}>
            <Text style={styles.markAllText}>Mark All Read</Text>
          </TouchableOpacity>
        </View>
        
        {alerts.map((alert) => (
          <View key={alert.id} style={[
            styles.alertCard,
            !alert.read && styles.unreadAlert
          ]}>
            <View style={styles.alertHeader}>
              <View style={styles.alertIcon}>
                <Text style={styles.iconText}>{alert.icon}</Text>
              </View>
              <View style={styles.alertInfo}>
                <Text style={styles.alertTitle}>{alert.title}</Text>
                <Text style={styles.alertTime}>{alert.time}</Text>
              </View>
              <View style={[styles.priorityBadge, 
                alert.priority === 'high' ? styles.highPriority :
                alert.priority === 'medium' ? styles.mediumPriority :
                styles.lowPriority
              ]}>
                <Text style={styles.priorityText}>
                  {alert.priority === 'high' ? '🔴' : 
                   alert.priority === 'medium' ? '🟡' : '🟢'}
                </Text>
              </View>
            </View>
            <Text style={styles.alertMessage}>{alert.message}</Text>
            <View style={styles.alertActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>Acknowledge</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButtonSecondary}>
                <Text style={styles.actionTextSecondary}>Dismiss</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Emergency Contacts */}
      <View style={styles.contactsContainer}>
        <Text style={styles.sectionTitle}>Emergency Contacts</Text>
        {emergencyContacts.map((contact) => (
          <View key={contact.id} style={styles.contactCard}>
            <View style={styles.contactHeader}>
              <View style={styles.contactInfo}>
                <Text style={styles.contactName}>{contact.name}</Text>
                <Text style={styles.contactRole}>{contact.role}</Text>
              </View>
              <View style={[styles.availabilityBadge, 
                contact.available ? styles.availableBadge : styles.unavailableBadge
              ]}>
                <Text style={styles.availabilityText}>
                  {contact.available ? '✓' : '✗'}
                </Text>
              </View>
            </View>
            <View style={styles.contactActions}>
              <TouchableOpacity style={styles.phoneButton}>
                <Phone color="white" size={16} />
                <Text style={styles.phoneButtonText}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.messageButton}>
                <Mail color="#3B82F6" size={16} />
                <Text style={styles.messageButtonText}>Message</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <View style={styles.quickActionsCard}>
          <View style={styles.quickActionsHeader}>
            <Shield color="#3B82F6" size={24} />
            <Text style={styles.quickActionsTitle}>Quick Actions</Text>
          </View>
          <View style={styles.quickActionsGrid}>
            <TouchableOpacity style={styles.quickActionButton}>
              <Text style={styles.quickActionText}>SOS Alert</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionButton}>
              <Text style={styles.quickActionText}>Share Location</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.quickActionButton}>
              <Text style={styles.quickActionText}>Health Summary</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  statsContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  statTitle: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  alertsContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  markAllButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
  },
  markAllText: {
    fontSize: 12,
    color: '#3B82F6',
    fontWeight: '500',
  },
  alertCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  unreadAlert: {
    borderLeftWidth: 4,
    borderLeftColor: '#3B82F6',
  },
  alertHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  alertIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  iconText: {
    fontSize: 16,
  },
  alertInfo: {
    flex: 1,
  },
  alertTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  alertTime: {
    fontSize: 12,
    color: '#6B7280',
  },
  priorityBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  highPriority: {
    backgroundColor: '#FEE2E2',
  },
  mediumPriority: {
    backgroundColor: '#FEF3C7',
  },
  lowPriority: {
    backgroundColor: '#D1FAE5',
  },
  priorityText: {
    fontSize: 10,
  },
  alertMessage: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    marginBottom: 12,
  },
  alertActions: {
    flexDirection: 'row',
    gap: 8,
  },
  actionButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  actionText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  actionButtonSecondary: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
  },
  actionTextSecondary: {
    color: '#6B7280',
    fontSize: 12,
    fontWeight: '500',
  },
  contactsContainer: {
    marginBottom: 24,
  },
  contactCard: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  contactRole: {
    fontSize: 14,
    color: '#6B7280',
  },
  availabilityBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  availableBadge: {
    backgroundColor: '#D1FAE5',
  },
  unavailableBadge: {
    backgroundColor: '#FEE2E2',
  },
  availabilityText: {
    fontSize: 12,
    color: '#1F2937',
  },
  contactActions: {
    flexDirection: 'row',
    gap: 8,
  },
  phoneButton: {
    backgroundColor: '#10B981',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    gap: 4,
  },
  phoneButtonText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
  messageButton: {
    backgroundColor: '#F3F4F6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    gap: 4,
  },
  messageButtonText: {
    color: '#3B82F6',
    fontSize: 12,
    fontWeight: '500',
  },
  quickActionsContainer: {
    marginBottom: 24,
  },
  quickActionsCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  quickActionsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  quickActionsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: 8,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionButton: {
    backgroundColor: '#F3F4F6',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  quickActionText: {
    fontSize: 12,
    color: '#3B82F6',
    fontWeight: '500',
  },
}); 