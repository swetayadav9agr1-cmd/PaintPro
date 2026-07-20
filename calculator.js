
function calculatePaint(){

    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);
    let doors = Number(document.getElementById("doors").value);
    let windows = Number(document.getElementById("windows").value);
    let coats = Number(document.getElementById("coats").value);
    let price = Number(document.getElementById("brand").value);

    if(length<=0 || width<=0 || height<=0 || coats<=0 || price<=0){

        alert("Please enter valid values.");

        return;
    }

    let wallArea = 2*(length+width)*height;

    wallArea = wallArea - (doors*20) - (windows*15);

if (wallArea <= 0) {
    alert("Please enter valid room dimensions or reduce the number of doors/windows.");
    return;
}

    let paintRequired = (wallArea*coats)/120;

    let totalCost = paintRequired*price;

    let waste = (paintRequired*0.08).toFixed(2);

    document.getElementById("area").innerHTML =
    " Wall Area : " + wallArea.toFixed(2) + " sq.ft";

    document.getElementById("paint").innerHTML =
    " Paint Required : " + paintRequired.toFixed(2) + " Liters";

    document.getElementById("cost").innerHTML =
    " Estimated Cost : ₹" + totalCost.toFixed(2);

    document.getElementById("waste").innerHTML =
    "♻ Estimated Paint Saved : " + waste + " Liters";

    if(paintRequired<=5){

        document.getElementById("recommendation").innerHTML =
        " Recommended Pack : Buy one 5L Paint Bucket";

    }

    else if(paintRequired<=10){

        document.getElementById("recommendation").innerHTML =
        " Recommended Pack : Buy one 10L Paint Bucket";

    }

    else{

        document.getElementById("recommendation").innerHTML =
        " Recommended Pack : Buy one 20L Paint Bucket";

    }

}