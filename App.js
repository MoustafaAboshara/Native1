import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Image
          source={require('./assets/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        <Image
          source={require('./assets/home.png')}
          style={styles.homeImage}
          resizeMode="cover"
        />

        {/* Brands Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Brand</Text>

          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.brandScroll}
          >
            <Image
              source={require('./assets/brand1.png')}
              style={styles.brandImage}
              resizeMode="contain"
            />
            <Image
              source={require('./assets/brand2.png')}
              style={styles.brandImage}
              resizeMode="contain"
            />
            <Image
              source={require('./assets/brand3.png')}
              style={styles.brandImage}
              resizeMode="contain"
            />
          </ScrollView>
        </View>

        {/* New Section */}
        <View style={styles.section}>
          <View style={styles.newHeader}>
            <Text style={styles.sectionTitle}>New</Text>
            <Image
              source={require('./assets/logo.png')}
              style={styles.newLogo}
              resizeMode="contain"
            />
          </View>

          <View style={styles.postersContainer}>
            {[
              { img: require('./assets/new1.png') },
              { img: require('./assets/new2.png') },
              { img: require('./assets/new3.png') },
              { img: require('./assets/new4.jpg') },
            ].map((poster, index) => (
              <View key={index} style={styles.posterCard}>
                <Image source={poster.img} style={styles.posterImage} resizeMode="cover" />
                <Text style={styles.posterTitle}>Lego Star Wars Terrifying Tal</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    paddingBottom: 40,
  },
  container: {
    flex: 1,
    backgroundColor: '#F3F9FF',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  logo: {
    width: 124,
    height: 65,
    marginBottom: 20,
  },
  homeImage: {
    width: 344,
    height: 205,
    marginBottom: 30,
  },
  section: {
    width: '100%',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    textAlign: 'left',
  },
  brandScroll: {
    flexDirection: 'row',
    columnGap: 10,
    marginTop: 10,
  },
  brandImage: {
    width: 100,
    height: 100,
  },
  newHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    columnGap: 5,
  },
  newLogo: {
    width: 60,
    height: 30,
  },
  postersContainer: {
    rowGap: 15,
  },
  posterCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    padding: 10,
    alignItems: 'center',
  },
  posterImage: {
    width: 300,
    height: 350,
    borderRadius: 10,
  },
  posterTitle: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center',
  },
});
