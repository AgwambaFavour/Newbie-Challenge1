const input = document.querySelector('.input-field')
const button = document.querySelector('.btn')
const image = document.querySelector('.img')

 const getimage = (data)=>{
  image.src = data
  image.alt = "QR code"
 }
const getQrcode = async () =>{
  const data = input.value;
const size = "280x280";

 // Construct the complete URL with parameters
const url = `http://api.qrserver.com/v1/create-qr-code/?data=${data}&size=${size}`;


  const image = await fetch(url)
  const response = await image.blob()
  const apiurl = URL.createObjectURL(response)

  getimage(apiurl)
  input.value = " "
}
button.addEventListener('click', ()=>{
  getQrcode()
  
})