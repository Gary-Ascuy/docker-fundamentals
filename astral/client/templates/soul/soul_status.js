
const leftPad = (number, n) => `00000${number}`.substr(-n);

Template.soulStatus.onRendered(function() {



  setInterval(() => {
    Session.set('something', new Date());
    chart = new Chartist.Line('#soulchart', {
      labels: ['Jan', 'Feb', 'Mar'],
      series: [
        [5, 3, 10, Math.random() * 10],
        [5, 3, 3, Math.random() * 10],
        [5, 3, 1, Math.random() * 10]
      ]
    }, {
      showArea: true,
      axisY: {
        onlyInteger: true
      }
    });

  //   const ctx = document.getElementById('soulchart').getContext("2d");
  //   const myChart = new Chart(ctx, {
  //     type: 'bar',
  //     data: {
  //         labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  //         datasets: [{
  //             label: '# of Votes',
  //             data: [12, 19, 3, 5, 2, 3],
  //             backgroundColor: [
  //                 'rgba(255, 99, 132, 0.2)',
  //                 'rgba(54, 162, 235, 0.2)',
  //                 'rgba(255, 206, 86, 0.2)',
  //                 'rgba(75, 192, 192, 0.2)',
  //                 'rgba(153, 102, 255, 0.2)',
  //                 'rgba(255, 159, 64, 0.2)'
  //             ],
  //             borderColor: [
  //                 'rgba(255,99,132,1)',
  //                 'rgba(54, 162, 235, 1)',
  //                 'rgba(255, 206, 86, 1)',
  //                 'rgba(75, 192, 192, 1)',
  //                 'rgba(153, 102, 255, 1)',
  //                 'rgba(255, 159, 64, 1)'
  //             ],
  //             borderWidth: 1
  //         }]
  //     },
  //     options: {
  //         scales: {
  //             yAxes: [{
  //                 ticks: {
  //                     beginAtZero:true
  //                 }
  //             }]
  //         }
  //     }
  // });

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
