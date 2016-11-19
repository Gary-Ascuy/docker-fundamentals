
const leftPad = (number, n) => `00000${number}`.substr(-n);

Template.soulStatus.onRendered(function() {
  setInterval(() => {
    Session.set('something', new Date());
  }, 2000);
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
