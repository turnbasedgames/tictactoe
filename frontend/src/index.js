import client from '@turnbasedgames/client'

function component() {
  const element = document.createElement('div');
  client.printMsg()

  // Lodash, now imported by this script
  element.innerHTML = "testing"

  return element;
}

document.body.appendChild(component());