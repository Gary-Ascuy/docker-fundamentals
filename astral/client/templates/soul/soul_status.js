
const leftPad = (number, n) => `00000${number}`.substr(-n);

Template.soulStatus.helpers({
  soul() {
    const soulContext = Math.sin(Math.random())  * 10000;
    return leftPad(parseInt(soulContext), 5);
  },
  status() {
    const statusContext = Math.cos(Math.random()) * 80000;
    return leftPad(parseInt(statusContext), 5);
  },
  universe() {
    const universeContext = Math.tan(Math.random()) * 10000;
    return leftPad(parseInt(universeContext), 5);
  }
});
