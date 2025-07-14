(function (Scratch) {
  "use strict";

    if (!Scratch.extensions.unsandboxed) {
        alert("NOT Going to work Sandboxed here! Needs RAW PERMISSION")
        return
    }

    //Any other ASCII Non-Class codes goes here


  class WebSocksXin {
    constructor() {
        //Nothing Important yet
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


          "Server Config Blocks",


          {
            opcode: "CreateTempServerwarp",
            blockType: Scratch.BlockType.CONDITIONAL,
            text: "Create Temporary Server using",
          },

          {
            opcode: "actualjsdatatext",
            blockType: Scratch.BlockType.COMMAND,
            text: "A file JS Actual Application [JSURL]",
            arguments: {
              JSURL: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "dataURL Text or link",
              },
            },
          },
          {
            opcode: "nodejsfetch",
            blockType: Scratch.BlockType.COMMAND,
            text: "A Node JS file using [NODEFETCH]",
            arguments: {
              NODEFETCH: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "dataURL Text or link",
              },
            },
          },

          {
            opcode: "maxplayersetup",
            blockType: Scratch.BlockType.COMMAND,
            text: "Max Players set to [ROOMPLAYERLIMIT] / 30 -Do not go Over that-",
            arguments: {
              ROOMPLAYERLIMIT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "10",
              },
            },
          },

          {
            opcode: "usememoryusagelocal",
            blockType: Scratch.BlockType.COMMAND,
            text: "Only Add More bytes up to 1,128,000 WHen Runtime detects and continues using Memory usage only",
          },

          {
            opcode: "createlocalroomandserver",
            blockType: Scratch.BlockType.COMMAND,
            text: "Create local room and assign it 127.0.0.1.[YOURLOCALSERVERID] using web sucure [WEBSUCURE]",
            arguments: {
              YOURLOCALSERVERID: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "123456",
              },
              WEBSUCURE: {
                type: "string",
                menu: "websucuremenu",
              },
            },
          },

          {
            opcode: "disconnectthis",
            blockType: Scratch.BlockType.COMMAND,
            text: "From the currect server You're in Disconnect now?",
          },

          {
            opcode: "setusername",
            blockType: Scratch.BlockType.COMMAND,
            text: "Set your name to [NAME]",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "A name",
              },
            },
          },

          {
            opcode: "checkservercreated",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Server Created?",
          },

          {
            opcode: "connected",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Connected?",
          },

          {
            opcode: "disconnected",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Disconnected?",
          },

          {
            opcode: "myusername",
            blockType: Scratch.BlockType.REPORTER,
            text: "My Username",
          },

          {
            opcode: "newplayerinserver",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Did [NAME] joined your server?",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "A name",
              },
            },
          },

          {
            opcode: "noroomfound",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Failed because a temporary room magically dissapeared?",
          },

          {
            opcode: "checkroomexsists",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Search for Temporary room [SERVERPORT] Did it find it?",
            arguments: {
              SERVERPORT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "127.0.0.1.123456",
              },
            },
          },

          {
            opcode: "maxplayercheck",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Did Room server [SERVERPORT] Got cramped from [ROOMPLAYERLIMIT] Players MAX in it?",
            arguments: {
              SERVERPORT: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "127.0.0.1.123456",
              },
              ROOMPLAYERLIMIT: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: "10",
              },
            },
          },
          {
            opcode: "tempserverid",
            blockType: Scratch.BlockType.REPORTER,
            text: "Your Temporary server ID",
          },

          {
            opcode: "hostroomfinish",
            blockType: Scratch.BlockType.COMMAND,
            text: "From host only - End this Temporary server like it was never here",
          },

          {
            opcode: "playernamesserver",
            blockType: Scratch.BlockType.REPORTER,
            text: "All players Names in your server",
          },

          {
            opcode: "countplayersjoined",
            blockType: Scratch.BlockType.REPORTER,
            text: "Amount of Players Joined your server.",
          },

          "Playground Server Blocks",

          {
            opcode: "directdatasend",
            blockType: Scratch.BlockType.COMMAND,
            text: "Send Direct Data [DATA] To all players in your server.",
            arguments: {
              DATA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Hi There everyone",
              },
            },
          },

          {
            opcode: "sendmessageprivate",
            blockType: Scratch.BlockType.COMMAND,
            text: "Send Direct data to [NAME] with the message [DATA].",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "A name",
              },
              DATA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Want a secret?",
              },
            },
          },

          {
            opcode: "sendservervar",
            blockType: Scratch.BlockType.COMMAND,
            text: "Set Server Variable [VAR] in this room to [VARDATA].",
            arguments: {
              VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "New Variable",
              },
              VARDATA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Apples",
              },
            },
          },

          {
            opcode: "sendservervarprivate",
            blockType: Scratch.BlockType.COMMAND,
            text: "Set Server Variable [VAR] only to [NAME] in this room to [VARDATA].",
            arguments: {
              VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "New Variable",
              },

              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "A name",
              },
              VARDATA: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Apples",
              },
            },
          },

          {
            opcode: "serverupdateglobalvarhat",
            blockType: Scratch.BlockType.HAT,
            text: "When Server Variable [VAR] changes or updates",
            isEdgeActivated: false,
            arguments: {
              VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "New Variable",
              },
            },
          },

          {
            opcode: "serverupdatenamevarfilter",
            blockType: Scratch.BlockType.HAT,
            text: "When Server Variable [VAR] changes or updates Only to [NAME]",
            isEdgeActivated: false,
            arguments: {
              VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "New Variable",
              },
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "A name",
              },
            },
          },

          {
            opcode: "directdataupdatehat",
            blockType: Scratch.BlockType.HAT,
            text: "When Global Server Direct Data updates",
            isEdgeActivated: false,
          },

          {
            opcode: "namedirectdataonlychangehat",
            blockType: Scratch.BlockType.HAT,
            text: "When Direct Data only changes on [NAME]",
            isEdgeActivated: false,
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "A name",
              },
            },
          },

          {
            opcode: "servervarschangedbool",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Server Variable [VAR] Changed Data",
            arguments: {
              VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "New Variable",
              },
            },
          },

                    {
            opcode: "servervarsplayerchangedbool",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Server Variable [VAR] on username [NAME] Changed Data",
            arguments: {
              VAR: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "New Variable",
              },
                           NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "A name",
              },
            },
          },

          {
            opcode: "directdataglobalchangedbool",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Direct Data Global Changed",
          },

          {
            opcode: "certiannamedirectdatabool",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "Direct Data sent to [NAME] Changed",
            arguments: {
              NAME: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "A name",
              },
            },
          },

          {
            opcode: "roomupdateterminationcheck",
            blockType: Scratch.BlockType.BOOLEAN,
            text: "THe room I m In is Changed or deleted?",
          },

                                        {
            opcode: "usenodecodeurl",
            blockType: Scratch.BlockType.REPORTER,
            text: "Use the Default Node JS code URL",
          },

                                            {
            opcode: "websocketmemoryuse",
            blockType: Scratch.BlockType.REPORTER,
            text: "The server I'm in's Size usage",
          },
        ],
      };
    }

    CreateTempServerwarp() {
      //Add the code here
      throw new TypeError("To Use that you need to Place ALL Config Blocks to run and warp this. this may work without it as long if you got the correct blocks through");
    }

    actualjsdatatext() {
      //Add the code here
      throw new TypeError("Do not insert any Plain Text it must be Data URL or Link to OPEN SOURCE!")
    }

    nodejsfetch() {
      //Add the code here
      throw new TypeError("Do not insert any Plain Text it must use DATA URL or Link Really this block is useless use the -Actual JS Data Block-")
    }

    maxplayersetup() {
      //Add the code here
      throw new TypeError("You are using local VRAM and RAM so It has To be MAX 30 players per JSON or plain Text data. as the max Local size is 313,000 bytes")
    }

    usememoryusagelocal() {
      //Add the code here
      throw new TypeError("This block will use as much RAM or VRAM even packaged as EXE or HTML Memory usage NOTE - this Caps after 313,000 bytes is reached.")
    }

    createlocalroomandserver() {
      //Add the code here
      throw new TypeError("After you Use the Default JS code Data URL or Link open source this is where you get to use the last 6 DIGITS as a Server ID. Maybe 5 DIGITS if its restricted. It can by any 5 digit or 6 digit number.")
    }

    disconnectthis() {
      //Add the code here
      throw new TypeError("When a Player NOT Hosting the server they Disconnect leaving a Spot for other to connect if still on. BUT if the Host disconnects using that block THe Room and Server will be Fully Closed and Deleted.")
    }

    setusername() {
      //Add the code here
      throw new TypeError("You get to choose your username BUT Be careful They might not want Inapropriate Names.")
    }

    checkservercreated() {
      //Add the code here
      throw new TypeError("If you created a Server sucsussfully you will see true if it did not make it its false")
    }

    connected() {
      //Add the code here
      throw new TypeError("For both the host and Visitor or player true if works and false if fails. It auto true connects for Host when they create a server.")
    }

    disconnected() {
      //Add the code here
      throw new TypeError("If you got disconnected or the host did it returns true other than that its false")
    }

    myusername() {
      //Add the code here
      throw new TypeError("You get to see your username even the host gets to too. But the host and you are always required to set your username anyways.")
    }

    newplayerinserver() {
      //Add the code here
      throw new TypeError("If you type the correct name that joined your server you get true or false you get False fully if the value is the wrong name or its typo.")
    }

    noroomfound() {
      //Add the code here
      throw new TypeError("Magically Dissapeared means that they were not able to find the room active or if it was its Very fast to close that room almost instantly.")
    }

    checkroomexsists() {
      //Add the code here
      throw new TypeError("If the Server Port and ID is typed correctly and that room is active you get true returned. BUT even if it was a Closed Deleted room still gets false or even if it typed wrong. BUT it does require the full server port")
    }

    maxplayercheck() {
      //Add the code here
      throw new TypeError("If the value is over the rooms limit like say 20 players but it s maxed to 10 its for Sure True. But if its value = value max and it has 10 players out of 10 players thats also true but if its less than its False.")
    }

    tempserverid() {
      //Add the code here
      throw new TypeError("This is helpful for showing the Last 6 or 5 Digits of the Port ID think of it like Kahoot or Blooket. it does show the FULL port so you might need other extentions to replace it none")
    }

    hostroomfinish() {
      //Add the code here
      throw new TypeError("The HOST can ONLY do this block if it detects a Joined Player doing this. It ignores it. and this does exactly the same thing. Close and DELETE the Temporary server room.")
    }

    playernamesserver() {
      //Add the code here
      throw new TypeError("It shows a JSON list of player names but it only does [1 : name 1] I can not add the double brackets because that messes the message.")
    }

    countplayersjoined() {
      //Add the code here
      throw new TypeError("THis is also useful because in Kahoot or Blooket they need to track how many players are in the server. Plus you alrady have a block that does that this just helps for SHowing it.")
    }

    directdatasend() {
      //Add the code here
      throw new TypeError("This is a Announcement message block that will tell your message directly to all players that joined your server without needing to use VARS but only for 1 message per replace.")
    }

    sendmessageprivate() {
      //Add the code here
      throw new TypeError("This is a Wishper block message that will send a message to the name youre aiming on and It does have to be the correct name spelling.")
    }

    sendservervar() {
      //Add the code here
      throw new TypeError("You can create Hundreds and hundreds of Server vars for different data BUT NOT TOO MUCH because the Limit is 313,000 bytes and sometimes the Key : Value JSON can get a little large if sending too much. NOTE - Any var names the same replaces the value and replaces the Size")
    }

    sendservervarprivate() {
      //Add the code here
      throw new TypeError("YOu can send Hundreds of Private vars to a name But remember the limit is 313,000 bytes total But if any var names are the same replaces that value and replaces the Size taken. using key : value")
    }

    serverupdateglobalvarhat() {
      //Add the code here
      throw new TypeError("This is a NON EDGE ACTIVATED Hat because they raise Memory issues - This will fire and trigger whenever that EXACT Variable name data changes value or replaced it or update it")
    }

    serverupdatenamevarfilter() {
      //Add the code here
      throw new TypeError("This is a NON EDGE ACTIVATED HAT because they raise Memory issues - This will only trigger or fire whenever a certian player name and Variable name gets a different data.")
    }

    directdataupdatehat() {
      //Add the code here
      throw new TypeError("This is a NON EDGE ACTIVATED HAT because it causes memory issues - This will only trigger and fire if any Announcement data is changed replaced or said")
    }

    namedirectdataonlychangehat() {
      //Add the code here
      throw new TypeError("This is a NON EDGE ACTIVATED BLOCK HAT because it raises memory concerns - This block only Fires or triggeres if a Certian Name got something new or data changed from that name")
    }

    servervarschangedbool() {
      //Add the code here
      throw new TypeError("This Will return true for 1 second then back to false this only says true if The exact Variable name Global only changes value or updates")
    }

        servervarsplayerchangedbool() {
      //Add the code here
      throw new TypeError("This Will return true for 1 second then back to false this only says true if The exact Variable name private only changes value or updates")
    }

    directdataglobalchangedbool() {
      //Add the code here
      throw new TypeError("This will return true for 1 second then false this only says true if the annoumcent is changed")
    }

    certiannamedirectdatabool() {
      //Add the code here
      throw new TypeError("This will say true for 1 second but then back to false this only triggeres when a Wishper to a player name is told and changed")
    }

    roomupdateterminationcheck() {
      //Add the code here
      throw new TypeError("This boolean helps because when you are connected to a room and the room suddenly goes off or disconnected or Deleted it will say true and stays True until you disconnect fully.  ")
    }

    usenodecodeurl() {
      //Add the code here
      throw new TypeError("THe Node JS code will be soon given as Raw JS Not ASCII this needs it to run the server and get the libary the package JSON will be needed as well.")
    }

        websocketmemoryuse() {
      //Add the code here
      throw new TypeError("It returns a value of how much out of 1,128,000 bytes its using when it s on 1,128,000 bytes it also adds and joins MAX USAGE. but says it this way 1128000")
    }
  }
  Scratch.extensions.register(new WebSocksXin());
})(Scratch);
