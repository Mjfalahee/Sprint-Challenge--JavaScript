// 1. Copy and paste your prototype in here and refactor into class syntax.

class Cuboid {
    constructor(information) {
        this.length = information.length;
        this.width = information.width;
        this.height = information.height
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfacearea() {
        return 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    }
}
  
  const cuboid2 = new Cuboid({
    length: 4,
    width: 5,
    height: 5
  });

  
console.log(cuboid2.volume());
console.log(cuboid2.surfacearea());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class Cube extends Cuboid {
    constructor(props) {
        super(props);
    }

    cubevolume() {
        return (this.length)^3;
    }
    cubesurfacearea() {
        return 6 * (this.length * this.length);
    }
}

const cube = new Cube({
    length: 5,
    width: 5,
    height: 5
})

console.log(cube.volume());
console.log(cube.cubesurfacearea());