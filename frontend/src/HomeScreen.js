import React, { useState } from 'react';
import {
  View,
  Text,
  Button,
  Modal,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';

const dummyReports = [
  { id: 1, lat: 40.7128, lon: -74.006, description: 'ICE sighting near park' },
  { id: 2, lat: 40.7138, lon: -74.001, description: 'Checkpoint at subway' },
];

export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    // Placeholder submit logic
    setModalVisible(false);
    setDescription('');
  };

  return (
    <View className="flex-1">
      {/* Mapbox MapView placeholder */}
      <View className="flex-1 bg-gray-200 items-center justify-center">
        <Text className="text-gray-500">Map goes here</Text>
      </View>

      {/* Report pins list placeholder */}
      <FlatList
        data={dummyReports}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text className="p-2 text-center">
            {item.description} ({item.lat}, {item.lon})
          </Text>
        )}
      />

      <View className="p-4">
        <Button
          title="Report ICE Activity"
          onPress={() => setModalVisible(true)}
        />
      </View>

      <Modal
        visible={modalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center p-4 bg-white">
          <Text className="text-lg font-bold mb-4">New Report</Text>
          <TextInput
            className="border p-2 mb-4"
            placeholder="Description"
            value={description}
            onChangeText={setDescription}
          />
          {/* Image picker placeholder */}
          <View className="h-32 bg-gray-100 mb-4 items-center justify-center">
            <Text className="text-gray-500">Image picker</Text>
          </View>
          {/* Geolocation placeholder */}
          <Text className="mb-4">Location: 40.7128, -74.0060</Text>
          <TouchableOpacity
            className="bg-blue-500 p-3 rounded"
            onPress={handleSubmit}
          >
            <Text className="text-white text-center">Submit</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
