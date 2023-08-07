function showContent(idName) {
  var sectionCount;
  var elementArray = document.querySelectorAll(".main-2");
  for (var i = 1; i <= elementArray.length; i++) {
    document.getElementById(`opt-${i}`).classList?.remove("showContent");
    document
      .getElementsByClassName(`section-opt-${i}`)[0]
      .classList?.remove("changeSectionStyle");
    document.getElementById(`pair-${i}`).removeAttribute("checked");
    if (idName.includes(i)) {
      sectionCount = i;
    }
  }
  document.getElementById(idName).classList.add("showContent");
  document
    .getElementsByClassName(`section-opt-${sectionCount}`)[0]
    .classList.add("changeSectionStyle");
  document.getElementById(`pair-${sectionCount}`).checked = true;
}
