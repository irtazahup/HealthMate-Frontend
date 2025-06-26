// AppBar.js - Reusable Component
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar, Dimensions } from 'react-native';
import { Plus } from 'lucide-react-native';

const screenWidth = Dimensions.get('window').width;

const AppBar = ({ 
  title, 
  subtitle = null, 
  showButton = true, 
  buttonIcon = <Plus color="black" size={24} />, 
  onButtonPress = () => {},
  backgroundColor = '#F9FAFB' 
}) => {
  return (
    <View style={[styles.appBar, { backgroundColor }]}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && (
          <Text style={styles.subtitle}>{subtitle}</Text>
        )}
      </View>
      
      {showButton && (
        <TouchableOpacity style={styles.button} onPress={onButtonPress}>
          {buttonIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: StatusBar.currentHeight || 20,
    paddingHorizontal: screenWidth * 0.05,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
    elevation: 2, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1F2937',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  button: {
    padding: 4,
  },
});

export default AppBar;