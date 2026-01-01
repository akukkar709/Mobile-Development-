// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { HelloWave } from '@/components/hello-wave';
// import ParallaxScrollView from '@/components/parallax-scroll-view';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { Link } from 'expo-router';
// import { View } from 'react-native-reanimated/lib/typescript/Animated';

import { Text, View } from "react-native";

export default function HomeScreen() {
      return(
        <View
         style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
         }
         }
        >

          <Text
            style= {{
                color: "orange",
                fontSize: 18,
                fontWeight: "bold",
            }}
            >
            Edit App/index.Tsx to edit this screen
          </Text>

        </View>
      );
}


