'use strict';

import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

import styles from './style.js';

import avatar from './images/ava.jpg'
import moreInfo from './images/img_24031_0_0.png'

class HmFriendInformationCard extends Component {
  constructor(props) {
    super(props);
    let defaultState = {
      avatar,
      name: '张三',
      moreInfo,
      address: '深圳'
    };
    this.state = Object.assign(defaultState, JSON.parse(JSON.stringify(props)));
  }

  render() {
    return (
      <View style={styles.hmFriendInformationCard}>
        <View style={styles.box}>
          {true && <Image style={styles.avatar} src={this.state.avatar} />}
          {true && (
            <View style={styles.side}>
              {true && (
                <View style={styles.namClass}>
                  <Text style={styles.name}>{this.state.name}</Text>
                </View>
              )}
              {true && <Image style={styles.moreInfo} src={this.state.moreInfo} />}
              {true && <Text style={styles.address}>{this.state.address}</Text>}
            </View>
          )}
        </View>
      </View>
    );
  }
}
export default HmFriendInformationCard;
