const form = document.getElementById('qr-form')
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let qrdiv = document.getElementById('qr-code')
    qrdiv.style.display = 'block'
    const text = document.getElementById('qr-text').value 
    const width = qrdiv.offsetWidth
    const height = qrdiv.offsetHeight
    qrdiv.innerHTML = ''
    const qrCode = new QRCode(qrdiv, {
        text: text,
        width: width,
        height: height,
        colorDark: '#000000',
        colorLight : '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
    })
})