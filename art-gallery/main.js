class Classic {
  constructor(art_url) {
    this.frame = 'black-border'
    this.art_url = art_url ? art_url: 'https://cdn.britannica.com/s:500x350/78/43678-004-8F18BDDF.jpg'
  }
  render() {
    let pic = document.createElement('img')
    pic.src = this.art_url
    pic.className = this.frame
    pic.style.height = '100px'
    pic.style.width = '100px'
    pic.style.backgroundColor = 'black'
    document.body.appendChild(pic)
  }
}

let art1 = new Classic('https://media.overstockart.com/data/LDV1497.jpg')

art1.render()

class Meme extends Classic {
  constructor(arg) {
    super(arg)
    this.frame = 'red-border'
  }
}

let art2 = new Meme('http://devhumor.com/content/uploads/images/July2018/javascript_underwater.jpg')

art2.render()

let createImage(newc, photo) {
  let newImage = new newc(photo)
  newImage.render()
}
