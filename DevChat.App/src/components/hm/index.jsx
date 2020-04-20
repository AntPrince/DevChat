'use strict';

import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

import styles from './style.js';

import titleIcon from './images/img_24398_0_0.png'

class HmGroupInfoCard extends Component {
  constructor(props) {
    super(props);
    let defaultState = {
      titleText: '群组名称',
      titleIcon,
      detail: '介绍',
      memberAText: 'KJ',
      memberBText: 'MY',
      memberCText: 'FR',
      memberDText: 'LW',
      members: '+ 12 成员'
    };
    this.state = Object.assign(defaultState, JSON.parse(JSON.stringify(props)));
  }

  render() {
    return (
      <View style={styles.hmGroupInfoCard}>
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.titleText}>{this.state.titleText}</Text>
            <Image style={styles.titleIcon} src={this.state.titleIcon} />
          </View>
          <Text style={styles.detail}>{this.state.detail}</Text>
          <View style={styles.bottom}>
            <View style={styles.memberA}>
              <Text style={styles.memberAText}>{this.state.memberAText}</Text>
            </View>
            <View style={styles.memberB}>
              <Text style={styles.memberBText}>{this.state.memberBText}</Text>
            </View>
            <View style={styles.memberC}>
              <Text style={styles.memberCText} key={'member-c-text'}>
                {this.state.memberCText}
              </Text>
            </View>
            <View style={styles.memberD}>
              <Text style={styles.memberDText}>{this.state.memberDText}</Text>
            </View>
            <Text style={styles.members}>{this.state.members}</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default HmGroupInfoCard;
