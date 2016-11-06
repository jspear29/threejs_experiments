import {
  BoxGeometry,
  MeshBasicMaterial,
  Mesh
} from 'three';

class Box {

  constructor(opts){
    let cubeGeometry = new BoxGeometry(14, 14, 14, 10, 10 ,10)
    let cubeMaterial = new MeshBasicMaterial({color: '#f50093', wireframe: true});
    this.cube = new Mesh(cubeGeometry,cubeMaterial);
  }

}

export default Box;
