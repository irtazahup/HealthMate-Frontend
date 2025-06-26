// Health tracking statistics and variables
export const HEALTH_STATS = {
  adherence: {
    percentage: 85,
    color: '#10B981',
    label: 'Adherence'
  },
  medicines: {
    count: 2,
    color: '#3B82F6',
    label: 'Medicines'
  },
  bloodPressure: {
    systolic: 120,
    diastolic: 80,
    unit: 'mmHg',
    color: '#8B5CF6',
    label: 'BP (mmHg)',
    status: 'Normal'
  },
  bloodSugar: {
    value: 140,
    unit: 'mg/dL',
    color: '#FB923C',
    label: 'Sugar (mg/dL)',
    status: 'Elevated'
  }
};

export const REMINDERS_STATS = {
  active: 1,
  overdue: 1,
  onTrack: 0
};

export const WEEKLY_STATS = {
  adherence: 85,
  avgBP: '125/82',
  avgSugar: 145
};