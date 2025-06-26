import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CircleCheck as CheckCircle, Pill, Activity, Calendar, Plus } from 'lucide-react-native';
import StatsCard from '@/components/StatsCard';
import { HEALTH_STATS } from '@/constants/stats';
import { Dimensions } from 'react-native';
import { LayoutAnimation, UIManager, Platform } from 'react-native';

// Import the different view components
import MedicinesView from '@/components/views/MedicinesView';
import RemindersView from '@/components/views/RemindersView';
import VitalsView from '@/components/views/VitalsView';
import ReportsView from '@/components/views/ReportsView';
import InsightsView from '@/components/views/InsightsView';
import AssistantView from '@/components/views/AssistantView';
import AlertsView from '@/components/views/AlertsView';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

// Define the different views/screens
const VIEWS = {
  MEDICINES: 'medicines',
  REMINDERS: 'reminders',
  VITALS: 'vitals',
  REPORTS: 'reports',
  INSIGHTS: 'insights',
  ASSISTANT: 'assistant',
  ALERTS: 'alerts'
};

// Add Reminder type for consistency
interface Reminder {
  id: number;
  medicineName: string;
  dosage: string;
  time: string;
  frequency: string;
  status: 'enabled' | 'disabled';
}

export default function MainScreen() {
  const [scrollY, setScrollY] = useState(0);
  const [activeView, setActiveView] = useState(VIEWS.MEDICINES);

  // Add medicine modal state
  const [modalVisible, setModalVisible] = useState(false);
  const [medicines, setMedicines] = useState([
    {
      id: 1,
      name: 'Amlodipine',
      dosage: '5mg',
      purpose: 'Blood Pressure Control',
      frequency: 'Twice Daily',
      timing: ['9:00 AM', '9:00 PM'],
      taken: true,
      missed: 0
    },
    {
      id: 2,
      name: 'Metformin',
      dosage: '500mg',
      purpose: 'Diabetes Management',
      frequency: 'Twice Daily',
      timing: ['8:00 AM', '8:00 PM'],
      taken: true,
      missed: 1
    },
    {
      id: 3,
      name: 'Lisinopril',
      dosage: '10mg',
      purpose: 'Heart Health',
      frequency: 'Once Daily',
      timing: ['7:00 AM'],
      taken: true,
      missed: 0
    }
  ]);
  const [newMed, setNewMed] = useState({ name: '', purpose: '', dosage: '', timing: '' });

  // Reminders state
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: 1,
      medicineName: 'Amlodipine',
      dosage: '5mg',
      time: '9:00 AM',
      frequency: 'Daily',
      status: 'enabled',
    },
  ]);

  const handleTakeMedicine = (id: number) => {
    setMedicines(medicines.map(med =>
      med.id === id ? { ...med, taken: true } : med
    ));
  };

  const handleDeleteMedicine = (id: number) => {
    const med = medicines.find(med => med.id === id);
    setMedicines(medicines.filter(med => med.id !== id));
    if (med) {
      setReminders(reminders.filter(reminder => reminder.medicineName !== med.name));
    }
  };

  const handleAddMedicine = () => {
    if (!newMed.name.trim() || !newMed.dosage.trim() || !newMed.purpose.trim() || !newMed.timing.trim()) return;
    const timings = newMed.timing.split(',').map(t => t.trim());
    setMedicines(prev => [
      {
        id: Date.now(),
        name: newMed.name,
        dosage: newMed.dosage,
        purpose: newMed.purpose,
        frequency: 'Custom',
        timing: timings,
        taken: false,
        missed: 0
      },
      ...prev
    ]);
    // Add reminders for each timing
    setReminders(prev => [
      ...timings.map((time, idx) => ({
        id: Date.now() + idx,
        medicineName: newMed.name,
        dosage: newMed.dosage,
        time,
        frequency: 'Daily',
        status: 'enabled' as 'enabled',
      })),
      ...prev
    ]);
    setNewMed({ name: '', purpose: '', dosage: '', timing: '' });
    setModalVisible(false);
  };

  // Calculate smooth animations based on scroll position
  const maxScroll = 80;
  const scrollProgress = Math.min(scrollY / maxScroll, 1);
  
  const headerHeight = screenHeight * 0.1 - (screenHeight * 0.03 * scrollProgress);
  const subtitleOpacity = scrollY > 50 ? 0 : 1;
  const titleAlignment = scrollY > 50 ? 'center' : 'flex-start';
  const titleMarginTop = screenHeight * 0.01 * (1 - scrollProgress);

  // Get the title and subtitle based on active view
  const getViewInfo = () => {
    switch (activeView) {
      case VIEWS.MEDICINES:
        return { title: 'Medicine Tracker', subtitle: 'Manage your medications and track adherence' };
      case VIEWS.REMINDERS:
        return { title: 'Reminders', subtitle: 'Add your Medicine Reminder' };
      case VIEWS.VITALS:
        return { title: 'Vitals Monitoring', subtitle: 'Track your blood pressure and sugar levels' };
      case VIEWS.REPORTS:
        return { title: 'Health Reports', subtitle: 'View your health analytics' };
      case VIEWS.INSIGHTS:
        return { title: 'AI Insights', subtitle: 'Get personalized health insights' };
      case VIEWS.ASSISTANT:
        return { title: 'Health Assistant', subtitle: 'Chat with your AI health assistant' };
      case VIEWS.ALERTS:
        return { title: 'Health Alerts', subtitle: 'Stay updated with important alerts' };
      default:
        return { title: 'HealthMate', subtitle: 'Your health companion' };
    }
  };

  const viewInfo = getViewInfo();

  // Render content based on active view
  const renderContent = () => {
    switch (activeView) {
      case VIEWS.MEDICINES:
        return <MedicinesView
          medicines={medicines}
          handleTakeMedicine={handleTakeMedicine}
          handleDeleteMedicine={handleDeleteMedicine}
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          newMed={newMed}
          setNewMed={setNewMed}
          handleAddMedicine={handleAddMedicine}
        />;
      case VIEWS.REMINDERS:
        return <RemindersView reminders={reminders} setReminders={setReminders} />;
      case VIEWS.VITALS:
        return <VitalsView />;
      case VIEWS.REPORTS:
        return <ReportsView />;
      case VIEWS.INSIGHTS:
        return <InsightsView />;
      case VIEWS.ASSISTANT:
        return <AssistantView />;
      case VIEWS.ALERTS:
        return <AlertsView />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={[
          styles.sectionHeader,
          {
            height: headerHeight,
            
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: screenWidth * 0.05,
          },
        ]}
      >
        <View
          style={[
            styles.sectionTitleContainer,
            {
              flex: 1,
              marginTop: titleMarginTop,
              alignItems: titleAlignment,
            },
          ]}
        >
          <Text style={styles.sectionTitle}>{viewInfo.title}</Text>
          <Text
            style={[
              styles.sectionSubtitle,
              {
                opacity: subtitleOpacity,
              },
            ]}
          >
            {viewInfo.subtitle}
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.plusButton,
            {
              marginTop: titleMarginTop,
              marginBottom: screenHeight * 0.03,
            }
          ]}
          onPress={() => {
            if (activeView === VIEWS.MEDICINES) setModalVisible(true);
          }}
        >
          <Plus color="black" size={20} />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        onScroll={(e) => {
          const yOffset = e.nativeEvent.contentOffset.y;
          setScrollY(yOffset);
        }}
        scrollEventThrottle={8}
      >
        {/* Stats Cards */}
        <View style={[styles.statsContainer, { marginTop: screenHeight * 0.04 }]}>
          <View style={styles.statsRow}>
            <StatsCard
              icon={<CheckCircle color="white" size={24} />}
              value={`${HEALTH_STATS.adherence.percentage}%`}
              label={HEALTH_STATS.adherence.label}
              backgroundColor={HEALTH_STATS.adherence.color}
            />
            <StatsCard
              icon={<Pill color="white" size={24} />}
              value={HEALTH_STATS.medicines.count.toString()}
              label={HEALTH_STATS.medicines.label}
              backgroundColor={HEALTH_STATS.medicines.color}
            />
          </View>
          <View style={styles.statsRow}>
            <StatsCard
              icon={<Activity color="white" size={24} />}
              value={`${HEALTH_STATS.bloodPressure.systolic}/${HEALTH_STATS.bloodPressure.diastolic}`}
              label={HEALTH_STATS.bloodPressure.label}
              backgroundColor={HEALTH_STATS.bloodPressure.color}
            />
            <StatsCard
              icon={<Calendar color="white" size={24} />}
              value={HEALTH_STATS.bloodSugar.value.toString()}
              label={HEALTH_STATS.bloodSugar.label}
              backgroundColor={HEALTH_STATS.bloodSugar.color}
            />
          </View>
        </View>

        {/* Navigation Tabs */}
        <View style={styles.tabsContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={styles.tabsRow}>
              <TouchableOpacity 
                style={[styles.tab, activeView === VIEWS.MEDICINES && styles.activeTab]}
                onPress={() => setActiveView(VIEWS.MEDICINES)}
              >
                <Text style={activeView === VIEWS.MEDICINES ? styles.activeTabText : styles.tabText}>
                  🧬 Medicines
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.tab, activeView === VIEWS.REMINDERS && styles.activeTab]}
                onPress={() => setActiveView(VIEWS.REMINDERS)}
              >
                <Text style={activeView === VIEWS.REMINDERS ? styles.activeTabText : styles.tabText}>
                  🔔 Reminders
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.tab, activeView === VIEWS.VITALS && styles.activeTab]}
                onPress={() => setActiveView(VIEWS.VITALS)}
              >
                <Text style={activeView === VIEWS.VITALS ? styles.activeTabText : styles.tabText}>
                  📊 Vitals
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.tab, activeView === VIEWS.REPORTS && styles.activeTab]}
                onPress={() => setActiveView(VIEWS.REPORTS)}
              >
                <Text style={activeView === VIEWS.REPORTS ? styles.activeTabText : styles.tabText}>
                  📋 Reports
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.tab, activeView === VIEWS.INSIGHTS && styles.activeTab]}
                onPress={() => setActiveView(VIEWS.INSIGHTS)}
              >
                <Text style={activeView === VIEWS.INSIGHTS ? styles.activeTabText : styles.tabText}>
                  🧠 AI Insights
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.tab, activeView === VIEWS.ASSISTANT && styles.activeTab]}
                onPress={() => setActiveView(VIEWS.ASSISTANT)}
              >
                <Text style={activeView === VIEWS.ASSISTANT ? styles.activeTabText : styles.tabText}>
                  🤖 Assistant
                </Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.tab, activeView === VIEWS.ALERTS && styles.activeTab]}
                onPress={() => setActiveView(VIEWS.ALERTS)}
              >
                <Text style={activeView === VIEWS.ALERTS ? styles.activeTabText : styles.tabText}>
                  🚨 Alerts
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* Dynamic Content */}
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
  },
  statsContainer: {
    paddingHorizontal: 16,
    marginTop: -32,
    marginBottom: 24,
  },
  statsRow: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  tabsContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  tabsRow: {
    flexDirection: 'row',
  },
  tab: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 16,
    borderRadius: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#3B82F6',
  },
  tabText: {
    color: '#6B7280',
    fontSize: 14,
  },
  activeTabText: {
    color: '#3B82F6',
    fontWeight: '600',
    fontSize: 14,
  },
  sectionHeader: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionTitleContainer: {
    // flex: 1 is set dynamically above
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  plusButton: {
    // Plus button styling
  },
}); 