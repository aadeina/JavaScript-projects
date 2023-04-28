const generateBtn = document.querySelector(".generate");
const serialDiv = document.querySelector(".serial");

generateBtn.addEventListener("click", () => {
    const serialNum = generateSerial();
    serialDiv.textContent = serialNum;
});

function generateSerial() {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let serial = "";
    for (let i = 0; i < 10; i++) {
        let randomIndex = Math.floor(Math.random() * chars.length);
        serial += chars[randomIndex];
    }
    return serial;
}