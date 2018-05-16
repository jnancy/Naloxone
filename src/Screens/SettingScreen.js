import React from 'react';
import { Text, View } from 'react-native';
import styles from '../Style/Style.js';
import SettingButton from '../Components/SettingButton';
import SettingHeader from '../Components/SettingHeader.js';
import SettingLine from '../Components/SettingLine.js';
import MarkerCallout from '../Components/MarkerCallout.js';

export default class SettingsScreen extends React.Component {

    constructor() {
      super();
      this.state = {
         switchValue: false,
         switchValueNoti: false,
      }
   }
  
    toggleSwitch = (value) => {
      this.setState({switchValue: value})
      console.log('Switch is: ' + value);
   }
  
   toggleSwitchNoti = (value) => {
     this.setState({switchValueNoti: value})
     console.log('Notifications is: ' + value);
   }
  
    render() {
      return (
        <View style={{ flex: 1}}>
          <View style = {{ height: 75, backgroundColor: 'rgba(70, 130, 180, 0.8)', justifyContent: 'flex-end'}}>
            <Text style= {{left: 20, bottom: 10, color: 'white', fontSize: 30}}>
              Settings
            </Text>
          </View>
          <SettingHeader
            title = {'General'}
          />
          <SettingLine/>
          <SettingButton
            title = {'Kit Holder'}
            toggleSwitch = {this.toggleSwitch}
            switchValue = {this.state.switchValue}
            description = {'You regularly have a Naloxone kit on you and is ready to be administered'}
            blockIcon = {"md-medkit"}
            iconColor = {"red"}
          />
          <SettingButton
            title = {'Notifications'}
            toggleSwitch = {this.toggleSwitchNoti}
            switchValue = {this.state.switchValueNoti}
            description = {'Reviece notifications when distress calls are issued.'}
            blockIcon = {"md-notifications"}
            iconColor = {"skyblue"}
            isDisabled = {!this.state.switchValue}
          />
        </View>
      );
    }
  }