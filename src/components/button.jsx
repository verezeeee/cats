import React from 'react'

const sendRequest = () =>{
  const url = 'https://api.thecatapi.com/v1/images/search'
  const data = async () => (await fetch(url)).json()
  const div = document.getElementById("gato")
  data().then((res) => {
    let img = document.getElementById("img")
    img.src = res[0].url
    div.appendChild(img)
  }).catch((err) =>{
    alert(err)
  })
}

const Button = () => {
  return (
    <button
    style={{
        width:250,
        height: 40,
        fontSize: 20,
        borderRadius: 10,
        boxShadow: '10px 10px 10px',
        cursor:'pointer'

    }}
    onClick={sendRequest}>gimme a cat!</button>
  )
}

export default Button