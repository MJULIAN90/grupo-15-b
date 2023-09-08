// (function () {

  // var whiteboard = window.whiteboard;
  // forma commans js
  // var whiteboard = require("./whiteboard.js");
  // forma es6
  import whiteboard from "./whiteboard.js";

  // var socket = window.io(window.location.origin);
  // forma commans js
  // var socket = require('socket.io-client');
  // forma es6
  import socket from 'socket.io-client';

  socket.on("connect", function () {
    console.log("Connected!");
  });

  socket.on("load", function (strokes) {
    strokes.forEach(function (stroke) {
      var start = stroke.start;
      var end = stroke.end;
      var color = stroke.color;
      whiteboard.draw(start, end, color, false);
    });
  });

  socket.on("draw", function (start, end, color) {
    whiteboard.draw(start, end, color, false);
  });

  whiteboard.on("draw", function (start, end, color) {
    socket.emit("draw", start, end, color);
  });
// })();
