import Taro from '@tarojs/taro';
export default {
  hmFriendInformationCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Taro.pxTransform(750),
    height: Taro.pxTransform(312)
  },
  box: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: Taro.pxTransform(39),
    boxShadow: '0px 10px 30px rgba(209, 213, 223, 0.50)',
    backgroundColor: '#5351fb',
    width: Taro.pxTransform(721),
    height: Taro.pxTransform(234)
  },
  avatar: {
    borderRadius: Taro.pxTransform(58),
    width: Taro.pxTransform(117),
    height: Taro.pxTransform(117),
    overflow: 'hidden'
  },
  side: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: Taro.pxTransform(29),
    height: Taro.pxTransform(117)
  },
  namClass: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    width: Taro.pxTransform(452),
    height: Taro.pxTransform(43)
  },
  name: {
    opacity: 1,
    marginLeft: Taro.pxTransform(10),
    maxWidth: Taro.pxTransform(372),
    height: Taro.pxTransform(43),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: Taro.pxTransform(43),
    whiteSpace: 'nowrap',
    color: '#ffffff',
    fontSize: Taro.pxTransform(35),
    fontWeight: 400
  },
  moreInfo: {
    marginTop: Taro.pxTransform(2),
    marginLeft: Taro.pxTransform(417),
    width: Taro.pxTransform(35),
    height: Taro.pxTransform(8)
  },
  address: {
    opacity: 1,
    maxWidth: Taro.pxTransform(493),
    height: Taro.pxTransform(47),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: Taro.pxTransform(47),
    whiteSpace: 'nowrap',
    color: '#ffffff',
    fontSize: Taro.pxTransform(31),
    fontWeight: 400
  }
};
