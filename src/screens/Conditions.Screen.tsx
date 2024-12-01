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
        descriptionStyle={{width: 327}}
        id={item.id}
        titleColor={colors.bg.blue}
        title={item.title}
        description={item.description}
        linkText={item.linkText}
        isLast={isLast}
        additoinalText={item.additoinalText}
        additoinalTextTwo={item.additoinalTextTwo}
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
      <ScrollView>
        <View style={styles.titleView}>
          <Text style={styles.title}>Welcome to our application!</Text>
          <Text style={styles.description}>
            By using this app, you agree to the following terms and conditions:
          </Text>
        </View>
        <View style={{marginLeft: 20, marginBottom: 20}}>
          <FlashList
            scrollEnabled={false}
            data={Conditions}
            renderItem={renderItem}
            keyExtractor={(item, index) =>
              item.id ? item.id.toString() : index.toString()
            }
          />
        </View>
      </ScrollView>

      <View style={styles.buttons}>
        <Button
          width={58}
          height={19}
          textColor={colors.bg.openBlue}
          style={styles.button}
          backgroundColor=""
          text="Decline"
          onPress={() => navigation.goBack()}
        />
        <Button
          width={58}
          height={19}
          style={styles.button}
          backgroundColor={colors.bg.openBlue}
          text="Accept"
          textColor={colors.white}
          onPress={toggleModal}
        />
      </View>

      {/* Modernized Modal Design */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleModal}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Sign In with login.gov</Text>
            <Text style={styles.modalMessage}>
              This allows the app and website to share information about you.
            </Text>
            <View style={styles.modalButtons}>
              <Button
                text="Cancel"
                textColor={colors.bg.openBlue}
                backgroundColor={colors.white}
                style={[styles.modalButton, styles.cancelButton]}
                onPress={toggleModal}
              />
              <Button
                text="Continue"
                textColor={colors.white}
                backgroundColor={colors.bg.openBlue}
                style={[styles.modalButton, styles.continueButton]}
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
    color: colors.bg.blue,
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
    borderColor: colors.bg.blue,
    borderRadius: 8,
  },

  // New Modal Styles
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Darker overlay for focus
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: colors.white,
    borderRadius: 16,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.bg.blue,
    marginBottom: 12,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 14,
    fontWeight: '400',
    // color: colors.grey,
    textAlign: 'center',
    marginBottom: 24,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  modalButton: {
    paddingVertical: 12,
    paddingHorizontal: 35,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 'auto',
    maxWidth: '100%',
  },
  cancelButton: {
    borderWidth: 1,
    borderColor: colors.bg.openBlue,
  },
  continueButton: {
    backgroundColor: colors.bg.openBlue,
  },
});

const vectors = {
  arrow_left: {
    icon: require('../assets/vectors/arrow_left.svg'),
    width: 24,
    height: 24,
  },
};
