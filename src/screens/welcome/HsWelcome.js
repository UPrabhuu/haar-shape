/**
 * Food Delivery - React Native Template
 *
 * @format
 * @flow
 */

// import dependencies
import React, {Component} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View, Image} from 'react-native';

// import components
import ContainedButton from '../../components/buttons/ContainedButton';
import GradientContainer from '../../components/gradientcontainer/GradientContainer';
import LinkButton from '../../components/buttons/LinkButton';
import Logo from '../../components/logo/Logo';
import OutlinedButton from '../../components/buttons/OutlinedButton';
import {Paragraph} from '../../components/text/CustomText';


// import colors
import Colors from '../../theme/colors';

// WelcomeB Config
const headerImg = require('../../assets/img/HsWelcome.png');


// WelcomeB Styles
const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  buttonsGroup: {
    flex: 3,
    paddingHorizontal: 32,
    width: '100%',
  },
  vspace16: {
    height: 16,
  },
  vspace32: {
    height: 32,
  },
  linkButtonText: {
    color: Colors.white,
    textAlign: 'center',
  },
  Img: {
    width: 250,
    height: 100,
    resizeMode: 'cover',
  },
  center: {
    alignItems: 'center',
  },
  Textcolor: {
    color: Colors.white,
  },
});

// WelcomeB Screen
export default class HsWelcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  navigateTo = screen => () => {
    const {navigation} = this.props;
    navigation.navigate(screen);
  };

  render() {
    return (
      <GradientContainer>
        <StatusBar
          backgroundColor={Colors.primaryColor}
          barStyle="light-content"
        />
        <SafeAreaView style={styles.screenContainer}>
          <View style={styles.logoContainer}>
            <Image source={headerImg} style={styles.Img} />
            <Paragraph style={styles.Textcolor}>Book your Appointment. Quick and easy.</Paragraph>
            <Paragraph style={styles.Textcolor}>Choose your Style. Enjoy!.</Paragraph>
            <View style={styles.vspace32} />
          </View>

          <View style={styles.buttonsGroup}>
            <ContainedButton
              onPress={this.navigateTo('SignIn')}
              color={Colors.white}
              title={'Sign in'.toUpperCase()}
              titleColor={Colors.primaryColor}
            />

            <View style={styles.vspace16} />

            <OutlinedButton
              onPress={this.navigateTo('SignUp')}
              title={'sign up'.toUpperCase()}
              titleColor={Colors.white}
              rippleColor={'rgba(255, 255, 255, 0.32)'}
            />

            <View style={styles.vspace32} />

            <LinkButton
              title="Skip"
              onPress={this.navigateTo('HomeNavigator')}
              titleStyle={styles.linkButtonText}
            />
          </View>
        </SafeAreaView>
      </GradientContainer>
    );
  }
}
