import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, SafeAreaView, Alert } from 'react-native';

export default function App() {
  // State variables to track user selection
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const packages = [
    { id: '1', name: 'Express Wash', price: '$20', time: '20 mins' },
    { id: '2', name: 'Deluxe Detail', price: '$45', time: '45 mins' },
    { id: '3', name: 'Premium Ultimate', price: '$80', time: '90 mins' },
  ];

  const timeSlots = ['9:00 AM', '11:30 AM', '2:00 PM', '4:30 PM'];

  const handleBooking = () => {
    if (!selectedPackage || !selectedTime) {
      Alert.alert('Error', 'Please select both a package and a time slot.');
      return;
    }
    Alert.alert(
      'Booking Confirmed! 🧼',
      `Your ${selectedPackage.name} is booked for ${selectedTime}. See you there!`
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Header */}
        <Text style={styles.headerTitle}>BubbleShine Autocare</Text>
        <Text style={styles.headerSubtitle}>Book your professional eco-wash instantly</Text>

        {/* Section 1: Select Package */}
        <Text style={styles.sectionTitle}>1. Select Carwash Package</Text>
        {packages.map((pkg) => {
          const isSelected = selectedPackage?.id === pkg.id;
          return (
            <TouchableOpacity 
              key={pkg.id} 
              style={[styles.card, isSelected && styles.selectedCard]}
              onPress={() => setSelectedPackage(pkg)}
            >
              <View>
                <Text style={[styles.cardName, isSelected && styles.selectedText]}>{pkg.name}</Text>
                <Text style={styles.cardTime}>{pkg.time}</Text>
              </View>
              <Text style={[styles.cardPrice, isSelected && styles.selectedText]}>{pkg.price}</Text>
            </TouchableOpacity>
          );
        })}

        {/* Section 2: Choose Time */}
        <Text style={styles.sectionTitle}>2. Choose Available Time Slot</Text>
        <View style={styles.grid}>
          {timeSlots.map((time) => {
            const isSelected = selectedTime === time;
            return (
              <TouchableOpacity
                key={time}
                style={[styles.timeButton, isSelected && styles.selectedTimeButton]}
                onPress={() => setSelectedTime(time)}
              >
                <Text style={[styles.timeText, isSelected && styles.selectedText]}>{time}</Text>
              </TouchableOpacity>
            );
          })}
        </View>

        {/* Section 3: Book Button */}
        <TouchableOpacity style={styles.bookButton} onPress={handleBooking}>
          <Text style={styles.bookButtonText}>Confirm Appointment</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

// Styling (React Native's version of CSS)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  scrollContainer: {
    padding: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '800',
    color: '#0F172A',
    marginTop: 20,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 12,
    marginTop: 12,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  selectedCard: {
    backgroundColor: '#0284C7',
    borderColor: '#0284C7',
  },
  cardName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B',
  },
  cardTime: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 4,
  },
  cardPrice: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0284C7',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 32,
  },
  timeButton: {
    backgroundColor: '#FFFFFF',
    width: '47%',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  selectedTimeButton: {
    backgroundColor: '#0284C7',
    borderColor: '#0284C7',
  },
  timeText: {
    fontWeight: '600',
    color: '#475569',
  },
  selectedText: {
    color: '#FFFFFF',
  },
  bookButton: {
    backgroundColor: '#10B981',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#10B981',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  bookButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
  },
});