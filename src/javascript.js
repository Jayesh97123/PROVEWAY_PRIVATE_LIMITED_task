function showContent(idName) {
  var sectionCount;
  var elementArray = document.querySelectorAll(".main-2");
  console.log(elementArray);
  for (var i = 0; i < elementArray.length; i++) {
    document.getElementById(`opt-${i + 1}`).classList?.remove("showContent");
    document
      .getElementsByClassName(`section-opt-${i + 1}`)[0]
      .classList?.remove("changeSectionStyle");
    if (idName.includes(i + 1)) {
      sectionCount = i + 1;
    }
  }
  document.getElementById(idName).classList.add("showContent");
  document
    .getElementsByClassName(`section-opt-${sectionCount}`)[0]
    .classList.add("changeSectionStyle");
}
