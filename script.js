// function openEnvelope() {
//     document.getElementById('envelope').classList.add('open');
// }

document.querySelector(".seal").addEventListener("click", () => {
    document.getElementById('envelope').classList.add('open');
    document.querySelector(".letter").classList.add("open-letter");
    setTimeout(() => {
        document.querySelector(".letter").style.display = "flex";
    }, 1500);
    document.querySelector(".overlay").style.display = "flex";

    setTimeout(() => {
        document.querySelector(".envelope").style.display = "none";
    }, 2000);

    document.querySelector(".seal").style.display = "none";

    startTypewriter();
});

function startTypewriter() {
    const textElement = document.getElementById("typewriter");

    const text = `Hi bonii hehehe unang una sa lahat thank youu sa lahat, lalong lalo na sa gift mo sobrang thank youu naappreciate ko yun sobraa hehehe and also sobrang nag te-thank you din ako sa Lord kasi nakilala kita hindi lang ako namin kasi grabe yung naging impact mo samin to the point na we are all happy because of you yung pagiging makulit mo, masiyahin mo and matulungin mo. sa sobrang matulungin mo nga eh ikaw na lahat gumagawa hays, maka hays ako eh no kala mo hindi din ganun 😂😂 sayo tlga ako nag mana bonii 😂😂 kaya wag mo iisipin na hindi ka importante okiee kasi para samin napaka importante mo 🤗 and wag mo masyado stressin sarili mo bonii ano ba ikaw nandito lang akoo kung need mo ng help nandito lang ako lagi or nandyan sila jhonny at jim okiee wag mo masyado solohin lahat and about naman sa system wag mo isipin na nag iisa ka okiee nandito ako hehelp kita dyan alam ko medyo magulo ako minsan sorry huhuhuhu pero pagdating sa technical and about na sa system maaasahan mo ako dyan ba yan bonii di na tayo mag kakasabay mamimiss kita bonii huhuhuhuhu 😢 sana hanggang sa mag katrabaho na tayo mag bff padin tayo ah palagi ikaw mag iingat ah kapag kailangan mo ko chat mo lang ako bonii nandito lang ako palagi para sayoo okiee God bless miss ko kayo agad 😢😢`;

    let index = 0;
    const speed = 20; // typing speed (lower = faster)

    function type() {
        if (index < text.length) {
            textElement.innerHTML += text[index] === "\n" ? "<br>" : text[index];
            index++;
            setTimeout(type, speed);
        }
    }

    type();
}

document.querySelector(".close-letter").addEventListener("click", () => {
    document.querySelector(".letter").classList.add("close");
    // document.querySelector(".envelope").classList.add("close");

    document.querySelector(".letter").style.display = "none";
    document.querySelector(".envelope").style.display = "block";
    document.querySelector(".overlay").style.display = "none";

    location.reload();

    
});