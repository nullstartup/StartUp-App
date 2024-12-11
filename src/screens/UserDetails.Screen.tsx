import React from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Header} from '../components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';
import {colors} from '../theme/colors';
import {SvgImage} from '../components/SvgImage';
import {Button} from '../components/Button';
import {FlashList} from '@shopify/flash-list';
import {ConditionsCart, IConditionsCart} from '../components/ConditionsCart';
import {Steps, userDetails} from '../mock/ConditonsMock';

export const UserDetailsScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.userDetails>
> = ({navigation}) => {
  const renderItem = ({item}: {item: IConditionsCart}) => {
    return (
      <ConditionsCart
        titleColor={colors.black}
        title={item.title}
        description={item.description}></ConditionsCart>
    );
  };

  return (
    <ScrollView>
      <Header
        leftActionType="icon"
        onLeftPress={navigation.goBack}
        left={vectors.arrow_left}
        title="Advance Information"
        titleColor={colors.white}
        rightActionType="icon"
        right={vectors.human}
      />
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: 329,
            height: 341,
            alignItems: 'center',
          }}>
          <View
            style={{
              alignItems: 'center',
              marginTop: 21,
              width: 280,
              height: 141,
            }}>
            <SvgImage
              source={require('../assets/vectors/check.svg')}></SvgImage>
            <Text
              style={{color: colors.green.open, fontSize: 16, marginTop: 10}}>
              APPOINTMENT SCHEDULED
            </Text>
            <Text style={styles.description}>
              Your appointment is scheduled: Garita El Chaparra / Pedwest San
              Ysidro on 15 Nov 2024 at 20:00.
            </Text>
          </View>
          <View style={[styles.bottomText, {width: 329, height: 102}]}>
            <Text style={styles.text}>
              Your appointment ay a Port of Entry was successfully scheduled.
            </Text>
            <Text style={styles.text}>
              Please save your confirmation number(s). A confirmation email was
              sent to the email address you used to log in to CBP One.
            </Text>
          </View>
        </View>

        <Button
          style={styles.button}
          text="CANCEL APPOINTMENT"
          textColor={colors.red.line}></Button>
        <View style={styles.travelers}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Travelers</Text>
            <Text style={styles.headerText}>Confirmation Number</Text>
          </View>
          <View style={styles.travelersDesc}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
<<<<<<< HEAD
              <Text>Hasan Hasanov</Text>
              <Text>20376934</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Elxan Asadov</Text>
              <Text>20376935</Text>
=======
              <Text>Huseyn Huseynov</Text>
              <Text>20587233</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Huseyn Huseynov</Text>
              <Text>20587934</Text>
>>>>>>> 3c02766d4ac63b455afed918158bffa1bfec41f1
            </View>
            {/* <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text>Bugra Erdogan</Text>
              <Text>20376936</Text>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
<<<<<<< HEAD
              <Text>Davud Huseynov</Text>
              <Text>20376937</Text>
            </View>
=======
              <Text>Milana Hasanova</Text>
              <Text>20587916</Text>
            </View> */}
>>>>>>> 3c02766d4ac63b455afed918158bffa1bfec41f1
          </View>
        </View>
        <View style={styles.appointmentDetails}>
          <Text style={styles.appointmetHeader}>Appointment Details</Text>
          <View style={styles.appointmentDesc}>
            <FlashList data={userDetails} renderItem={renderItem}></FlashList>
          </View>
        </View>
        <View style={styles.appointmentDetails}>
          <Text style={styles.steps}>Next Steps</Text>
          <View style={styles.appointmentDesc}>
            <FlashList
              scrollEnabled={false}
              data={Steps}
              renderItem={({
                item,
                index,
              }: {
                item: IConditionsCart;
                index: number;
              }) => {
                const isLast = index === Steps.length - 1;
                return (
                  <ConditionsCart
                    id={item.id}
                    icon={item.icon}
                    titleColor={colors.black}
                    title={item.title}
                    description={item.description}
                    additoinalText={item.additoinalText}
                    additoinalTextTwo={item.additoinalTextTwo}
                    linkText={item.linkText}
                    isLast={isLast}
                    style={{marginVertical: 0}}
                  />
                );
              }}
              keyExtractor={(item, index) =>
                item.id ? item.id.toString() : index.toString()
              }
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  description: {
    width: 280,
    fontSize: 14,
    color: colors.gray.open,
    textAlign: 'center',
    marginTop: 11,
  },
  text: {
    fontSize: 14,
    color: colors.gray.open,
    fontWeight: '400',
  },
  bottomText: {
    gap: 20,
    marginTop: 30,
    width: 329,
    height: 102,
  },
  button: {
    borderRadius: 8,
    width: 328,
    alignSelf: 'center',
  },
  travelers: {
    width: '90%',
    height: 161,
    gap: 11,
    alignSelf: 'center',
    marginTop: 20,
  },
  header: {
    width: '100%',
    height: 40,
    backgroundColor: '#F2F2F2',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.bg.blue,
    paddingHorizontal: 6,
  },
  travelersDesc: {
    width: '90%',
    gap: 14,
    alignSelf: 'center',
  },
  appointmentDetails: {
    width: '90%',
    gap: 11,
    alignSelf: 'center',
    marginTop: 28,
  },
  appointmetHeader: {
    width: '100%',
    height: 40,
    backgroundColor: '#F2F2F2',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.bg.blue,
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appointmentDesc: {
    width: Dimensions.get('screen').width - 40,
  },
  steps: {
    width: '100%',
    height: 40,
    backgroundColor: '#F2F2F2',
    fontSize: 14,
    fontWeight: '600',
    color: colors.bg.blue,
    textAlignVertical: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
  },
});

const vectors = {
  arrow_left: {
    icon: require('../assets/vectors/arrow_left.svg'),
    width: 24,
    height: 24,
  },
  human: {
    icon: require('../assets/vectors/human.svg'),
    width: 24,
    height: 24,
  },
};
