import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, Image, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';

const mockSelectedPlants = [
  { id: 'cucumber_iznik', name: 'Cucumber - Iznik', image: 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/iznik@3x.jpg' },
  { id: 'tomato_sunrise', name: 'Tomato - Sunrise', image: 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/tomato_sunrise@3x.jpg' },
  { id: 'tomato_bigdena', name: 'Tomato - Bigdena', image: 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/bigdena@3x.jpg' },
  { id: 'tomato_beorange', name: 'Tomato - Beorange', image: 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/beorange@3x.jpg' },
  { id: 'arugula_esmee', name: 'Arugula - Esmee', image: 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/arugula_esmee@3x.jpg' },
];

const maxSelection = 5;

const OrderPage: React.FC = () => {
  const handleExitPress = () => {
    console.log('Exit button pressed');
    // to add exit logic here
  };
  

  const handleSaveChangesPress = () => {
    console.log('Save Changes button pressed');
    // to add save changes logic here
  };
  const handleRemoveItem = () => {
    console.log('remove item button pressed');
    // to add remove button logic here
  };

  const [isCategoryCollapsed, setIsCategoryCollapsed] = useState(true);
  const [plants, setPlants] =useState<Plant[]>([]);
  const [categories, setCategories] =useState<Category[]>([]);

  useEffect(() => {
    // Fetch products from a JSON file or API response
    const fetchPlantsData = async () => {
      try {
        const response = await fetch('https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/plants.json');
        const data: Plants = await response.json();
        setPlants(data.plants);
        console.log("response: " ,response)
        console.log(data);
      } catch (error) {
        console.error('Error fetching plants data:', error);
      }
    };

    const fetchCategoriesData = async () => {
      try {
        const response = await fetch('https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/data/catalogs/agwafarm.json');
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        console.error('Error fetching categories data:', error);
      }
    };

    fetchPlantsData();
    fetchCategoriesData();
  }, []); // Run only once when the component mounts

  
  const getImageIdByPlantId = (plantId: string) => {
    const plant = plants.find((p) => p.id === plantId);
    return plant ? plant.imageId : null;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>

        {/* Title */}
        <Text style={styles.title}>ORDER</Text>

        {/* Exit button */}
        <TouchableOpacity onPress={handleExitPress} style={styles.exitButton}>
          <Text style= {{ fontSize: 20 }}>X</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}>Your next order</Text>
        <Text style={{ fontSize: 20 }}>The monthly plants order consists of {maxSelection} plants.
        Changes to your next order can be made until the end of [month-current].
        This order will be shipped on the beginning of [month - next].</Text>
        </View>

        <View style={styles.subTitle}>
        <Text style={{ fontSize: 25 }}>your selected plants:</Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {mockSelectedPlants.map((product) => (
          <View key={product.id} style={styles.productContainer}>
              {/* Product Image */}
              <Image source={{ uri: product.image }} style={styles.productImage} />

            <Text style={styles.productName}>{product.name}</Text>
            <View>
            <Button title="-" onPress={() => handleRemoveItem()} 
            color="#ccc" />
            </View>
           
          </View>
        ))}
        
      </ScrollView>

      {/* Category container with collapsible accordion */}
      <View style={styles.categoryContent}>
      <TouchableOpacity onPress={() => setIsCategoryCollapsed(!isCategoryCollapsed)} style={styles.categoryHeader}>
        <Text style={styles.categoryHeaderText}>[{categories.at(0)?.name}]</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCategoryCollapsed}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
        {categories.at(0)?.plants.map((plant) => (
          <View key={plant.id} style={styles.productContainer}>
              {/* Product Image */}
              <Image source={{ uri: 'https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/'+getImageIdByPlantId(plant.id)+'@3x.jpg' }} style={styles.productImage} />
            <Text style={styles.productName}>{plant.name}</Text>
          </View>
        ))}
      </ScrollView>
      </Collapsible>
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
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subTitle:{ 
    alignItems: 'baseline',
    marginRight: 150,
    flex: 1,
    fontWeight: 'bold',
  },
  exitButton: { 
    top: 0,
    left: 150,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'baseline',
    marginRight: 10 
  },
  saveChangesButton: {
    bottom: 0,
    left: 0,
    right: 0,
  },
  productContainer: {
    marginRight: 10,
    marginBottom: 10,
    marginTop: 10,
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
  background: {
    backgroundColor: '#f0f8ff'
  },
  categoryHeader: {
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: '#f0f8ff'
  },
  categoryHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoryContent: {
    backgroundColor: '#f0f8ff'
  }
});

export default OrderPage;

