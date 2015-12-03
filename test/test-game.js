describe('Test > ', function() {
  var subject;
  beforeEach(function() {
    subject = new game();
    for(var i=0;i<5;i++)
    {
      for(var j=0;j<5;j++)
      {
        subject.element[i][j] = 0;
      }
    }
    subject.element[0][0] = 2;
    subject.element[0][2] = 2;
    subject.element[0][4] = "red1";
    subject.element[1][0] = "red1";
    subject.element[2][2] = 4;
    subject.element[3][3] = 5;
    subject.element[3][4] = 4;
    subject.element[4][0] = "red1";
    subject.element[4][1] = 2;
    subject.element[4][2] = "red1";
    subject.element[4][3] = 3;
  });

  it('Test check', function() {
    subject.element[0][1] = "blue";
    subject.element[0][3] = "red2";
    subject.element[1][1] = "red2";
    subject.element[1][2] = "red2";
    subject.element[1][3] = "red2";
    subject.element[1][4] = "red2";
    subject.element[2][0] = "blue";
    subject.element[2][1] = "blue";
    subject.element[2][3] = "blue";
    subject.element[2][4] = "red2";
    subject.element[3][0] = "red2";
    subject.element[3][1] = "blue";
    subject.element[3][2] = "blue";
    subject.element[4][4] = "blue";
    subject.check();
    assert.equal(subject.check.win, 25, "Failed!");
  });
});
