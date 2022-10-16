var i = 0;

function progress1() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("progress-bar-1");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 98) {
                clearInterval(id);
                i = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}
j = 0;

function progress2() {
    if (j == 0) {
        j = 1;
        var elem = document.getElementById("progress-bar-2");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 53) {
                clearInterval(id);
                j = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}
k = 0;

function progress3() {
    if (k == 0) {
        k = 1;
        var elem = document.getElementById("progress-bar-3");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 31) {
                clearInterval(id);
                k = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}
m = 0;

function progress4() {
    if (m == 0) {
        m = 1;
        var elem = document.getElementById("progress-bar-4");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 15) {
                clearInterval(id);
                m = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}
a = 0;

function progress5() {
    if (a == 0) {
        a = 1;
        var elem = document.getElementById("progress-bar-11");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 91) {
                clearInterval(id);
                a = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}
b = 0;

function progress6() {
    if (b == 0) {
        b = 1;
        var elem = document.getElementById("progress-bar-22");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 90) {
                clearInterval(id);
                b = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}
c = 0;

function progress7() {
    if (c == 0) {
        c = 1;
        var elem = document.getElementById("progress-bar-33");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 85) {
                clearInterval(id);
                c = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}
d = 0;

function progress8() {
    if (d == 0) {
        d = 1;
        var elem = document.getElementById("progress-bar-44");
        var width = 1;
        var id = setInterval(frame, 10);

        function frame() {
            if (width >= 54) {
                clearInterval(id);
                d = 0;
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

progress1();

progress2();

progress3();

progress4();
progress5();
progress6();
progress7();
progress8();
window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
  animationEnabled: true,  
  title:{
    text: "Company Revenue by Year"
  },
  axisY: {
    title: "Revenue in USD",
    valueFormatString: "#0,,.",
    suffix: "mn",
    prefix: "$"
  },
  data: [{
    type: "splineArea",
    color: "rgba(54,158,173,.7)",
    markerSize: 5,
    xValueFormatString: "YYYY",
    yValueFormatString: "$#,##0.##",
    dataPoints: [
      {  y: 36, name: "Apple", legendText: "apple" },
       {  y: 17, name: "Mango", legendText: "mango" }
    ]
  }]
  });
chart.render();
}