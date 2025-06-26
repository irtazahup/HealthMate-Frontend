import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FileText, TrendingUp, TrendingDown, Calendar, BarChart3, PieChart, Activity } from 'lucide-react-native';

export default function ReportsView() {
  const reports = [
    {
      id: 1,
      title: 'Weekly Health Summary',
      date: 'Dec 15-21, 2024',
      type: 'summary',
      status: 'completed',
      icon: '📊'
    },
    {
      id: 2,
      title: 'Blood Pressure Trend',
      date: 'Last 30 days',
      type: 'trend',
      status: 'completed',
      icon: '❤️'
    },
    {
      id: 3,
      title: 'Medication Adherence',
      date: 'This month',
      type: 'adherence',
      status: 'in-progress',
      icon: '💊'
    },
    {
      id: 4,
      title: 'Blood Sugar Analysis',
      date: 'Last 7 days',
      type: 'analysis',
      status: 'pending',
      icon: '📈'
    }
  ];

  const quickStats = [
    {
      title: 'Average BP',
      value: '120/80',
      trend: 'up',
      change: '+2%',
      color: '#10B981'
    },
    {
      title: 'Adherence Rate',
      value: '95%',
      trend: 'up',
      change: '+5%',
      color: '#3B82F6'
    },
    {
      title: 'Blood Sugar',
      value: '140',
      trend: 'down',
      change: '-8%',
      color: '#EF4444'
    }
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Quick Stats */}
      <View style={styles.quickStatsContainer}>
        <Text style={styles.sectionTitle}>Quick Stats</Text>
        <View style={styles.statsGrid}>
          {quickStats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <View style={styles.statHeader}>
                <Text style={styles.statTitle}>{stat.title}</Text>
                <View style={[styles.trendIndicator, { backgroundColor: stat.color }]}>
                  {stat.trend === 'up' ? (
                    <TrendingUp color="white" size={12} />
                  ) : (
                    <TrendingDown color="white" size={12} />
                  )}
                </View>
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={[styles.statChange, { color: stat.color }]}>
                {stat.change} from last week
              </Text>
            </View>
          ))}
        </View>
      </View>

      {/* Recent Reports */}
      <View style={styles.reportsContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Recent Reports</Text>
          <TouchableOpacity style={styles.viewAllButton}>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        
        {reports.map((report) => (
          <TouchableOpacity key={report.id} style={styles.reportCard}>
            <View style={styles.reportHeader}>
              <View style={styles.reportIcon}>
                <Text style={styles.iconText}>{report.icon}</Text>
              </View>
              <View style={styles.reportInfo}>
                <Text style={styles.reportTitle}>{report.title}</Text>
                <Text style={styles.reportDate}>{report.date}</Text>
              </View>
              <View style={[styles.statusBadge, 
                report.status === 'completed' ? styles.completedBadge :
                report.status === 'in-progress' ? styles.inProgressBadge :
                styles.pendingBadge
              ]}>
                <Text style={styles.statusText}>
                  {report.status === 'completed' ? '✓' : 
                   report.status === 'in-progress' ? '⏳' : '⏸️'}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Generate New Report */}
      <View style={styles.generateReportContainer}>
        <View style={styles.generateReportCard}>
          <View style={styles.generateReportContent}>
            <FileText color="#3B82F6" size={24} />
            <Text style={styles.generateReportTitle}>Generate New Report</Text>
            <Text style={styles.generateReportSubtitle}>
              Create detailed health analytics and insights
            </Text>
          </View>
          <TouchableOpacity style={styles.generateButton}>
            <Text style={styles.generateButtonText}>Generate</Text>
          </TouchableOpacity>
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
  quickStatsContainer: {
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  statTitle: {
    fontSize: 12,
    color: '#6B7280',
    fontWeight: '500',
  },
  trendIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1F2937',
    marginBottom: 4,
  },
  statChange: {
    fontSize: 10,
    fontWeight: '500',
  },
  reportsContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  viewAllButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
  },
  viewAllText: {
    fontSize: 12,
    color: '#3B82F6',
    fontWeight: '500',
  },
  reportCard: {
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
  reportHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  reportIcon: {
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
  reportInfo: {
    flex: 1,
  },
  reportTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  reportDate: {
    fontSize: 14,
    color: '#6B7280',
  },
  statusBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedBadge: {
    backgroundColor: '#D1FAE5',
  },
  inProgressBadge: {
    backgroundColor: '#FEF3C7',
  },
  pendingBadge: {
    backgroundColor: '#FEE2E2',
  },
  statusText: {
    fontSize: 12,
  },
  generateReportContainer: {
    marginBottom: 24,
  },
  generateReportCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  generateReportContent: {
    alignItems: 'center',
    marginBottom: 16,
  },
  generateReportTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginTop: 12,
    marginBottom: 4,
  },
  generateReportSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
  },
  generateButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  generateButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 