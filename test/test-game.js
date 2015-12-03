describe('Test > ', function() {
  var subject;
  beforeEach(function() {
    Game = new game();
    for(var i=0;i<5;i++)
    {
      for(var j=0;j<5;j++)
      {
        Game.element[i][j] = 0;
      }
    }
    Game.element[0][0] = 2;
    Game.element[0][2] = 2;
    Game.element[0][4] = "red1";
    Game.element[1][0] = "red1";
    Game.element[2][2] = 4;
    Game.element[3][3] = 5;
    Game.element[3][4] = 4;
    Game.element[4][0] = "red1";
    Game.element[4][1] = 2;
    Game.element[4][2] = "red1";
    Game.element[4][3] = 3;
  });

  it('Test check', function() {
    Game.element[0][1] = "blue";
    Game.element[0][3] = "red2";
    Game.element[1][1] = "red2";
    Game.element[1][2] = "red2";
    Game.element[1][3] = "red2";
    Game.element[1][4] = "red2";
    Game.element[2][0] = "blue";
    Game.element[2][1] = "blue";
    Game.element[2][3] = "blue";
    Game.element[2][4] = "red2";
    Game.element[3][0] = "red2";
    Game.element[3][1] = "blue";
    Game.element[3][2] = "blue";
    Game.element[4][4] = "blue";
    Game.check();
    assert.equal(Game.win, 25, "Failed!");
  });
});
