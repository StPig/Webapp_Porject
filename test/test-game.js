describe('Test > ', function() {
  var subject;
  beforeEach(function() {
    subject = new game();
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
  });

  it('Test check', function() {
    subject.updateList(List);
    assert.equal(subject._listNoteContent[1], "A", "Failed!");
  });
});
