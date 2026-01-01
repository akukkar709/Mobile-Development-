// import { Image } from 'expo-image';
// import { Platform, StyleSheet } from 'react-native';

// import { Collapsible } from '@/components/ui/collapsible';
// import { ExternalLink } from '@/components/external-link';
// import ParallaxScrollView from '@/components/parallax-scroll-view';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { IconSymbol } from '@/components/ui/icon-symbol';
// import { Fonts } from '@/constants/theme';

// export default function TabTwoScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
//       headerImage={
//         <IconSymbol
//           size={310}
//           color="#808080"
//           name="chevron.left.forwardslash.chevron.right"
//           style={styles.headerImage}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText
//           type="title"
//           style={{
//             fontFamily: Fonts.rounded,
//           }}>
//           Explore
//         </ThemedText>
//       </ThemedView>
//       <ThemedText>This app includes example code to help you get started.</ThemedText>
//       <Collapsible title="File-based routing">
//         <ThemedText>
//           This app has two screens:{' '}
//           <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
//           <ThemedText type="defaultSemiBold">app/(tabs)/explore.tsx</ThemedText>
//         </ThemedText>
//         <ThemedText>
//           The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
//           sets up the tab navigator.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/router/introduction">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Android, iOS, and web support">
//         <ThemedText>
//           You can open this project on Android, iOS, and the web. To open the web version, press{' '}
//           <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
//         </ThemedText>
//       </Collapsible>
//       <Collapsible title="Images">
//         <ThemedText>
//           For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
//           <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
//           different screen densities
//         </ThemedText>
//         <Image
//           source={require('@/assets/images/react-logo.png')}
//           style={{ width: 100, height: 100, alignSelf: 'center' }}
//         />
//         <ExternalLink href="https://reactnative.dev/docs/images">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Light and dark mode components">
//         <ThemedText>
//           This template has light and dark mode support. The{' '}
//           <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
//           what the user&apos;s current color scheme is, and so you can adjust UI colors accordingly.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Animations">
//         <ThemedText>
//           This template includes an example of an animated component. The{' '}
//           <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
//           the powerful{' '}
//           <ThemedText type="defaultSemiBold" style={{ fontFamily: Fonts.mono }}>
//             react-native-reanimated
//           </ThemedText>{' '}
//           library to create a waving hand animation.
//         </ThemedText>
//         {Platform.select({
//           ios: (
//             <ThemedText>
//               The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
//               component provides a parallax effect for the header image.
//             </ThemedText>
//           ),
//         })}
//       </Collapsible>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   headerImage: {
//     color: '#808080',
//     bottom: -90,
//     left: -35,
//     position: 'absolute',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
// });


// import { Image } from 'expo-image';
// import { Platform, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
// import { useState } from 'react';

// import { Collapsible } from '@/components/ui/collapsible';
// import { ExternalLink } from '@/components/external-link';
// import ParallaxScrollView from '@/components/parallax-scroll-view';
// import { ThemedText } from '@/components/themed-text';
// import { ThemedView } from '@/components/themed-view';
// import { IconSymbol } from '@/components/ui/icon-symbol';
// import { Fonts } from '@/constants/theme';

// export default function TabTwoScreen() {
//   const [search, setSearch] = useState('');
//   const [liked, setLiked] = useState(false);

//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
//       headerImage={
//         <IconSymbol
//           size={310}
//           color="#808080"
//           name="sparkles"
//           style={styles.headerImage}
//         />
//       }>

//       {/* Title */}
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title" style={{ fontFamily: Fonts.rounded }}>
//           Explore
//         </ThemedText>
//       </ThemedView>

//       {/* Search Bar */}
//       <TextInput
//         placeholder="Search features..."
//         value={search}
//         onChangeText={setSearch}
//         style={styles.searchInput}
//       />

//       {/* Feature Card */}
//       <ThemedView style={styles.card}>
//         <ThemedText type="subtitle">🚀 App Features</ThemedText>
//         <ThemedText>
//           Discover powerful features built with Expo Router and React Native.
//         </ThemedText>

//         <TouchableOpacity
//           style={styles.likeButton}
//           onPress={() => setLiked(!liked)}>
//           <ThemedText>
//             {liked ? '❤️ Added to Favorites' : '🤍 Add to Favorites'}
//           </ThemedText>
//         </TouchableOpacity>
//       </ThemedView>

//       {/* Collapsible Sections */}
//       <Collapsible title="📁 File-based routing">
//         <ThemedText>
//           Routes are automatically created from files inside the app folder.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/router/introduction">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>

//       <Collapsible title="🌗 Light & Dark Mode">
//         <ThemedText>
//           This app adapts automatically based on system theme.
//         </ThemedText>
//       </Collapsible>

//       <Collapsible title="🎨 Images & Assets">
//         <Image
//           source={require('@/assets/images/react-logo.png')}
//           style={styles.image}
//         />
//       </Collapsible>

//       {Platform.OS === 'ios' && (
//         <Collapsible title="📱 iOS Exclusive">
//           <ThemedText>
//             Parallax header animations are enabled on iOS.
//           </ThemedText>
//         </Collapsible>
//       )}
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   headerImage: {
//     bottom: -90,
//     left: -35,
//     position: 'absolute',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
//   searchInput: {
//     borderWidth: 1,
//     borderRadius: 10,
//     padding: 10,
//     marginVertical: 12,
//   },
//   card: {
//     padding: 16,
//     borderRadius: 12,
//     marginBottom: 16,
//   },
//   likeButton: {
//     marginTop: 10,
//   },
//   image: {
//     width: 100,
//     height: 100,
//     alignSelf: 'center',
//   },
// });




import { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Image } from 'expo-image';

import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function ExploreScreen() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const searchGithubUser = async () => {
    if (!username) return;

    setLoading(true);
    setError('');
    setUserData(null);

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        throw new Error('User not found');
      }
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      setError('❌ GitHub user not found');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#0d1117', dark: '#0d1117' }}
      headerImage={
        <ThemedText style={styles.headerText}>GitHub Finder</ThemedText>
      }>

      {/* Search Input */}
      <TextInput
        placeholder="Enter GitHub username"
        value={username}
        onChangeText={setUsername}
        style={styles.input}
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={searchGithubUser}>
        <ThemedText style={styles.buttonText}>Search</ThemedText>
      </TouchableOpacity>

      {/* Loader */}
      {loading && <ActivityIndicator size="large" />}

      {/* Error */}
      {error !== '' && <ThemedText>{error}</ThemedText>}

      {/* User Profile */}
      {userData && (
        <ThemedView style={styles.card}>
          <Image
            source={{ uri: userData.avatar_url }}
            style={styles.avatar}
          />

          <ThemedText type="subtitle">
            {userData.name || userData.login}
          </ThemedText>

          <ThemedText>{userData.bio || 'No bio available'}</ThemedText>

          <ThemedView style={styles.stats}>
            <ThemedText>👥 Followers: {userData.followers}</ThemedText>
            <ThemedText>➡ Following: {userData.following}</ThemedText>
            <ThemedText>📦 Repos: {userData.public_repos}</ThemedText>
          </ThemedView>
        </ThemedView>
      )}
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 80,
    marginLeft: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginVertical: 12,
  },
  button: {
    backgroundColor: '#238636',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  card: {
    marginTop: 20,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  stats: {
    marginTop: 10,
    gap: 4,
  },
});

