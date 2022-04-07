<template>
  <div style="">
    <div class="container">
      <div class="sun"></div>

      <div class="mercurys-orbit">
        <div class="mercury"></div>
      </div>

      <div class="venus-orbit">
        <div class="venus"></div>
      </div>

      <div class="earths-orbit">
        <div class="earth"></div>
      </div>

      <div class="mars-orbit">
        <div class="mars"></div>
      </div>

      <div class="jupiters-orbit">
        <div class="jupiter"></div>
      </div>

      <div class="saturns-orbit">
        <div class="saturn"></div>
      </div>

      <div class="uranus-orbit">
        <div class="uranus"></div>
      </div>

      <div class="neptunes-orbit">
        <div class="neptune"></div>
      </div>

      <div class="plutos-orbit">
        <div class="pluto"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// Variables
$gravitation-constant: 6.673;

.container {
  width: 768px;

  transform: translateY(-50%);
}

// Planets & Sun
.sun {
  background: linear-gradient(90deg, #bb513e, darken(#bb513e, 9%));
  box-shadow: inset 15px 10px 0px darken(#bb513e, 9%);
  width: 60px;
  height: 60px;
  border-radius: 100%;
  margin: 105px auto;
  position: absolute;
  left: 0;
  right: 0;
}

.mercury {
  background: linear-gradient(90deg, #453217, darken(#453217, 7%));
  box-shadow: inset 0px 7px 0px darken(#453217, 7%);
  width: 20px;
  height: 20px;
  border-radius: 100%;

  margin-top: 1 * 10 + px;
}

.venus {
  background: linear-gradient(90deg, #ac6339, darken(#ac6339, 7%));
  box-shadow: inset 0px 7px 0px darken(#ac6339, 12%);
  width: 20px;
  height: 20px;
  border-radius: 100%;

  margin-top: 3 * 10 + px;
}

.earth {
  background: linear-gradient(90deg, #3e8ebb, darken(#3e8ebb, 7%));
  box-shadow: inset 0px 7px 0px darken(#3e8ebb, 12%);
  width: 20px;
  height: 20px;
  border-radius: 100%;

  margin-top: 7 * 10 + px;
}

.mars {
  background: linear-gradient(90deg, #6f3125, darken(#6f3125, 7%));
  box-shadow: inset 0px 7px 0px darken(#6f3125, 9%);
  width: 20px;
  height: 20px;
  border-radius: 100%;

  margin-top: 11 * 10 + px;
}

.jupiter {
  background: linear-gradient(90deg, #3d2c14, darken(#3d2c14, 7%));
  box-shadow: inset 0px 7px 0px darken(#3d2c14, 5%);
  width: 20px;
  height: 20px;
  border-radius: 100%;

  margin-top: 16 * 10 + px;
}

.saturn {
  background: linear-gradient(90deg, #e97340, darken(#e97340, 7%));
  box-shadow: inset 0px 7px 0px darken(#e97340, 14%);
  width: 20px;
  height: 20px;
  border-radius: 100%;

  margin-top: 20 * 10 + px;
}

.uranus {
  background: linear-gradient(90deg, #337799, darken(#337799, 7%));
  box-shadow: inset 0px 7px 0px darken(#337799, 12%);
  width: 20px;
  height: 20px;
  border-radius: 100%;

  margin-top: 24 * 10 + px;
}

.neptune {
  background: linear-gradient(90deg, #6acdc0, darken(#6acdc0, 7%));
  box-shadow: inset 0px 7px 0px darken(#6acdc0, 17%);
  width: 20px;
  height: 20px;
  border-radius: 100%;

  margin-top: 28 * 10 + px;
}

.pluto {
  background: linear-gradient(90deg, #c6c053, darken(#c6c053, 7%));
  box-shadow: inset 0px 7px 0px darken(#c6c053, 12%);
  width: 20px;
  height: 20px;
  border-radius: 100%;

  margin-top: 32 * 10 + px;
}

// Planets Orbit
[class*="-orbit"] {
  position: absolute;
  left: 0;
  right: 0;
  border: 1px solid #333;
  box-shadow: 0px 1px 1px #4096ee;
  border-radius: 100%;
}

.mercurys-orbit {
  width: 1 * 100 + px;
  height: 1 * 100 + px;

  margin: 85px auto;

  animation: gravity $gravitation-constant * 0.09 + s linear infinite;
}

.venus-orbit {
  width: 2 * 100 - 30 + px;
  height: 2 * 100 - 30 + px;

  margin: 50px auto;

  animation: gravity $gravitation-constant * 0.5 + s linear infinite;
}

.earths-orbit {
  width: 3 * 100 - 30 + px;
  height: 3 * 100 - 30 + px;

  margin: 0px auto;

  animation: gravity $gravitation-constant * 1 + s linear infinite;
}

.mars-orbit {
  width: 4 * 100 - 30 + px;
  height: 4 * 100 - 30 + px;

  margin: -50px auto;

  animation: gravity $gravitation-constant * 1.5 + s linear infinite;
}

.jupiters-orbit {
  width: 5 * 100 - 30 + px;
  height: 5 * 100 - 30 + px;

  margin: -100px auto;

  animation: gravity $gravitation-constant * 2 + s linear infinite;
}

.saturns-orbit {
  width: 6 * 100 - 30 + px;
  height: 6 * 100 - 30 + px;

  margin: -150px auto;

  animation: gravity $gravitation-constant * 3 + s linear infinite;
}

.uranus-orbit {
  width: 7 * 100 - 30 + px;
  height: 7 * 100 - 30 + px;

  margin: -200px auto;

  animation: gravity $gravitation-constant * 4 + s linear infinite;
}

.neptunes-orbit {
  width: 8 * 100 - 30 + px;
  height: 8 * 100 - 30 + px;

  margin: -250px auto;

  animation: gravity $gravitation-constant * 5 + s linear infinite;
}

.plutos-orbit {
  width: 9 * 100 - 30 + px;
  height: 9 * 100 - 30 + px;

  margin: -300px auto;
  margin-left: -50px;

  animation: gravity $gravitation-constant * 6 + s linear infinite;
}

// Gravitational Pull
@keyframes gravity {
  to {
    transform: rotate(360deg);
  }
}
</style>