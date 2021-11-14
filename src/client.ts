import axios from "axios";
// import { mockGetNodeAsPng, mockGetPages } from "./api/mocks";
import { store } from "./store";
import router from './routes'
export class Client {
  client: any;
  fileId = "";
  pages = {
    //     "0:1": "Thumbnail",
    //     "4015:8402": "Fonts",
    //     "1852:6065": "Feedback",
    //     "755:125": "Accordion",
    //     "1136:3613": "Activity Timeline",
    //     "338:0": "Avatar",
    //     "1098:822": "Alert",
    //     "338:417": "Badge",
    //     "1433:797": "Brand Band",
    //     "1006:203": "Breadcrumb",
    //     "216:33": "Button",
    //     "257:187": "Button Group",
    //     "274:66": "Button Icon",
    //     "741:0": "Card",
    //     "1136:5197": "Carousel",
    //     "1390:0": "Chat",
    //     "764:6": "Checkbox",
    //     "1075:155": "Checkbox Button",
    //     "1075:0": "Checkbox Toggle",
    //     "3210:0": "Color Picker",
    //     "918:288": "Combobox",
    //     "1087:0": "Counter",
    //     "764:0": "Data Table",
    //     "1101:3092": "Datepicker",
    //     "1263:4310": "Docked Composer",
    //     "1379:5086": "Docked Utility Bar",
    //     "1108:3041": "Dueling Picklist",
    //     "1338:0": "Empty State",
    "1136:4805": "Expandable Section",
    "1282:0": "Expression",
    "1402:42": "Feed",
    "918:153": "Field Label",
    "1395:319": "Files",
    "1160:0": "File Selector",
    "1125:558": "Global Header",
    "1140:3480": "Global Navigation",
    "756:88": "Input",
    "1027:1825": "Listbox",
    "1233:4140": "List Builder",
    "1438:6106": "Map",
    "1140:4420": "Media Player",
    "1079:0": "Menu",
    "312:104": "Modal",
    "1101:2761": "Notification",
    "1106:2955": "Page Header",
    "1433:0": "Path",
    "1025:1560": "Panel",
    "338:134": "Pill",
    "923:724": "Popover",
    "1098:1": "Progress Bar",
    "312:497": "Progress Indicator",
    "1126:3252": "Progress Ring",
    "1014:1492": "Prompt",
    "1006:0": "Radio",
    "1160:488": "Rich Text Editor",
    "1089:0": "Scoped Notification",
    "1073:2027": "Scoped Tabs",
    "1126:3224": "Setup Assistant",
    "1098:1062": "Slider",
    "1066:0": "Spinner",
    "749:369": "Tabs",
    "1073:1938": "Textarea",
    "1107:3034": "Timepicker",
    "1014:1794": "Toast",
    "979:49": "Tooltip",
    "1427:0": "Trial Bar",
    "1121:0": "Tree",
    "1099:2395": "Vertical Navigation",
    "1434:0": "Welcome Mat",
  };

  ids = [
    "4015:8402",
    "1852:6065",
    "918:396",
    "755:125",
    "1136:3613",
    "338:0",
    "1098:822",
    "338:417",
    "1433:797",
    "1006:203",
    "216:33",
    "257:187",
    "274:66",
    "741:0",
    "1136:5197",
    "1390:0",
    "764:6",
    "1075:155",
    "1075:0",
    "3210:0",
    "918:288",
  ];

  pageResponse = [
    {
      id: "0:1",
      name: "Thumbnail",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
      exportSettings: [],
    },
    {
      id: "4015:8402",
      name: "Fonts",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1852:6065",
      name: "Feedback",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "918:396",
      name: "----------------------------------------",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.9490196108818054,
        g: 0.9490196108818054,
        b: 0.9490196108818054,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "755:125",
      name: "Accordion",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1136:3613",
      name: "Activity Timeline",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "338:0",
      name: "Avatar",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1098:822",
      name: "Alert",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "338:417",
      name: "Badge",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1433:797",
      name: "Brand Band",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1006:203",
      name: "Breadcrumb",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "216:33",
      name: "Button",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "257:187",
      name: "Button Group",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "274:66",
      name: "Button Icon",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "741:0",
      name: "Card",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1136:5197",
      name: "Carousel",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1390:0",
      name: "Chat",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "764:6",
      name: "Checkbox",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1075:155",
      name: "Checkbox Button",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1075:0",
      name: "Checkbox Toggle",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "3210:0",
      name: "Color Picker",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "918:288",
      name: "Combobox",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1087:0",
      name: "Counter",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "764:0",
      name: "Data Table",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1101:3092",
      name: "Datepicker",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1263:4310",
      name: "Docked Composer",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1379:5086",
      name: "Docked Utility Bar",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1108:3041",
      name: "Dueling Picklist",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1338:0",
      name: "Empty State",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1136:4805",
      name: "Expandable Section",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1282:0",
      name: "Expression",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1402:42",
      name: "Feed",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "918:153",
      name: "Field Label",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.9490196108818054,
        g: 0.9490196108818054,
        b: 0.9490196108818054,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1395:319",
      name: "Files",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1160:0",
      name: "File Selector",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1125:558",
      name: "Global Header",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1140:3480",
      name: "Global Navigation",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "756:88",
      name: "Input",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1027:1825",
      name: "Listbox",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1233:4140",
      name: "List Builder",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1438:6106",
      name: "Map",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1140:4420",
      name: "Media Player",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1079:0",
      name: "Menu",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "312:104",
      name: "Modal",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1101:2761",
      name: "Notification",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1106:2955",
      name: "Page Header",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1433:0",
      name: "Path",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1025:1560",
      name: "Panel",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "338:134",
      name: "Pill",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "923:724",
      name: "Popover",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1098:1",
      name: "Progress Bar",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "312:497",
      name: "Progress Indicator",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1126:3252",
      name: "Progress Ring",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1014:1492",
      name: "Prompt",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1006:0",
      name: "Radio",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1160:488",
      name: "Rich Text Editor",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1089:0",
      name: "Scoped Notification",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1073:2027",
      name: "Scoped Tabs",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1126:3224",
      name: "Setup Assistant",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1098:1062",
      name: "Slider",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1066:0",
      name: "Spinner",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "749:369",
      name: "Tabs",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1073:1938",
      name: "Textarea",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1107:3034",
      name: "Timepicker",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
    {
      id: "1014:1794",
      name: "Toast",
      type: "CANVAS",
      children: [],
      backgroundColor: {
        r: 0.8980392217636108,
        g: 0.8980392217636108,
        b: 0.8980392217636108,
        a: 1,
      },
      prototypeStartNodeID: null,
      flowStartingPoints: [],
      prototypeDevice: {
        type: "NONE",
        rotation: "NONE",
      },
    },
  ];
  constructor() {
    this.client = axios.create({
      baseURL: `https://api.figma.com/v1/`,
      headers: { "X-Figma-Token": store.state.token },
    });
    this.fileId = store.state.fileId;
  }

  async getNode(nodeId: string) {
    return this.client
      .get(`files/${this.fileId}/nodes?ids=${nodeId}`, {
      })
      .then((r: any) => {
        return r.data;
      })
      .catch((e: any) => {
        console.log(e.message);
      });
  }

  async getPages() {
//     const pages = mockGetPages;
//     const pageNames = pages.reduce((ac: any, a: any) => {
//       return { ...ac, [a.id]: a.name };
//     }, {});
//     return Promise.resolve(pageNames);

        return this.client
          .get(`files/${this.fileId}?depth=1`)
          .then((r: any) => {
            const pages = r.data.document.children;
            return pages.reduce((ac: any, a: any) => {
              return { ...ac, [a.id]: a.name };
            }, {});
          })
          .catch((e: any) => {
            console.log(e.message);
	    router.push('/error')
          });
  }

  async getBase64(url: string) {
    return new Promise(async (resolve, reject) => {
      const img = await axios
        .get(url, { responseType: "blob" })
        .then((response) => {
          return response.data;
        })
        .catch((e) => {
          reject(e);
        });

      const reader = new FileReader();
      reader.readAsDataURL(img);
      reader.onloadend = function () {
        const base64data = reader.result;
        if (base64data) {
          resolve(base64data);
        } else {
          reject();
        }
      };
    });
  }

  async getNodeAsPng(nodeId: string | string[]) {
    //   return Promise.resolve(mockGetNodeAsPng)

    return this.client(`images/${this.fileId}?ids=${nodeId}&format=png`)
      .then((r: any) => {
        console.log("r", r);

        return r.data.images;
      })
      .catch((e: any) => console.log(e.message));
  }
}
