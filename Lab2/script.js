(function () {
  let names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

  let bye = speakBye();
  let hello = speakHello();

  console.log("Вивід Good Buy імен за першою буквою імені (Якщо j або J)");
  for (let i = 0; i < names.length; i++) {
    const item = names[i];
    if (item.charAt(0) === "J" || item.toLowerCase().charAt(0) === "j") {
      bye(item);
    } else {
      hello(item);
    }
  }


  console.log("Чи є сума кодових значень символів імен парною");
  names.forEach(item => {
    let charSum = 0;
    for (let i = 0; i < item.length; i++) {
      charSum += item.charCodeAt(i);
    }

    if (charSum % 2 === 0) {
      bye(item);
    } else {
      hello(item);
    }
  });
}());