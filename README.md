# Folder Tree Component

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).\
User can render a Folder tree component on the screen by editing json in a specific format.

## Feature

- [x] Folder is foldable
- [x] Format of JSON

### Folder is foldable

User can show contains inside folder by click the folder, and hide all contains by click a again.

### Format of JSON

User can render a Folder tree component on the screen by editing `../src/data/basicTree.json`.\
Basic Structure of basicTree.JSON is an array.Inside this array, user can layout any number of `Folder` and `File`.

```
[{Folder},{Folder},......,{File},{File},.....]
```

`Format of Folder`

- [x] Fixed condition

  - "icon" : Please give it a "folder" for rendering icon of folder that provide by Font Awesome.
  - "type" : Please set it as "Folder".

- [x] Variable condition

  - "id" : User can give an unique id to each folder whatever the string is.
  - "label" : User can give an name to each folder whatever the string is, it will show on screen.
  - "color" : User can set color of icon, or just show default color(black).
  - "child" : A "Folder" can contain any number of `Folder` and `File`, set it as an array.

```
//Example of "Folder" object format

{
    "id": "v-OOyNYe8R",
    "icon": "folder",
    "label": "public",
    "color": "",
    "type": "Folder",
    "child": [{Folder},......,{File},.....]
}
```

`Format of File`

- [x] Fixed condition

  - "type" : Please set it as "File".

- [x] Variable condition

  - "id" : User can give an unique id to each folder whatever the string is.
  - "icon" : User can set icon of icon Font Awesome.
  - "label" : User can give an name to each folder whatever the string is, it will show on screen.
  - "color" : User can set color of icon, or just show default color(black).
  - "fileExtension" : User can set file extension showed on screen, default value is empty.

```
//Example of "File" object format

{
    "id": "nKXz5hxEDI",
    "icon": "fa-brands fa-js",
    "label": "index",
    "color": "",
    "type": "File",
    "fileExtension":"js"
}
```

### Icon

User can set icon of file whatever they want. Please check icon code on [Font Awesome](https://fontawesome.com/icons).

`Available Icon List`:

- [x] Folder : "folder"
- [x] Folder : "fa-folder-open"
- [x] JavaScript : "fa-brands fa-js"
- [x] HTML5 : "fa-brands fa-html5"
- [x] CSS3 : "fa-brands fa-css3-alt"
- [x] File : "fa-file","fa-file-code"

If icon code do not work, please edit App.js as following code:

```
//App.js Line 6

import {
  import {
  faFolder,
  faFolderOpen,
  faFile,
  faFileCode,
  faFileImage,
// import icon you want here:
  "addIcon"
} from "@fortawesome/free-solid-svg-icons";
} from "@fortawesome/free-solid-svg-icons";

//Line 14

//add icon you import into this function
library.add(fab, faFolder, faFolderOpen, faFile, faFileCode, faFileImage, "addIcon");

```
