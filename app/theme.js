/**
 * Created by rondyck on 2015-11-20.
 */
var Colors = require('material-ui/lib/styles/colors');
var ColorManipulator = require('material-ui/lib/utils/color-manipulator');
var Spacing = require('material-ui/lib/styles/spacing');

module.exports = {
  spacing: Spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.teal200,
    primary2Color: Colors.blue500,
    primary3Color: Colors.grey100,
    accent1Color: Colors.pink400,
    accent2Color: Colors.cyanA200,
    accent3Color: Colors.cyanA200,
    textColor: Colors.fullWhite,
    //alternateTextColor: Colors.fullWhite,
    alternateTextColor: '#303030',
    //alternateTextColor: ColorManipulator.fade(Colors.fullWhite, 0.7),
    canvasColor: '#303030',
    borderColor: ColorManipulator.fade(Colors.fullWhite, 0.3),
    disabledColor: ColorManipulator.fade(Colors.fullWhite, 0.3)
  }
};