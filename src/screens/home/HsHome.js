/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

// import utils
import getImgSource from '../../utils/getImgSource.js';

// import components
import Divider from '../../components/divider/Divider';
import LinkButton from '../../components/buttons/LinkButton';
import ProductCard from '../../components/cards/HsProductCard';
import {Heading6} from '../../components/text/CustomText';

// import colors
import Colors from '../../theme/colors';

// HomeB Config
const imgHolder = require('../../assets/img/imgholder.png');

// HomeB Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  container: {
    flex: 1,
  },
  categoriesContainer: {
    paddingBottom: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  titleText: {
    fontWeight: '700',
  },
  viewAllText: {
    color: Colors.primaryColor,
  },
  categoriesList: {
    paddingTop: 4,
    paddingRight: 16,
    paddingLeft: 8,
  },
  categoryContainer: {
    marginLeft: 8,
    width: 112,
    height: 112,
  },
  categoryThumbnail: {
    borderRadius: 8,
    width: '100%',
    height: '100%',
  },
  categoryImg: {
    borderRadius: 8,
  },
  categoryName: {
    position: 'absolute',
    top: 6,
    left: 6,
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 14,
    backgroundColor: 'rgba(128, 128, 128, 0.84)',
  },
  categoryNameText: {
    fontWeight: '700',
    color: Colors.white,
    letterSpacing: 0.6,
  },
});

// HomeB
export default class HomeB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [
        {
          key: 1,
          imageUri: require('../../assets/img/pizza_3.jpg'),
          name: 'Mens salon',
        },
        {
          key: 2,
          imageUri: require('../../assets/img/meat_1.jpg'),
          name: 'Beauty Parlor',
        },
        {
          key: 3,
          imageUri: require('../../assets/img/spaghetti_2.jpg'),
          name: 'Unisex Salon',
        },
        {
          key: 4,
          imageUri: require('../../assets/img/spaghetti_2.jpg'),
          name: 'Massage Center',
        },
        
      ],
      products: [
        {
          imageUri: require('../../assets/img/pizza_1.jpg'),
          name: 'Pandian Salon',
          description:
            'Q-90, 4th Main Rd, Block Q, Anna Nagar, Chennai, Tamil Nadu 600040, India',
        },
        {
          imageUri: require('../../assets/img/sandwich_2.jpg'),
          name: 'Envi Salon and Spa',
          description:
            'G40A, Lower Ground Floor, Phoenix Marketcity Mall, Velachery Bypass Rd, Indira Gandhi Nagar, Velachery, Chennai',
        },
        {
          imageUri: require('../../assets/img/cake_1.jpg'),
          name: '24K LUXURY SALON',
          description: '32, Ram Chambers, 2nd Floor, CASA Major Rd, Egmore, Chennai, Tamil Nadu 600008, India',
        },
        {
          imageUri: require('../../assets/img/soup_1.jpg'),
          name: 'LUXE SIGNATURE SALON',
          description:
            '9,Gandhi street, Chitlapakkam Main Rd, next to Loyola school, Chennai, Tamil Nadu 600064, India',
        },
      ],
    };
  }

  navigateTo = screen => () => {
    const {navigation} = this.props;
    navigation.navigate(screen);
  };

  onPressRemove = item => () => {
    let {quantity} = item;
    quantity -= 1;

    const {products} = this.state;
    const index = products.indexOf(item);

    if (quantity < 0) {
      return;
    }
    products[index].quantity = quantity;

    this.setState({
      products: [...products],
    });
  };

  onPressAdd = item => () => {
    const {quantity} = item;
    const {products} = this.state;

    const index = products.indexOf(item);
    products[index].quantity = quantity + 1;

    this.setState({
      products: [...products],
    });
  };

  keyExtractor = (item, index) => index.toString();

  renderProductItem = ({item, index}) => (
    <ProductCard
      onPress={this.navigateTo('Product')}
      onPressRemove={this.onPressRemove(item)}
      onPressAdd={this.onPressAdd(item)}
      key={index}
      activeOpacity={0.7}
      imageUri={item.imageUri}
      title={item.name}
      price={item.price}
      description={item.description}
      quantity={item.quantity}
      swipeoutDisabled
    />
  );

  renderSeparator = () => <Divider />;

  render() {
    const {categories, products} = this.state;

    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />

        <View style={styles.container}>
          <ScrollView>
            <View style={styles.categoriesContainer}>
              <View style={styles.titleContainer}>
                <Heading6 style={styles.titleText}>Categories</Heading6>
                <LinkButton
                  title="View all"
                  titleStyle={styles.viewAllText}
                  onPress={this.navigateTo('Categories')}
                />
              </View>

              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesList}>
                {categories.map(category => (
                  <TouchableOpacity
                    activeOpacity={0.7}
                    key={category.key}
                    onPress={this.navigateTo('Category')}>
                    <View style={styles.categoryContainer}>
                      <ImageBackground
                        defaultSource={imgHolder}
                        source={getImgSource(category.imageUri)}
                        style={styles.categoryThumbnail}
                        imageStyle={styles.categoryImg}>
                        <View style={styles.categoryName}>
                          <Text style={styles.categoryNameText}>
                            {category.name}
                          </Text>
                        </View>
                      </ImageBackground>
                    </View>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

           
          </ScrollView>
          <View style={styles.titleContainer}>
              <Heading6 style={styles.titleText}>Popular</Heading6>
              <LinkButton
                title="View all"
                titleStyle={styles.viewAllText}
                onPress={this.navigateTo('SearchResults')}
              />
            </View>

            <FlatList
              data={products}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderProductItem}
              ItemSeparatorComponent={this.renderSeparator}
            />
        </View>
      </SafeAreaView>
    );
  }
}
