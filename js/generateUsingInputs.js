function generateUsingInputs(inputs) {
  for (let i = 0; i < inputs.length; i++) {
    let val = inputs[i].value;
    let report;
    switch (inputs[i].name) {
      case "c_pg":
        if (val < 50) {
          report = calc(val, 15);
          sendReport("pg", report);
        } else if (val < 200) {
          report = calc(val, 20);
          sendReport("pg", report);
        } else if (val < 350) {
          report = calc(val, 27);
          sendReport("pg", report);
        } else {
          report = calc(val, 30);
          sendReport("pg", report);
        }
        break;
      case "c_ch":
        if (val < 10) {
          report = calc(val, 2);
          sendReport("ch", report);
        } else if (val < 20) {
          report = calc(val, 5);
          sendReport("ch", report);
        } else if (val < 30) {
          report = calc(val, 2);
          sendReport("ch", report);
        } else {
          report = calc(val, 1);
          sendReport("ch", report);
        }
        break;

      default:
        return;
    }
  }
}

function getInputs(params) {
  var inputs = [];
  params.forEach((val) => {
    if (parseInt(val.value)) inputs.push(val);
  });
  let reports = document.querySelector(".reports");
  reports != null ? reports.remove() : null;
  return inputs;
}
