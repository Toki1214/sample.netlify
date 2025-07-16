let images = ["Hacci-1.png", "Hacci-2.png"];
let img = document.getElementById("hacci");
let index = 0;
let timer = 0;
let timings = [40, 8]; // 表情ごとの表示フレーム数（長め→短め）

function animate() {
  timer++;
  if (timer >= timings[index]) {
    index = (index + 1) % images.length;
    img.src = images[index];
    timer = 0;
  }
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);