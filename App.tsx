import { View, Text, StyleSheet, TouchableOpacity, Button, Image, ScrollView } from 'react-native';

const mockProducts = [
  { id: 'cucumber_iznik', name: 'Cucumber - Iznik', image: 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/iznik@3x.jpg' },
  { id: 'tomato_sunrise', name: 'Tomato - Sunrise', image: 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/tomato_sunrise@3x.jpg' },
  { id: 'tomato_bigdena', name: 'Tomato - Bigdena', image: 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/bigdena@3x.jpg' },
  { id: 'tomato_beorange', name: 'Tomato - Beorange', image: 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/beorange@3x.jpg' },
  { id: 'arugula_esmee', name: 'Arugula - Esmee', image: 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/arugula_esmee@3x.jpg' },
];

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
        <Text style={{ fontSize: 20 }}>your selected plants:</Text>
        </View>
        
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {mockProducts.map((product) => (
          <View key={product.id} style={styles.productContainer}>
              {/* Product Image */}
              <Image source={{ uri: product.image }} style={styles.productImage} />

            <Text style={styles.productName}>{product.name}</Text>
           
          </View>
        ))}
      </ScrollView>

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
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'baseline',
    // Add additional styles for content if needed
  },
  saveChangesButton: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
  },
  productContainer: {
    marginRight: 10,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    width: 70,
    height: 70,
    alignItems: 'center',
  },
  productName: {
    fontSize: 10,
    fontWeight: 'bold',
  },
  productImage: {
    width: 70,
    height: 70,
    borderRadius: 5,
    marginBottom: 10
  },
});

export default OrderPage;

