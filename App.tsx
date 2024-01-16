import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const OrderPage: React.FC = () => {
  const handleExitPress = () => {
    console.log('Exit button pressed');
    // to add exit logic here
  };
  

  const handleSaveChangesPress = () => {
    console.log('Save Changes button pressed');
    // to add save changes logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Title */}
        <Text style={styles.title}>ORDER</Text>

        {/* Exit button */}
        <TouchableOpacity onPress={handleExitPress} style={styles.exitButton}>
          <Text style={styles.exitButtonText}>X</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={{ fontSize: 20 }}>The monthly plants order consists of 5 plants.
        Changes to your next order can be made until the end of [month-current].
        This order will be shipped on the beginning of [month - next].</Text>
      </View>

      {/* Save Changes button */}
      <View style={styles.saveChangesButton}>
        <Button title="SAVE CHANGES" onPress={handleSaveChangesPress} disabled />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  exitButton: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  exitButtonText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Add additional styles for content if needed
  },
  saveChangesButton: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
  }
});

export default OrderPage;
