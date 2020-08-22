let toggle = false;
let sound;
let count = 0;
function preload() {
  sound = loadSound('se01.wav'); //load sound file
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200,0,0);

  if (toggle) {
    count += 3; //計數器,數字越大,速度越快
    noFill();
    stroke(255);
    strokeWeight(5);
    let bounce = map(count, 0, 100, 0, 1);
    circle(width / 2, height / 2, easeOutBounce(bounce) * 400);
    
    let angle = map(count, 0, 100, -HALF_PI, PI + HALF_PI); //將count數值轉換成arc弧形角度
    noStroke();
    fill(242, 166, 51);
    arc(width / 2, height / 2, 200, 200, -HALF_PI, angle, PIE); //畫弧形
    
    if (count >= 100) {
      count = 0; //計數至100時，歸0
      toggle = false ; //計數至100時，toggle = false
    }
  }
}

function keyPressed() {
  if (key == 'k') {
    toggle = true;
    sound.play(); //play sound
  }
}

//彈跳程式，把number去掉
function easeOutBounce(x) {
  const n1 = 7.5625;
  const d1 = 2.75;

  if (x < 1 / d1) {
    return n1 * x * x;
  } else if (x < 2 / d1) {
    return n1 * (x -= 1.5 / d1) * x + 0.75;
  } else if (x < 2.5 / d1) {
    return n1 * (x -= 2.25 / d1) * x + 0.9375;
  } else {
    return n1 * (x -= 2.625 / d1) * x + 0.984375;
  }
}