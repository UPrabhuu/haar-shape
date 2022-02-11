/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {
  I18nManager,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Swiper from 'react-native-swiper';
import Color from 'color';

// import utils
import getImgSource from '../../utils/getImgSource.js';

// import components
import Button from '../../components/buttons/Button';
import {Caption, Heading5, SmallText} from '../../components/text/CustomText';
import Icon from '../../components/icon/Icon';
import SizePicker from '../../components/pickers/SizePicker';
import TouchableItem from '../../components/TouchableItem';

// import colors
import Colors from '../../theme/colors';


// ProductA Config
const isRTL = I18nManager.isRTL;
const IOS = Platform.OS === 'ios';
const MINUS_ICON = IOS ? 'ios-remove' : 'md-remove';
const PLUS_ICON = IOS ? 'ios-add' : 'md-add';
const FAVORITE_ICON = IOS ? 'ios-star' : 'md-star';
const CLOSE_ICON = IOS ? 'ios-close' : 'md-close';
const imgHolder = require('../../assets/img/imgholder.png');

// ProductA Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  swiperContainer: {
    width: '100%',
    height: 228,
  },
  paginationStyle: {
    bottom: 12,
    transform: [{scaleX: isRTL ? -1 : 1}],
  },
  dot: {backgroundColor: Colors.background},
  activeDot: {backgroundColor: Colors.primaryColor},
  slideImg: {
    width: '100%',
    height: 228,
    resizeMode: 'cover',
  },
  topButton: {
    position: 'absolute',
    top: 16,
    borderRadius: 18,
    backgroundColor: Colors.background,
  },
  left: {left: 16},
  right: {right: 16},
  buttonIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 36,
    height: 36,
  },
  favorite: {
    backgroundColor: Colors.secondaryColor,
  },
  descriptionContainer: {
    paddingHorizontal: 16,
  },
  productTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 10,
  },
  productTitle: {
    fontWeight: '700',
  },
  priceText: {
    fontWeight: '700',
    fontSize: 18,
    color: Colors.primaryColor,
  },
  shortDescription: {
    paddingBottom: 8,
    textAlign: 'left',
  },
  pickerGroup: {
    marginTop: 24,
  },
  pickerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  caption: {
    width: 80,
    textAlign: 'left',
  },
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  amountButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  quantity: {
    top: -1,
    paddingHorizontal: 20,
    fontSize: 18,
    color: Colors.black,
    textAlign: 'center',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.secondaryColor,
  },
  bottomButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingBottom: 16,
    paddingHorizontal: 24,
  },
  buttonPriceContainer: {
    position: 'absolute',
    top: 0,
    left: 40,
    height: 48,
    justifyContent: 'center',
  },
  buttonPriceText: {
    fontSize: 16,
    lineHeight: 18,
    color: Colors.onPrimaryColor,
  },
  caption: {
    padding: 16,
    fontWeight: '700',
    textAlign: 'left',
  },
  dishContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    height: 56,
  },
  indicator: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  emptyIndicator: {
    marginRight: 24,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Color(Colors.black).alpha(0.4),
    backgroundColor: Colors.background,
  },
  filledIndicator: {
    marginRight: 24,
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    backgroundColor: Colors.primaryColor,
  },
  dishName: {
    top: -1,
    lineHeight: 22,
  },
  dishPrice: {
    color: Colors.secondaryText,
  },
});

// ProductA
export default class HsProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {
        images: [
          require('../../assets/img/pizza_3.jpg'),
          require('../../assets/img/pizza_1.jpg'),
          require('../../assets/img/pizza_2.jpg'),
        ],
        name: 'Pandiyan Salon',
        description:
          'Q-90, 4th Main Rd, Block Q, Anna Nagar, Chennai, Tamil Nadu 600040, India',
        price: 10.9,
        quantity: 1,
        servingSize: 1,
        sideDish: 20,
        total: 10.9,
      },
      extras: [
        {name: 'Hair cut ', picked: false, price: 50.0},
        {name: 'Hair Dye', picked: false, price: 100.0},
        {name: 'Massage', picked: false, price: 500.0},
        {name: 'coloring', picked: false, price: 100.0},
        {name: 'Hair cut', picked: false, price: 100.0},
      ],
      favorite: false,
    };
  }

  goBack = () => {
    const {navigation} = this.props;
    navigation.goBack();
  };

  onPressAddToFavorites = () => {
    const {favorite} = this.state;

    this.setState({
      favorite: !favorite,
    });
  };

  onPressIncreaseAmount = () => {
    const {product} = this.state;
    let {quantity} = product;
    const {servingSize} = product;

    quantity += 1;
    product.quantity = quantity;

    const total = quantity * product.price * servingSize;
    product.total = total;

    this.setState({
      product,
    });
  };

  onPressDecreaseAmount = () => {
    const {product} = this.state;
    let {quantity} = product;
    const {servingSize} = product;

    quantity -= 1;
    quantity = quantity < 1 ? 1 : quantity;
    product.quantity = quantity;

    const total = quantity * product.price * servingSize;
    product.total = total;

    this.setState({
      product,
    });
  };

  setServingSize = (servingSize) => () => {
    const {product} = this.state;
    const {quantity} = product;

    product.servingSize = servingSize;

    const total = quantity * product.price * servingSize;
    product.total = total;

    this.setState({
      product,
    });
  };

  setSideDish = (sideDish) => () => {
    const {product} = this.state;
    product.sideDish = sideDish;

    this.setState({
      product,
    });
  };
  setExtraDish = (item) => () => {
    const {product, extras} = this.state;
    const index = extras.indexOf(item);
    const picked = extras[index].picked;

    if (picked) {
      product.singleProductPrice -= item.price;
      product.total -= product.quantity * item.price;
    } else {
      product.singleProductPrice += item.price;
      product.total += product.quantity * item.price;
    }

    extras[index].picked = !picked;

    this.setState({
      product,
      extras: [...extras],
    });
  };

  render() {
    const {product, favorite,extras} = this.state;
    const {
      images,
      price,
      description,
      quantity,
      servingSize,
      sideDish,
      total,
    } = product;

    return (
      <SafeAreaView style={styles.screenContainer}>
        <StatusBar
          backgroundColor={Colors.statusBarColor}
          barStyle="dark-content"
        />
          <View style={styles.swiperContainer}>
            <Swiper
              loop={false}
              paginationStyle={styles.paginationStyle}
              activeDotStyle={styles.activeDot}
              dotStyle={styles.dot}
              index={isRTL ? images.length - 1 : 0}>
              {images.map((item, i) => (
                <Image
                  key={`image_${i}`}
                  defaultSource={imgHolder}
                  source={getImgSource(item)}
                  style={styles.slideImg}
                />
              ))}
            </Swiper>

            <View style={[styles.topButton, styles.left]}>
              <TouchableItem onPress={this.goBack} borderless>
                <View style={styles.buttonIconContainer}>
                  <Icon
                    name={CLOSE_ICON}
                    size={22}
                    color={Colors.secondaryText}
                  />
                </View>
              </TouchableItem>
            </View>

            <View
              style={[
                styles.topButton,
                styles.right,
                favorite && styles.favorite,
              ]}>
              <TouchableItem onPress={this.onPressAddToFavorites} borderless>
                <View style={styles.buttonIconContainer}>
                  <Icon
                    name={FAVORITE_ICON}
                    size={22}
                    color={
                      favorite ? Colors.onSecondaryColor : Colors.secondaryText
                    }
                  />
                </View>
              </TouchableItem>
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <View style={styles.productTitleContainer}>
              <Heading5 style={styles.productTitle}>{product.name}</Heading5>
             
            </View>
          </View>

          <View style={styles.descriptionContainer}>
            <SmallText style={styles.shortDescription}>{description}</SmallText>
          </View>
          <View>
              <Caption style={styles.caption}>CHOOSE THE SERVICES</Caption>
          </View>
          <ScrollView>
          <View>
              {extras.map((item, index) => (
                <TouchableItem
                  key={index.toString()}
                  onPress={this.setExtraDish(item)}
                  useForeground>
                  <View style={styles.dishContainer}>
                    <View style={styles.indicator}>
                      <View>
                        {item.picked ? (
                          <View style={styles.filledIndicator} />
                        ) : (
                          <View style={styles.emptyIndicator} />
                        )}
                      </View>

                      <Text style={styles.dishName}>{item.name}</Text>
                    </View>

                    <Text style={styles.dishPrice}>
                      {item.price.toFixed(2)}
                    </Text>
                  </View>
                </TouchableItem>
              ))}
            </View>
        </ScrollView>

        <View style={styles.amountContainer}>
          <View style={styles.amountButtonsContainer}>
            
          </View>
        </View>

        <View style={styles.bottomButtonContainer}>
          <Button onPress={this.goBack} title={'Add to Cart'.toUpperCase()} />
          <View style={styles.buttonPriceContainer}>
            <Text style={styles.buttonPriceText}>
              {`₹ ${total.toFixed(2)}`}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
