(function (Scratch) {
  "use strict";

    if (!Scratch.extensions.unsandboxed) {
        alert("NOT Going to work Sandboxed here! Needs RAW PERMISSION")
        return
    }

  class WebSocksXin {
    constructor() {
      
    }
    
    getInfo() {
      const defaultValue = Scratch.translate({
        default: "websocksxin",
        description: "web socks xins local server controller",
      });
      return {
        id: "websockxin",
        name: "websocksxin",
        name: Scratch.translate("Web Socks Xin"),
        color1: "#ff0000ff",
        color2: "#33ff00ff",
        color3: "#006effff",
        blocks: [


        ]
      }
    }
  }

  Scratch.extensions.register(new WebSocksXin());
})(Scratch);
