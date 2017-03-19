$(window).on("load", sidenVises);

function sidenVises() {

    $(".funk").on("click", funkMusik);
    $(".rock").on("click", rockMusik);
    $(".jazz").on("click", jazzMusik);
    $(".ol2").on("click", startOl);
    $(".ol").on("click", startOl);

    $(".katvinyl").hide();
    $(".katol").show();
}

function funkMusik() {
    console.log("klikket på funk");
    $("#lyd_rock")[0].pause();
    $("#lyd_jazz")[0].pause();
    $("#lyd_funk")[0].play();
    $("#lyd_rock")[0].volume = 0;
    $("#lyd_jazz")[0].volume = 0;
    $("#lyd_funk")[0].volume = 1;
    $(".katvinyl").addClass("tagvinyl");
    $(".katvinyl").show();
    $(".katol").hide();
    $(".katvinyl").on("animationend", sidenVises);
}

function rockMusik() {
    console.log("klikket på rock");
    $("#lyd_funk")[0].pause();
    $("#lyd_jazz")[0].pause();
    $("#lyd_rock")[0].play();
    $("#lyd_funk")[0].volume = 0;
    $("#lyd_jazz")[0].volume = 0;
    $("#lyd_rock")[0].volume = 1;
    $(".katvinyl").addClass("tagvinyl");
    $(".katol").hide();
    $(".katvinyl").show();
    $(".katvinyl").on("animationend", sidenVises);
}

function jazzMusik() {
    console.log("klikket på jazz");
    $("#lyd_rock")[0].pause();
    $("#lyd_funk")[0].pause();
    $("#lyd_jazz")[0].play();
    $("#lyd_rock")[0].volume = 0;
    $("#lyd_funk")[0].volume = 0;
    $("#lyd_jazz")[0].volume = 1;
    $(".katvinyl").addClass("tagvinyl");
    $(".katol").hide();
    $(".katvinyl").show();
    $(".katvinyl").on("animationend", sidenVises);
}

function startOl() {
    console.log("klikket på øl");
    $(".katol").addClass("tagol");
    $("#lyd_skaal")[0].play();
    $("#lyd_rock")[0].pause();
    $("#lyd_funk")[0].pause();
    $("#lyd_jazz")[0].pause();
    $("#lyd_rock")[0].volume = 0;
    $("#lyd_funk")[0].volume = 0;
    $("#lyd_jazz")[0].volume = 0;
    $("#lyd_skaal")[0].volume = 1;
    $(".katol").on("animationend", olstop);
}

function olstop() {
    $(".katol").removeClass("tagol");
}
