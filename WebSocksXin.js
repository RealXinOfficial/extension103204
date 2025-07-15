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
          {
            opcode: "loadservercode",
            blockType: Scratch.BlockType.COMMAND,
            text: "Load server file from URL [JSURL]",
            arguments: {
              JSURL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://raw.githubusercontent.com/yourname/server/main/server.js"
              }
            }
          }

        ]
      }
    }

    loadservercode(args) {
  const url = args.JSURL;

  if (!url || typeof url !== "string") {
    throw new Error("Missing server JS URL.");
  }

  if (!url.startsWith("http") && !url.startsWith("data:")) {
    throw new Error("URL must be a valid GitHub RAW link or Data URL.");
  }

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error("Failed to load server file.");
      return res.text();
    })
    .then(code => {
      const blob = new Blob([code], { type: "application/javascript" });
      const blobURL = URL.createObjectURL(blob);
      window._WebSocksXinRuntime = window._WebSocksXinRuntime || {};
      window._WebSocksXinRuntime.blobURL = blobURL;
      window._WebSocksXinRuntime.serverCode = code;
      console.log("[WebSocksXin] Server file loaded and stored.");
    })
    .catch(err => {
      console.error("[WebSocksXin] Error loading server code:", err);
      alert("Could not load server code. Check the URL or file.");
    });
}
  }

  Scratch.extensions.register(new WebSocksXin());
})(Scratch);
