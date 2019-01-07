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
      // if(this.data.isInited) {
      //   this.setData({
      //     hasChild: this.data.children.length>0?true:false
      //   });
      // }else {
        if(this.data.jsonData.length>0) {
          this.setData({
            children: this.data.jsonData,
            hasChild: this.data.jsonData.length>0?true:false
          });
        }else {
          return;
        }

      // }
      // this.data.isInited = true;
      console.log(
        'children: ' +this.data.jsonData +
        'hasChild: ' +(this.data.jsonData.length>0?true:false))
    }
  },

  ready() {
    this.initData();
  }
})
