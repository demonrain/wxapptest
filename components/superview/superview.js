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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    initData() {
      this.setData({
        children: this.data.jsonData.children,
        hasChild: this.data.jsonData.children.length>0?true:false
      });
      // console.log('tagid: ' + this.data.jsonData.entity.id +
      //   'tag: ' +this.data.jsonData.entity.tag +
      //   'children: ' +this.data.jsonData.children +
      //   'hasChild: ' +(this.data.jsonData.children.length>0?true:false))
    }
  },

  ready() {
    this.initData();
  }
})
