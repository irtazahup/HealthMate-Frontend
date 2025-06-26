import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Brain, Lightbulb, TrendingUp, AlertTriangle, CheckCircle, Clock, Star } from 'lucide-react-native';

export default function InsightsView() {
  const insights = [
    {
      id: 1,
      title: 'Blood Pressure Optimization',
      description: 'Your BP readings show improvement. Consider maintaining your current medication schedule.',
      type: 'positive',
      priority: 'high',
      icon: '📈',
      time: '2 hours ago'
    },
    {
      id: 2,
      title: 'Medication Timing Alert',
      description: 'Taking Metformin with meals improves absorption. Try to take it 30 minutes before eating.',
      type: 'recommendation',
      priority: 'medium',
      icon: '💊',
      time: '1 day ago'
    },
    {
      id: 3,
      title: 'Exercise Recommendation',
      description: 'Based on your vitals, 30 minutes of walking daily would benefit your heart health.',
      type: 'suggestion',
      priority: 'medium',
      icon: '🏃‍♂️',
      time: '3 days ago'
    },
    {
      id: 4,
      title: 'Blood Sugar Pattern',
      description: 'Your morning readings are consistently high. Consider adjusting your evening medication.',
      type: 'warning',
      priority: 'high',
      icon: '⚠️',
      time: '1 week ago'
    }
  ];

  const aiStats = [
    {
      title: 'Accuracy Rate',
      value: '94%',
      description: 'AI predictions',
      color: '#10B981'
    },
    {
      title: 'Insights Generated',
      value: '12',
      description: 'This month',
      color: '#3B82F6'
    },
    {
      title: 'Health Score',
      value: '8.5/10',
      description: 'Overall rating',
      color: '#F59E0B'
    }
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* AI Stats */}
      <View style={styles.statsContainer}>
        <Text style={styles.sectionTitle}>AI Performance</Text>
        <View style={styles.statsGrid}>
          {aiStats.map((stat, index) => (
            <View key={index} style={styles.statCard}>
              <View style={[styles.statIcon, { backgroundColor: stat.color + '20' }]}>
                <Brain color={stat.color} size={20} />
              </View>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statTitle}>{stat.title}</Text>
              <Text style={styles.statDescription}>{stat.description}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* AI Insights */}
      <View style={styles.insightsContainer}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>AI Insights</Text>
          <TouchableOpacity style={styles.refreshButton}>
            <Text style={styles.refreshText}>Refresh</Text>
          </TouchableOpacity>
        </View>
        
        {insights.map((insight) => (
          <View key={insight.id} style={styles.insightCard}>
            <View style={styles.insightHeader}>
              <View style={styles.insightIcon}>
                <Text style={styles.iconText}>{insight.icon}</Text>
              </View>
              <View style={styles.insightInfo}>
                <Text style={styles.insightTitle}>{insight.title}</Text>
                <Text style={styles.insightTime}>{insight.time}</Text>
              </View>
              <View style={[styles.priorityBadge, 
                insight.priority === 'high' ? styles.highPriority :
                insight.priority === 'medium' ? styles.mediumPriority :
                styles.lowPriority
              ]}>
                <Text style={styles.priorityText}>
                  {insight.priority === 'high' ? '🔴' : 
                   insight.priority === 'medium' ? '🟡' : '🟢'}
                </Text>
              </View>
            </View>
            <Text style={styles.insightDescription}>{insight.description}</Text>
            <View style={styles.insightActions}>
              <TouchableOpacity style={styles.actionButton}>
                <Text style={styles.actionText}>Apply</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.actionButtonSecondary}>
                <Text style={styles.actionTextSecondary}>Dismiss</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>

      {/* AI Chat */}
      <View style={styles.aiChatContainer}>
        <View style={styles.aiChatCard}>
          <View style={styles.aiChatHeader}>
            <Brain color="#3B82F6" size={24} />
            <Text style={styles.aiChatTitle}>Ask AI Assistant</Text>
          </View>
          <Text style={styles.aiChatSubtitle}>
            Get personalized health advice and answers to your questions
          </Text>
          <TouchableOpacity style={styles.chatButton}>
            <Text style={styles.chatButtonText}>Start Chat</Text>
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
    marginBottom: 2,
  },
  statDescription: {
    fontSize: 10,
    color: '#9CA3AF',
  },
  insightsContainer: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  refreshButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
  },
  refreshText: {
    fontSize: 12,
    color: '#3B82F6',
    fontWeight: '500',
  },
  insightCard: {
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
  insightHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  insightIcon: {
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
  insightInfo: {
    flex: 1,
  },
  insightTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1F2937',
    marginBottom: 4,
  },
  insightTime: {
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
  insightDescription: {
    fontSize: 14,
    color: '#4B5563',
    lineHeight: 20,
    marginBottom: 12,
  },
  insightActions: {
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
  aiChatContainer: {
    marginBottom: 24,
  },
  aiChatCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  aiChatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  aiChatTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1F2937',
    marginLeft: 8,
  },
  aiChatSubtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 16,
  },
  chatButton: {
    backgroundColor: '#3B82F6',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  chatButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 