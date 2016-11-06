import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Color
} from 'three';


// TODO the only way I could get orbit controls to work
let THREE = require('three');
let OrbitControls = require('three-orbit-controls')(THREE);

import Box from './components/box.js';
import Element from './components/element.js';
import StatsHelper from './components/stats_helper.js';
import AnimateHelper from './components/animate_helper.js';

const BOX_CONTAINER = new Element('#box-container');
const SCENE = new Scene();
const CAMERA = new PerspectiveCamera(45, BOX_CONTAINER.aspect(), 0.1, 1000);
const CONTROLS = new OrbitControls(CAMERA);
CAMERA.position.x = -30;
CAMERA.position.y = 40;
CAMERA.position.z = 30;
CAMERA.lookAt(SCENE.position);


const RENDERER = new WebGLRenderer();
RENDERER.setSize(BOX_CONTAINER.width, BOX_CONTAINER.height)
RENDERER.setClearColor(new Color(0x000000));

let box = new Box({});
SCENE.add(box.cube);

BOX_CONTAINER.addRenderer(RENDERER);
RENDERER.render(SCENE, CAMERA);


AnimateHelper.addCallback(() => RENDERER.render(SCENE, CAMERA));
AnimateHelper.addCallback(() => StatsHelper.stats.update());
