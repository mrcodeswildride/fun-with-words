let word = document.getElementById(`word`)
let resultParagraph = document.getElementById(`resultParagraph`)
let reverseButton = document.getElementById(`reverseButton`)
let character = document.getElementById(`character`)
let text = document.getElementById(`text`)
let replaceButton = document.getElementById(`replaceButton`)
let pigButton = document.getElementById(`pigButton`)

reverseButton.addEventListener(`click`, reverse)
replaceButton.addEventListener(`click`, replace)
pigButton.addEventListener(`click`, pigLatin)

function reverse() {
  if (word.value != ``) {
    resultParagraph.innerHTML = ``

    for (let i = word.value.length - 1; i >= 0; i--) {
      resultParagraph.innerHTML = `${resultParagraph.innerHTML}${word.value[i]}`
    }
  }
}

function replace() {
  if (word.value != ``) {
    resultParagraph.innerHTML = ``

    for (let char of word.value) {
      if (char == character.value) {
        resultParagraph.innerHTML = `${resultParagraph.innerHTML}${text.value}`
      }
      else {
        resultParagraph.innerHTML = `${resultParagraph.innerHTML}${char}`
      }
    }
  }
}

function pigLatin() {
  if (word.value != ``) {
    resultParagraph.innerHTML = ``
    let first = word.value[0].toLowerCase()

    if (first != `a` && first != `e` && first != `i` && first != `o` && first != `u`) {
      for (let i = 1; i < word.value.length; i++) {
        resultParagraph.innerHTML = `${resultParagraph.innerHTML}${word.value[i]}`
      }

      resultParagraph.innerHTML = `${resultParagraph.innerHTML}${word.value[0]}`
    }
    else {
      resultParagraph.innerHTML = word.value
    }

    resultParagraph.innerHTML = `${resultParagraph.innerHTML}ay`
  }
}