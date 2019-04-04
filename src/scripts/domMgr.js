/*`<article>
  <div>
 <h1>"Stephen's Daily Journal"</h1>

  </div>

  <field>
  <label>"Journal Date Entry"</label>
  <input></input>
  </fieldset>
  <field>
  <input></input>
  </fieldset>
  <field
  <input></input>
  ></fieldset>
  <field>
  <input></input>
  </fieldset>

</article>`*/





const displayContainer = document.querySelector("#display-container")
const header = document.createElement("div")
const title = document.createElement("h1")
title.textContent = "Stephen's Daily Journal";
header.appendChild(title)
displayContainer.appendChild(header)




const dateField = document.createElement("fieldset")
display.appendChild(date)
const labelForDate = document.createElement("label")
labelForDate.textContent = "Journal Date Entry:"
const journalDate = document.createElement("input")
journalDate.id = "journalDate"

dateField.appendChild(labelForDate)
dateField.appendChild(journalDate)


const conceptsField = document.createElement("fieldset")
display.appendChild(concepts)
const conceptsLabel = document.createElement("h2")
conceptsLabel.textContent = "Concepts Covered"
const conceptsCovered = document.createElement("input")
conceptsCovered.id = "covered"

conceptsField.appendChild(conceptsLabel)
conceptsField.appendChild(conceptsCovered)


const journalEntry = document.createElement("fieldset")
display.appendChild(journalEntry)
const labelForJournal = document.createElement("h2")
labelForJournal.textContent = "Journal Entry"
const journalInput = document.createElement("input")
journalInput.id = "journal"

const moodArray = ["okay", "happy", "sad", "mad", "super-sad"]
const moodField = document.createElement("fieldset")
display.appendChild(moodField)
const labelForMood = document.createElement("h2")
labelForMood.textContent = "Mood for the Day"
const moodInput = document.createElement("select")
moodInput.id = "mood"
moodArray.forEach(mood => {
    const moodSelector = document.createElement("option")
    moodSelector.setAttribute = ("value", mood)
    moodSelector.textContent = mood
    moodInput.appendChild(moodSelector)
    moodField.appendChild(labelForMood)
    moodField.appendChild(moodInput)
})

//Save Button
const saveButton = document.createElement("button")
savebutton.id = "save-entry"
savebutton.textContent = "Save Joural Entry"
display.appendChild(saveButton)