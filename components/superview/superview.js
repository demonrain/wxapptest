// components/superview/superview.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hasChild: Boolean,
    children: Array,
    jsonData: Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    // isInited: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    initData() {
      var hasChild = this.data.isInited?(this.data.jsonData.length>0?true:false):([this.data.jsonData].length>0?true:false);
      if(hasChild) {
        this.setData({
          //如果不是数组先转成数组 root问题
          children: this.data.jsonData.length?this.data.jsonData:[this.data.jsonData],
          hasChild: hasChild
        });
      }else {
        return;
      }
    }
  },

  ready() {
    this.initData();
  }
})
