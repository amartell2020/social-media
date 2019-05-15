class Classic {
  constructor(art_url) {
    this.frame = 'black-border'
    this.art_url = art_url ? art_url: 'https://cdn.britannica.com/s:500x350/78/43678-004-8F18BDDF.jpg'
  }
  render() {
    let pic = document.createElement('div')
    pic.style.height = '100px'
    pic.style.width = '100px'
    pic.style.backgroundColor = 'black'
    document.body.appendChild(pic)
  }
}
