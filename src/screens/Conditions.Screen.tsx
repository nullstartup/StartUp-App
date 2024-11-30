import {Modal, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Header} from '../components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';
import {FlashList} from '@shopify/flash-list';
import {ConditionsCart, IConditionsCart} from '../components/ConditionsCart';
import {Conditions, advanceInformation} from '../mock/ConditonsMock';
import {Button} from '../components/Button';
import {colors} from '../theme/colors';

export const ConditionsScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.conditions>
> = ({navigation}) => {
  const renderItem = ({
    item,
    index,
  }: {
    item: IConditionsCart;
    index: number;
  }) => {
    const isLast = index === advanceInformation.length - 1;
    return (
      <ConditionsCart
        id={item.id}
        titleColor={colors.bg.blue}
        title={item.title}
        description={item.description}
        isLast={isLast}
      />
    );
  };

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Header
        leftActionType="icon"
        onLeftPress={navigation.goBack}
        left={vectors.arrow_left}
        title="Terms & Conditions"
        titleColor={colors.white}
      />
      <View style={styles.titleView}>
        <Text style={styles.title}>Welcome to our application!</Text>
        <Text style={styles.description}>
          By using this app, you agree to the following terms and conditions:
        </Text>
      </View>
      <ScrollView style={{marginLeft: 20}}>
        <FlashList
          scrollEnabled={false}
          data={Conditions}
          renderItem={renderItem}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
        />
      </ScrollView>
      <View style={styles.buttons}>
        <Button
          width={58}
          height={19}
          textColor="#0266B3"
          style={styles.button}
          backgroundColor=""
          text="Decline"
          onPress={() => navigation.goBack()}></Button>
        <Button
          width={58}
          height={19}
          style={styles.button}
          backgroundColor="#0266B3"
          text="Accept"
          textColor="#fff"
          onPress={toggleModal}></Button>
        <Modal
          visible={isModalVisible}
          transparent={true}
          animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                “CBP One” Wants to Use “login.gov” to Sign In
              </Text>
              <Text style={{textAlign: 'center'}}>
                This allows the app and website to share information about you.
              </Text>
              <View style={styles.modalButtons}>
                <Button
                  style={styles.modalButtonOne}
                  text="Cancel"
                  textColor="#0266B3"
                  onPress={toggleModal}
                />
                <Button
                  textColor="#fff"
                  backgroundColor="#0266B3"
                  style={styles.modalButtonTwo}
                  text="Continue"
                  onPress={() => {
                    toggleModal();
                    setTimeout(() => navigation.navigate(Routes.register), 300);
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleView: {
    alignItems: 'center',
    marginTop: 22,
  },
  title: {
    color: '#00497C',
    fontSize: 20,
    fontWeight: '600',
  },
  description: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 14,
    width: 319,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  button: {
    borderWidth: 1,
    borderColor: '#0266B3',
    borderRadius: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalButtonOne: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderColor: '#0266B3',
    fontSize: 12,
    fontWeight: '400',
  },
  modalButtonTwo: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 32,
    marginLeft: 13,
    borderColor: '#0266B3',
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: 13,
    alignItems: 'center',
  },
});

const vectors = {
  arrow_left: {
    icon: require('../assets/vectors/arrow_left.svg'),
    width: 24,
    height: 24,
  },
};
