import {initClient} from '@turnbasedgames/client'

const client = initClient();

function createForm() {
  const form = document.createElement('form');
  const label = document.createElement('label')
  const input = document.createElement('input')
  const submit = document.createElement('input')
  label.innerHTML = "Make Move:"
  input.type = "text"
  input.id = "move"
  submit.type = "submit"
  submit.value = "Submit"
  form.appendChild(label)
  form.appendChild(document.createElement('br'))
  form.appendChild(input)  
  form.appendChild(document.createElement('br'))
  form.appendChild(document.createElement('br'))
  form.appendChild(submit)
  form.onsubmit = async (ev) => {
    ev.preventDefault()
    const move = JSON.parse(input.value)
    console.log("making move", move)
    await client.makeMove(move);
    console.log("finised making move")
  }

  return form;
}

client.on("stateChanged", (state) => {
  console.log("state changed!", state)
})

document.body.appendChild(createForm());
