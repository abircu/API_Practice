function checkAge() {
  const ageField = document.getElementById("age");
  const ageText = ageField.value;
  const arrorTag = document.getElementById("error");
  try {
    // console.log(bsiod);
    const age = parseInt(ageText);
    if (isNaN(age)) {
      //   console.log("age not found", age, ageText);
      throw "please enter a number";
    } else if (age < 18) {
      throw "not allow";
    }
    arrorTag.innerHTML = "";
  } catch (error) {
    console.log("ERR:", error);
    arrorTag.innerHTML = "ERR:" + error;
  } finally {
    console.log("all done");
  }

  console.log(111);
}
