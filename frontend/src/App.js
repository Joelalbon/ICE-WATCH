import React from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center p-4">
      <Text className="text-xl font-bold mb-4">ICE-WATCH</Text>
      {/* Map component using Mapbox or Leaflet fallback */}
      <View className="h-64 w-full bg-gray-200 mb-4" />
      <Button title="Report ICE Activity" onPress={() => {}} />
    </View>
  );
}
