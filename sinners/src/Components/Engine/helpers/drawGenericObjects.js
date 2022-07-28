const drawGenericsObjects = (genericObjects) => {
    if(genericObjects){
      genericObjects.forEach(genericObject => {
        genericObject.draw();
      })
    }
  }

  export default drawGenericsObjects;