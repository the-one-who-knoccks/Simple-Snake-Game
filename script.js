window.onload = function () {
  let stage = document.getElementById("stage");
  let ctx = stage.getContext("2d");
  document.addEventListener("keydown", keyPush);

  setInterval(game, 80);

  const speed = 1;

  let spx = spy = 0;

  let px = 10;
  let py = 15;

  let len = 20;
  let box = 30;

  let appx = appy = 15;

  let trail = [];
  tail = 5;

  function game() {
    px += spx;
    py += spy;

    if (px < 0) {
      px = box - 1;
    }

    if (px > box - 1) {
      px = 0
    }
    if (py < 0) {
      py = box - 1
    }

    if (py > box - 1) {
      py = 0;
    }



    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, stage.width, stage.height);

    ctx.fillStyle = "red";
    ctx.fillRect(appx * len, appy * len, len, len);

    ctx.fillStyle = "gray";
    for (let i = 0; i < trail.length; i++) {
      ctx.fillRect(trail[i].x * len, trail[i].y * len, len-1, len-1);

      if (trail[i].x == px && trail[i].y == py) {
        spx = spy = 0;
        tail = 5;
        
      }
    }

    trail.push({ x: px, y: py })
    while (trail.length > tail) {
      trail.shift();
    }

    if (appx == px && appy == py) {
      tail++;
      appx = Math.floor(Math.random() * box);
      appy = Math.floor(Math.random() * box);
    }

  }

  function keyPush(e) {
    switch (e.keyCode) {
      case 37: // left
        spx = -speed;
        spy = 0;
        break;

      case 38: //up
        spx = 0;
        spy = -speed;
        break;

      case 39: //right
        spx = speed;
        spy = 0;
        break;

      case 40: // down
        spx = 0;
        spy = speed;
        break;
      default:
        break;
    }
  }

}