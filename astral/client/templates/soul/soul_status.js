
const leftPad = (number, n) => `00000${number}`.substr(-n);

Template.soulStatus.onRendered(function() {
  new Chartist.Line('#soulchart', {
    labels: ['Universe', 'State', 'Soul', 'Universe'],
    series: [
      [1, 0, 0, 1],
      [1, 0, 0, 1],
      [1, 0, 0, 1]
    ]
  }, {
    showArea: true,
    axisY: {
      onlyInteger: true
    }
  });

  setInterval(() => {
    const chart = new Chartist.Line('#soulchart', {
      labels: ['Jan', 'Feb', 'Mar'],
      series: [
        [Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10],
        [Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10],
        [Math.random() * 10, Math.random() * 10, Math.random() * 10, Math.random() * 10]
      ]
    }, {
      showArea: true,
      axisY: {
        onlyInteger: true
      }
    });
    $('#soulchart').show();
    $('#loading-icon').hide();
    Session.set('something', new Date());
  }, 3000);
});

Template.soulStatus.helpers({
  soul() {
    Session.get('something');
    const soulContext = Math.sin(Math.random())  * 10000;
    return leftPad(parseInt(soulContext), 5);
  },
  status() {
    Session.get('something');
    const statusContext = Math.cos(Math.random()) * 80000;
    return leftPad(parseInt(statusContext), 5);
  },
  universe() {
    Session.get('something');
    const universeContext = Math.tan(Math.random()) * 10000;
    return leftPad(parseInt(universeContext), 5);
  }
});
