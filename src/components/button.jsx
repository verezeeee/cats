import React from 'react'

const sendRequest = () =>{
  const url = 'https://api.thecatapi.com/v1/images/search'
  const data = async () => (await fetch(url)).json()
  console.log(data)
  const div = document.getElementById("gato")
  data().then((res) => {
    let img = document.createElement("img")
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
        height: 30,
        fontSize: 20, 

    }}
    onClick={sendRequest}>gimme a cat!</button>
  )
}

export default Button