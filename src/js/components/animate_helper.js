const callbacks = [];

const animate = function(){
  for(let callback of callbacks){
    callback();
  }
  requestAnimationFrame(animate);
}

class AnimateHelper{

  constructor(){
    animate();
  }

  addCallback(callback){
    callbacks.push(callback);
  }
}

export default new AnimateHelper();
