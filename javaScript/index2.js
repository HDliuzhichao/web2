 //放大镜
;(function(){ 
  var EventUtil,Get,Element; 
  EventUtil = {
    addHandler: function(ele, type, handler) {
      if (ele.addEventListener) {
        ele.addEventListener(type, handler, false)
      } else if (ele.attachEvent) {
        ele.attachEvent("on" + type, handler)
      } else {
        ele["on" + type] = handler;
      }
    },
    removeHandler: function(element, type, handler) {
      if (element.removeEventListener) {
        element.removeEventListener(type, handler, false);
      } else if (element.detachEvent) {
        element.detachEvent("on" + type, handler);
      } else {
        element["on" + type] = null;
      }
    },
    getEvent: function(event) {
      return event ? event : window.event;
    },
    getTarget: function(event) {
      return event.target || event.srcElement;
    },
    preventDefault: function(event) {
      if (event.preventDefault) {
        event.preventDefault();
      } else {
        event.returnValue = false;
      }
    },
    stopPropagation: function(event){
          if (event.stopPropagation){
              event.stopPropagation();
          } else {
              event.cancelBubble = true;
          }
      } 
};
