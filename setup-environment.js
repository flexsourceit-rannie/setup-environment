#!/usr/bin/env node

import robot from 'robotjs';

robot.setMouseDelay(1);

var screenSize = robot.getScreenSize();
var height = (screenSize.height / 2) - 10;
var width = screenSize.width;
var x = 0;
var i = setInterval(function() {
  x = (x == 0) ? width : 0;
  robot.moveMouse(x, height);
}, 1000 * 60);
