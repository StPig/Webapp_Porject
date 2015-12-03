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
      element[0][0] = 2;
      element[0][2] = 2;
      element[0][4] = "red1";
      element[1][0] = "red1";
      element[2][2] = 4;
      element[3][3] = 5;
      element[3][4] = 4;
      element[4][0] = "red1";
      element[4][1] = 2;
      element[4][2] = "red1";
      element[4][3] = 3;
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
        document.getElementById(i).addEventListener("click", this.change.bind(this));
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
            this.paint(element[x][y],i.target.id);
            break;
          default:
            break;
        }
      }
      this.check();
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
          document.getElementById(num).style.backgroundImage = "url('')";
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
      var win = 0;
      var ele = [];
      for(var i=0;i<5;i++)
      {
        ele[i] = [];
      }
      for(var i=0;i<5;i++)
      {
        for(var j=0;j<5;j++)
        {
          if(element[i][j] == "blue")
          {
            var sum = 0;
            if(j == 0)
            {
              for(var k=j+1;k<5;k++)
              {
                if(element[i][k] != "red1" && element[i][k] != "red2" && element[i][k] != 0)
                  sum++;
                else
                  break;
              }
            }
            else if(j == 4)
            {
              for(var k=j-1;k>=0;k--)
              {
                if(element[i][k] != "red1" && element[i][k] != "red2" && element[i][k] != 0)
                  sum++;
                else
                  break;
              }
            }
            else
            {
              for(var k=j+1;k<5;k++)
              {
                if(element[i][k] != "red1" && element[i][k] != "red2" && element[i][k] != 0)
                  sum++;
                else
                  break;
              }
              for(var k=j-1;k>=0;k--)
              {
                if(element[i][k] != "red1" && element[i][k] != "red2" && element[i][k] != 0)
                  sum++;
                else
                  break;
              }
            }
            if(i == 0)
            {
              for(var k=i+1;k<5;k++)
              {
                if(element[k][j] != "red1" && element[k][j] != "red2" && element[k][j] != 0)
                  sum++;
                else
                  break;
              }
            }
            else if(i == 4)
            {
              for(var k=i-1;k>=0;k--)
              {
                if(element[k][j] != "red1" && element[k][j] != "red2" && element[k][j] != 0)
                  sum++;
                else
                  break;
              }
            }
            else
            {
              for(var k=i+1;k<5;k++)
              {
                if(element[k][j] != "red1" && element[k][j] != "red2" && element[k][j] != 0)
                  sum++;
                else
                  break;
              }
              for(var k=i-1;k>=0;k--)
              {
                if(element[k][j] != "red1" && element[k][j] != "red2" && element[k][j] != 0)
                  sum++;
                else
                  break;
              }
            }
            switch(sum)
            {
              case 1:
                ele[i][j] = 1;
                break;
              case 2:
                ele[i][j] = 2;
                break;
              case 3:
                ele[i][j] = 3;
                break;
              case 4:
                ele[i][j] = 4;
                break;
              case 5:
                ele[i][j] = 5;
                break;
              default:
                break;
            }
          }
          else
          {
            ele[i][j] = element[i][j];
          }
        }
      }
      for(var i=0;i<5;i++)
      {
        for(var j=0;j<5;j++)
        {
          if(ele[i][j] == "red1" || ele[i][j] == "red2")
          {
            win++;
          }
          else if(ele[i][j] == 0)
          {
            break;
          }
          else
          {
            var sum = 0;
            if(j == 0)
            {
              for(var k=j+1;k<5;k++)
              {
                if(ele[i][k] != "red1" && ele[i][k] != "red2" && ele[i][k] != 0)
                  sum++;
                else
                  break;
              }
            }
            else if(j == 4)
            {
              for(var k=j-1;k>=0;k--)
              {
                if(ele[i][k] != "red1" && ele[i][k] != "red2" && ele[i][k] != 0)
                  sum++;
                else
                  break;
              }
            }
            else
            {
              for(var k=j+1;k<5;k++)
              {
                if(ele[i][k] != "red1" && ele[i][k] != "red2" && ele[i][k] != 0)
                  sum++;
                else
                  break;
              }
              for(var k=j-1;k>=0;k--)
              {
                if(ele[i][k] != "red1" && ele[i][k] != "red2" && ele[i][k] != 0)
                  sum++;
                else
                  break;
              }
            }
            if(i == 0)
            {
              for(var k=i+1;k<5;k++)
              {
                if(ele[k][j] != "red1" && ele[k][j] != "red2" && ele[k][j] != 0)
                  sum++;
                else
                  break;
              }
            }
            else if(i == 4)
            {
              for(var k=i-1;k>=0;k--)
              {
                if(ele[k][j] != "red1" && ele[k][j] != "red2" && ele[k][j] != 0)
                  sum++;
                else
                  break;
              }
            }
            else
            {
              for(var k=i+1;k<5;k++)
              {
                if(ele[k][j] != "red1" && ele[k][j] != "red2" && ele[k][j] != 0)
                  sum++;
                else
                  break;
              }
              for(var k=i-1;k>=0;k--)
              {
                if(ele[k][j] != "red1" && ele[k][j] != "red2" && ele[k][j] != 0)
                  sum++;
                else
                  break;
              }
            }
            if(ele[i][j] == sum)
              win++;
          }
        }
      }
      if(win == 25)
      {
        alert("Win！！");
        window.location.reload();
      }
    }
  };

  exports.game = game;
})(window);
