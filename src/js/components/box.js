import {BoxGeometry, MeshPhongMaterial} from 'three';

class Box {

  constructor(opts){
    this.cubeGeometry = new BoxGeometry(4, 4, 4)
    this.cubeMaterial = new MeshPhongMaterial({color: 0xff0000});
    this.cube = new Mesh(cubeGeometry, cubeMaterial);
    return this;
  }

}

export default Box;
