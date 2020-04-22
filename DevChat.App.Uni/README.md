> 官网: [https://haomo-tech.com](https://haomo-tech.com)

> 作者: 毫末科技

> 邮箱: hxg@haomo-studio.com

## 预览

![预览图片](http://downloads.haomo-tech.com/uniapp/hm-friends-requests-card.png)

[在线效果预览](http://template.uniapp.haomo-tech.com/pages/haomo/test-component/hm-friends-requests-card)

更多毫末科技的uni-app跨端模板，请见[毫末科技uni-app跨端模板](https://haomo-tech.com/sale.html)

## 技术支持

* [uni-app插件市场](https://ext.dcloud.net.cn/plugin?id=1396)

* [npm包](https://www.npmjs.com/package/hm-uniapp-friends-requests-card)

* [github地址](https://github.com/haomo-studio/hm-uniapp-friends-requests-card)

* [gitee地址](https://gitee.com/haomo/hm-uniapp-friends-requests-card)

毫末科技将长期迭代本组件。需要技术支持，请进钉钉群：

<img width="250" src="http://downloads.haomo-tech.com/%E6%AF%AB%E6%9C%ABuniapp%E7%BB%84%E4%BB%B6%E6%8A%80%E6%9C%AF%E6%94%AF%E6%8C%81.jpg">

## 概述

毫末uni-app新闻卡片组件。支持H5/小程序(微信、支付宝、头条、百度、QQ)/App；组件可自适应各种屏幕大小的手机。

## 使用

请使用HBuilderX导入组件。

在script中引用：

```javascript
import HmFriendsRequestsCard from '@/components/hm-friends-requests-card/index.vue'
export default {
    components: {HmFriendsRequestsCard}
}
```

在template中使用：

```html
<template>
  <div class="test-component">
    <hm-friends-requests-card :options="options"></hm-friends-requests-card>
  </div>
</template>
<script>
import HmFriendsRequestsCard from '@/components/hm-components/hm-friends-requests-card/index.vue'

export default {
  components: {
    HmFriendsRequestsCard
    },
  data() {
    return {
      options: {
          friendRequest: '好友请求',
          titleClass:
            '/static/hm-friends-requests-card/images/img_24029_0_5.png',
          userpng:
            '/static/hm-friends-requests-card/images/img_24029_0_0.png',
          name: '张三',
          address1: '北京',
          userImage:
            '/static/hm-friends-requests-card/images/img_24029_0_3.png',
          name2: '王五',
          address2: '上海',
          erroimg:
            '/static/hm-friends-requests-card/images/img_24029_0_2.png',
          addimg:
            '/static/hm-friends-requests-card/images/img_24029_0_1.png',
          avator:
            '/static/hm-friends-requests-card/images/img_24029_0_4.png',
          name3: '艾山',
          address3: '广州'
        }
    };
  },
  methods: {
  }
};
</script>
<style>
</style>




```

## 属性说明

| 属性名        | 类型     | 默认值 | 说明                                                                       |
|-----------   |---------|--------|----------------------------------------------------------------------------|
| options        | Object  | -      | 卡片属性                                                                   |

options对象各个属性说明如下：

| 属性名        | 类型     | 默认值 | 说明                                                                       |
|-----------   |---------|--------|----------------------------------------------------------------------------|
| friendRequest        | String  | -      | 标题                                                                  |
| titleClass        | String  | -      | 图片                                                                  |
| userpng        | String  | -      | 图片                                                                   |
| userImage        | String  | -      | 图片                                                                   |
| erroimg        | String  | -      | 图片                                                                   |
| addimg        | String  | -      | 图片                                                                   |
| avator        | String  | -      | 图片                                                                   |
| name        | String  | -      | 名字                                                                   |
| name2        | String  | -      | 名字                                                                   |
| name3        | String  | -      | 名字                                                                   |
| address1        | String  | -      | 地址                                                                   |
| address2       | String  | -      | 地址                                                                   |
| address3        | String  | -      | 地址                                                                   |



## 事件说明


## 更新日志

### 0.0.1(2020-03-10)

* 完成第一个版本
