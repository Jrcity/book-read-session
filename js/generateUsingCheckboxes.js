function generateUsingCheckboxes(checks) {
  for (let i = 0; i < checks.length; i++) {
    let report;
    switch (checks[i].name) {
      case "pg_50":
        report = calc(50, 15);
        sendReport("pg", report);
        break;
      case "pg_200":
        report = calc(200, 20);
        sendReport("pg", report);
        break;
      case "pg_350":
        report = calc(350, 27);
        sendReport("pg", report);
        break;
      case "pg_G350":
        report = calc(350, 30);
        sendReport("pg", report);
        break;
      case "ch_10":
        report = calc(10, 2);
        sendReport("ch", report);
        break;
      case "ch_20":
        report = calc(20, 5);
        sendReport("ch", report);
        break;
      case "ch_30":
        report = calc(30, 2);
        sendReport("ch", report);
        break;
      case "ch_G30":
        report = calc(30, 1);
        sendReport("ch", report);
        break;

      default:
        return;
    }
  }
}

function getChecks(params) {
  var checks = [];
  params.forEach((val) => {
    if (val.checked) checks.push(val);
  });
  let reports = document.querySelector(".reports");
  reports != null ? reports.remove() : null;
  return checks;
}
