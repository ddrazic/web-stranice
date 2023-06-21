$(document).foundation();

$('#start').click(function(){

    $('#start').fadeOut();
    $("#pitanje").fadeIn();
    $("#b1").fadeIn();
    $("#b2").fadeIn();
    
    return false;
});

$('#b1').click(function(){

    $("#pitanje").fadeOut();
    $("#b1").fadeOut();
    $("#b2").fadeOut();
    $("#p2").fadeIn();
    $("#b3").fadeIn();
    $("#b4").fadeIn();
    
    return false;
});
$('#b2').click(function(){

    $("#pitanje").fadeOut();
    $("#b1").fadeOut();
    $("#b2").fadeOut();
    $("#p2").fadeIn();
    $("#b3").fadeIn();
    $("#b4").fadeIn();
    
    return false;
});

$('#b3').click(function(){

    $("#p2").fadeOut();
    $("#b3").fadeOut();
    $("#b4").fadeOut();
    $("#p3").fadeIn();
    $("#b5").fadeIn();
    $("#b6").fadeIn();
    $("#b7").fadeIn();
    $("#b8").fadeIn();
    
    return false;
});
$('#b4').click(function(){

    $("#p2").fadeOut();
    $("#b3").fadeOut();
    $("#b4").fadeOut();
    $("#p3").fadeIn();
    $("#b5").fadeIn();
    $("#b6").fadeIn();
    $("#b7").fadeIn();
    $("#b8").fadeIn();
    
    return false;
});

$('#b5').click(function(){

    $("#p3").fadeOut();
    $("#b5").fadeOut();
    $("#b6").fadeOut();
    $("#b7").fadeOut();
    $("#b8").fadeOut();
    $("#p4").fadeIn();
    $("#b9").fadeIn();
    $("#b10").fadeIn();
    $("#b11").fadeIn();
    $("#b12").fadeIn();

    
    return false;
});
$('#b6').click(function(){

    $("#p3").fadeOut();
    $("#b5").fadeOut();
    $("#b6").fadeOut();
    $("#b7").fadeOut();
    $("#b8").fadeOut();
    $("#p4").fadeIn();
    $("#b9").fadeIn();
    $("#b10").fadeIn();
    $("#b11").fadeIn();
    $("#b12").fadeIn();

    
    return false;
});
$('#b7').click(function(){

    $("#p3").fadeOut();
    $("#b5").fadeOut();
    $("#b6").fadeOut();
    $("#b7").fadeOut();
    $("#b8").fadeOut();
    $("#p4").fadeIn();
    $("#b9").fadeIn();
    $("#b10").fadeIn();
    $("#b11").fadeIn();
    $("#b12").fadeIn();

    
    return false;
});
$('#b8').click(function(){

    $("#p3").fadeOut();
    $("#b5").fadeOut();
    $("#b6").fadeOut();
    $("#b7").fadeOut();
    $("#b8").fadeOut();
    $("#p4").fadeIn();
    $("#b9").fadeIn();
    $("#b10").fadeIn();
    $("#b11").fadeIn();
    $("#b12").fadeIn();

    
    return false;
});

$('#b9').click(function(){

    $("#p4").fadeOut();
    $("#b9").fadeOut();
    $("#b10").fadeOut();
    $("#b11").fadeOut();
    $("#b12").fadeOut();
    $("#p5").fadeIn();
    $("#b13").fadeIn();
    $("#b14").fadeIn();
    $("#b15").fadeIn();
    $("#b16").fadeIn();

    
    return false;
});
$('#b10').click(function(){

    $("#p4").fadeOut();
    $("#b9").fadeOut();
    $("#b10").fadeOut();
    $("#b11").fadeOut();
    $("#b12").fadeOut();
    $("#p5").fadeIn();
    $("#b13").fadeIn();
    $("#b14").fadeIn();
    $("#b15").fadeIn();
    $("#b16").fadeIn();

    
    return false;
});
$('#b11').click(function(){

    $("#p4").fadeOut();
    $("#b9").fadeOut();
    $("#b10").fadeOut();
    $("#b11").fadeOut();
    $("#b12").fadeOut();
    $("#p5").fadeIn();
    $("#b13").fadeIn();
    $("#b14").fadeIn();
    $("#b15").fadeIn();
    $("#b16").fadeIn();

    
    return false;
});
$('#b12').click(function(){

    $("#p4").fadeOut();
    $("#b9").fadeOut();
    $("#b10").fadeOut();
    $("#b11").fadeOut();
    $("#b12").fadeOut();
    $("#p5").fadeIn();
    $("#b13").fadeIn();
    $("#b14").fadeIn();
    $("#b15").fadeIn();
    $("#b16").fadeIn();

    
    return false;
});

$('#b13').click(function(){

    $("#p5").fadeOut();
    $("#b13").fadeOut();
    $("#b14").fadeOut();
    $("#b15").fadeOut();
    $("#b16").fadeOut();
    $("#podnaslov").fadeOut();
    $("#start").fadeOut();
    $("#rjesenje1").fadeIn();
    $("#congratz").fadeIn();
    $("#raven").fadeIn();

    return false;
});

$('#b14').click(function(){

    $("#p5").fadeOut();
    $("#b13").fadeOut();
    $("#b14").fadeOut();
    $("#b15").fadeOut();
    $("#b16").fadeOut();
    $("#podnaslov").fadeOut();
    $("#start").fadeOut();
    $("#rjesenje").fadeIn();
    $("#congratz").fadeIn();
    $("#grif").fadeIn();

    return false;
});

$('#b15').click(function(){

    $("#p5").fadeOut();
    $("#b13").fadeOut();
    $("#b14").fadeOut();
    $("#b15").fadeOut();
    $("#b16").fadeOut();
    $("#podnaslov").fadeOut();
    $("#start").fadeOut();
    $("#rjesenje2").fadeIn();
    $("#congratz").fadeIn();
    $("#huf").fadeIn();

    return false;
});

$('#b16').click(function(){

    $("#p5").fadeOut();
    $("#b13").fadeOut();
    $("#b14").fadeOut();
    $("#b15").fadeOut();
    $("#b16").fadeOut();
    $("#podnaslov").fadeOut();
    $("#start").fadeOut();
    $("#rjesenje3").fadeIn();
    $("#congratz").fadeIn();
    $("#sly").fadeIn();

    return false;
});

const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "Welcome",
    "To",
    "Hogwarts",
    "...",
    "Click",
    "Me",
    "To",
    "Start"
    
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();