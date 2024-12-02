import React, {useState, useRef} from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Header} from '../components/Header';
import {colors} from '../theme/colors';
import {FlashList} from '@shopify/flash-list';
import {ConditionsCart, IConditionsCart} from '../components/ConditionsCart';
import {advanceInformation} from '../mock/ConditonsMock';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {NavigationParamList} from '../types/navigation.type';
import {Routes} from '../router/routes';
import {Button} from '../components/Button';
import Captcha, {CaptchaRef} from 'react-native-simple-text-captcha';

export const AdvanceInformationScreen: React.FC<
  NativeStackScreenProps<NavigationParamList, Routes.advanceInformation>
> = ({navigation}) => {
  const captchaRef = useRef<CaptchaRef>(null);
  const [captcha, setCaptcha] = useState('');
  const [validateResult, setValidateResult] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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
        titleColor={colors.black}
        title={item.title}
        description={item.description}
        additoinalText={item.additoinalText}
        additoinalTextTwo={item.additoinalTextTwo}
        linkText={item.linkText}
        isLast={isLast}
      />
    );
  };

  const handleContinuePress = () => {
    setModalVisible(true);
  };

  const handleVerifyPress = () => {
    setLoading(true);
    const check = captchaRef.current?.validateCaptcha(captcha);

    setTimeout(() => {
      setLoading(false);
      if (check) {
        setModalVisible(false);
        navigation.navigate(Routes.userList);
      } else {
        setValidateResult('Enter Valid Captcha Incorrect');
      }
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <Header
        leftActionType="icon"
        onLeftPress={navigation.goBack}
        left={vectors.arrow_left}
        title="Advance Information"
        titleColor={colors.white}
        rightActionType="icon"
        right={vectors.human}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{left:20,marginTop: 20}}>
        <Text style={styles.text}>INSTRUCTIONS</Text>
        <FlashList
          scrollEnabled={false}
          data={advanceInformation}
          renderItem={renderItem}
          keyExtractor={(item, index) =>
            item.id ? item.id.toString() : index.toString()
          }
        />
      </ScrollView>
      <Button
        text="Continue"
        backgroundColor={colors.bg.blue}
        textColor={colors.white}
        style={styles.button}
        onPress={handleContinuePress}
      />

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          {loading ? (
            <Image
              style={styles.loadingImage}
              source={require('../assets/images/departmentLogo.png')}
            />
          ) : (
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>
                Enter the matching letters and numbers
              </Text>
              <Captcha ref={captchaRef} />
              <View style={styles.rowContainer}>
                <TextInput
                  style={styles.input}
                  value={captcha}
                  onChangeText={setCaptcha}
                  cursorColor={'#333'}
                  placeholder="Enter match"
                  autoCapitalize="none"
                />
                <TouchableOpacity
                  style={styles.verifyButton}
                  onPress={handleVerifyPress}>
                  <Text style={styles.buttonText}>Verify</Text>
                </TouchableOpacity>
              </View>
              <Text>{validateResult}</Text>
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.bg.blue,
    paddingTop: 18,
    marginLeft: 20,
    paddingBottom: 20,
  },
  button: {
    borderRadius: 8,
    width: 328,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 10,
    width: 300,
    alignItems: 'center',
    height: 220,
  },
  loadingImage: {
    width: 260,
    height: 260,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.bg.blue,
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  verifyButton: {
    backgroundColor: colors.bg.blue,
    padding: 10,
    borderRadius: 5,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 16,
  },
  modalText: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 13,
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
