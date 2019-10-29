import React from 'react';
import { Item, Input, Button, Icon, Text, View } from 'native-base';

//import { MinimumScale } from '../../utils/scales';
import { FormElementStyles } from '../styles/formElementStyles';

const RoundedInput = ({ value, onChange, placeholderText, backGroundColor, isShadowComponent = '', isBorder = '', isPasswordField = false, style, keyboardType = 'default', props }) =>
  (
    <Item fixedLabel
      style={[isBorder ? FormElementStyles.roundedBorderInputItem : FormElementStyles.roundedInputItem,
      isShadowComponent ? FormElementStyles.defaultShadow : '',
      FormElementStyles.roundedInputItem,
      //{ backgroundColor: backGroundColor },
      //{ borderRadius: FormElementStyles.roundedInputItem.borderRadius },
        style
      ]}>
      <Input style={[FormElementStyles.roundedInput,
      { height: FormElementStyles.roundedInput.height }
      ]}
        value={value}
        onChangeText={onChange}
        placeholderTextColor={FormElementStyles.placeholderTextColor.color}
        placeholder={placeholderText}
        keyboardType={keyboardType}
        secureTextEntry={isPasswordField} />
    </Item>
  );

const RoundedButton = ({ backGroundColor, iconName, isShadowComponent = true, buttonText = '', onSubmit, style, props }) =>
  (
    <Button iconRight
      full
      style={[isShadowComponent ? FormElementStyles.defaultShadow : '',
      FormElementStyles.roundedButtonItem,
      FormElementStyles.roundedButton,
      backGroundColor !== undefined ? { backgroundColor: backGroundColor } : '',
      //{ borderRadius: FormElementStyles.roundedButtonItem.borderRadius },
      //{ height: FormElementStyles.roundedButton.height },
        style
      ]}
      onPress={onSubmit} >
      <Text>
        {buttonText}
      </Text>
      <Icon name={iconName} />
    </Button>
  );
export {
  RoundedInput,
  RoundedButton
}
