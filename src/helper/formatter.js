const Formatter = {
  dateTimeFormatter: isoDate => {
    if (isoDate == null) {
      return "None";
    }
    let date = new Date(isoDate);
    let dateStr =
      ("00" + date.getDate()).slice(-2) +
      "/" +
      ("00" + (date.getMonth() + 1)).slice(-2) +
      "/" +
      date.getFullYear() +
      " " +
      ("00" + date.getHours()).slice(-2) +
      ":" +
      ("00" + date.getMinutes()).slice(-2) +
      ":" +
      ("00" + date.getSeconds()).slice(-2);
    return dateStr;
  },
  dateTimeFormatterNoS: isoDate => {
    if (isoDate == null) {
      return "None";
    }
    let date = new Date(isoDate);
    let dateStr =
      ("00" + date.getDate()).slice(-2) +
      "/" +
      ("00" + (date.getMonth() + 1)).slice(-2) +
      "/" +
      date.getFullYear() +
      " " +
      ("00" + date.getHours()).slice(-2) +
      ":" +
      ("00" + date.getMinutes()).slice(-2);
    return dateStr;
  },
  textLengthFormatter: (text, length, clamp) => {
    length = length || 50;
    clamp = clamp || "...";
    let node = document.createElement("div");
    node.innerHTML = text;
    let content = node.textContent;
    return content.length > length ? content.slice(0, length) + clamp : content;
  }
};

export default Formatter;
