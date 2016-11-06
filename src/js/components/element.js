import $ from 'jquery'

class Element {
  constructor(el) {
    this.el = $(el);
    this.width = this.el.width();
    this.height = this.el.height();
  }
  aspect() {
    return this.width / this.height;
  }
  addRenderer(renderer){
    this.el.append(renderer.domElement);
  }
}

export default Element;
