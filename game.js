'use strict';

(function(exports) {
  var element = [];
  for(var i=0;i<5;i++)
    element[i] = [];
  var game = function() {
    this.init();
  };

  game.prototype = {
    init() {
      for(var i=0;i<5;i++)
      {
        for(var j=0;j<5;j++)
        {
          element[i][j] = 0;
        }
      }
      element[0][0] = "red1";
      element[0][3] = 2;
      element[1][1] = 3;
      element[1][4] = 5;
      element[2][0] = 5;
      element[3][3] = 2;
      element[4][1] = 1;
      element[4][4] = 5;
      var sum = 1;
      for(var i=0;i<5;i++)
      {
        for(var j=0;j<5;j++)
        {
          this.paint(element[i][j],sum);
          sum++;
        }
      }
      for(var i=1;i<=25;i++)
      {
        document.getElementById(i).addEventListener("click", this.change);
      }

    },

    change(i) {
      if(parseInt(i.target.id%5) == 0)
      {
        var x = parseInt(i.target.id/5)-1;
        var y = parseInt(i.target.id%5)+4;
        switch(element[x][y])
        {
          case "red2":
            element[x][y] = 0;
            this.paint(element[x][y],i.target.id);
            break;
          case "blue":
            element[x][y] = "red2";
            this.paint(element[x][y],i.target.id);
            break;
          case 0:
            element[x][y] = "blue";
            this.paint(element[x][y],i.target.id);
            break;
          default:
            break;
        }
      }
      else
      {
        var x = parseInt(i.target.id/5);
        var y = parseInt(i.target.id%5)-1;
        switch(element[x][y])
        {
          case "red2":
            element[x][y] = 0;
            this.paint(element[x][y],i.target.id);
            break;
          case "blue":
            element[x][y] = "red2";
            this.paint(element[x][y],i.target.id);
            break;
          case 0:
            element[x][y] = "blue";
            console.log(element[x][y],i.target.id);
            this.paint(element[x][y],i.target.id);
            break;
          default:
            break;
        }
      }
    },

    paint(ele,num) {
      switch(ele)
      {
        case "red1":
          document.getElementById(num).style.backgroundImage = "url('image/red.jpg')";
          break;
        case "red2":
          document.getElementById(num).style.backgroundImage = "url('image/red.jpg')";
          break;
        case "blue":
          document.getElementById(num).style.backgroundImage = "url('image/blue.jpg')";
          break;
        case 0:
          break;
        case 1:
          document.getElementById(num).style.backgroundImage = "url('image/1.jpg')";
          break;
        case 2:
          document.getElementById(num).style.backgroundImage = "url('image/2.jpg')";
          break;
        case 3:
          document.getElementById(num).style.backgroundImage = "url('image/3.jpg')";
          break;
        case 4:
          document.getElementById(num).style.backgroundImage = "url('image/4.jpg')";
          break;
        case 5:
          document.getElementById(num).style.backgroundImage = "url('image/5.jpg')";
          break;
        default:
          break;
      }
      document.getElementById(num).style.backgroundRepeat = "no-repeat";
      document.getElementById(num).style.backgroundPosition = "17px 20px";
    },

    check() {

    }
  };

  exports.game = game;
})(window);
