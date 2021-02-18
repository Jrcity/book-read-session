const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
const pgCheckBoxes = [];
const chCheckBoxes = [];
checkBoxes.forEach((val, key) => {
  if (key < 4) return pgCheckBoxes.push(val);
  else return chCheckBoxes.push(val);
});

/* control the group checkboxes to act as radio-btn */
checkSwitcher(pgCheckBoxes);
checkSwitcher(chCheckBoxes);

function checkSwitcher(checks) {
  checks.some((val, _key, arr) => {
    val.addEventListener("click", (e) => {
      arr.map((val) => {
        if (val.checked)
          if (val == e.target) val.checked = true;
          else val.checked = false;
      });
    });
  });
}
