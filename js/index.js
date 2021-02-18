const btn = document.querySelector("button");
const root = document.getElementById("root");

function calc(val, divisor) {
  let result = Math.round(val / divisor);
  let reminder = val % divisor;
  return {
    result,
    reminder,
    divisor,
  };
}

const generateReadSession = () => {
  //   imported functions
  let inputs = getInputs(document.querySelectorAll('input[type="text"]'));
  let checks = getChecks(document.querySelectorAll('input[type="checkbox"]'));
  if (inputs.length) {
    return generateUsingInputs(inputs);
  } else if (checks.length) {
    return generateUsingCheckboxes(checks);
  }
};

function sendReport(type, _payload) {
  let reportElement = document.createElement("ul");
  reportElement.setAttribute("class", "reports");

  let sessionText = document.createElement("li");
  let moreInfo = document.createElement("li");
  if (!_payload.reminder) {
    sessionText.textContent = `You'll have exactly ${
      _payload.result
    } reading sessions by ${type == "pg" ? "pages" : "chapters"} `;
    moreInfo.textContent = `${_payload.divisor} ${
      type == "pg" ? "pages" : "chapters"
    } per session.`;

    if (_payload.divisor < 2) {
      let recommend = document.createElement("li");
      recommend.textContent = `please try reading one chapter a day only. You can skip days! `;
      recommend.setAttribute("class", "recommend");
      setTimeout(() => reportElement.appendChild(recommend), 5256);
      setTimeout(() => recommend.remove(recommend), 8000);
    }
  }
  if (_payload.reminder) {
    sessionText.textContent = `You have about ${
      _payload.reminder > _payload.divisor / 2
        ? _payload.result + 1
        : _payload.result
    } reading sessions.`;
    moreInfo.textContent = `with ${_payload.reminder} ${
      type == "pg" ? "pages" : "chapters"
    } remaining. \n`;
    moreInfo.textContent += `You will need to read ${_payload.divisor} ${
      type == "pg" ? "pages" : "chapters"
    } per session`;
  }
  setTimeout(() => root.appendChild(reportElement), 128);
  setTimeout(() => reportElement.appendChild(sessionText), 2000);
  setTimeout(() => reportElement.appendChild(moreInfo), 4000);

  setTimeout(() => moreInfo.remove(), 9600);
  setTimeout(() => reportElement.remove(), 11000);
}

btn.addEventListener("click", generateReadSession);
