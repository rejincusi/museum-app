function submitComment() {
  const inputField = document.getElementById('name')
  const name = inputField.value
  const textArea = document.getElementById('msg')
  const msg = textArea.value
  const comment = document.createElement('section')
  const h3 = document.createElement('h3')
  const p = document.createElement('p')

  if(validationError(name, msg)){
    return null
  }
  // reassign value
  h3.innerHTML = `${name} said:`
  p.innerHTML = msg
  comment.classList.add('comment')
  comment.appendChild(h3)
  comment.appendChild(p)

  // display comment
  const commentSection = document.getElementById('comments')
  commentSection.appendChild(comment)

  // reassign form 
  inputField.value = null
  textArea.value = null
}

function validationError(name, msg) {
  if (!name) {
    alert('You forgot to fill in your name!')
    return true;
  }

  if (!msg) {
    alert('You forgot to fill in your message!')
    return true;
  }

  if(msg.length > 280) {
    alert('Your comment is too long')
    return true
  }

  return false
}