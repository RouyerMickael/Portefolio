//Cover
var textWrapper = document.querySelector('.ml3');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: true})
  .add({
    targets: '.ml3 .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.ml3',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

//Projects
$('#laravelVig').click(function(e){
    if($('#laravel').is(":hidden")){
        $('#laravel').removeAttr("hidden");
    } else if ($('#laravel').children("div").is(":visible")){
        e.stopPropagation();
        $('#laravel').prop("hidden", "true");
        $('#laravelMusic')[0].pause();
    }
});
$('#laravelRep').click(function(e){
    if($('#laravel').is(":hidden")){
        $('#laravel').removeAttr("hidden");
    } else if ($('#laravel').children("div").is(":visible")){
        e.stopPropagation();
        $('#laravel').prop("hidden", "true");
        $('#laravelMusic')[0].pause();
    }
});

$('#symfonyVig').click(function(e){
    if($('#symfony').is(":hidden")){
        $('#symfony').removeAttr("hidden");
    } else if ($('#symfony').children("div").is(":visible")){
        e.stopPropagation();
        $('#symfony').prop("hidden", "true");
        $('#symfonyMusic')[0].pause();
    }
});
$('#symfonyRep').click(function(e){
    if($('#symfony').is(":hidden")){
        $('#symfony').removeAttr("hidden");
    } else if ($('#symfony').children("div").is(":visible")){
        e.stopPropagation();
        $('#symfony').prop("hidden", "true");
        $('#symfonyMusic')[0].pause();
    }
});

$('#cakeVig').click(function(e){
    if($('#cake').is(":hidden")){
        $('#cake').removeAttr("hidden");
    } else if ($('#cake').children("div").is(":visible")){
        e.stopPropagation();
        $('#cake').prop("hidden", "true");
        $('#cakeMusic')[0].pause();
    }
});
$('#cakeRep').click(function(e){
    if($('#cake').is(":hidden")){
        $('#cake').removeAttr("hidden");
    } else if ($('#cake').children("div").is(":visible")){
        e.stopPropagation();
        $('#cake').prop("hidden", "true");
        $('#cakeMusic')[0].pause();
    }
});

$('#ajaxVig').click(function(e){
    if($('#ajax').is(":hidden")){
        $('#ajax').removeAttr("hidden");
    } else if ($('#ajax').children("div").is(":visible")){
        e.stopPropagation();
        $('#ajax').prop("hidden", "true");
    }
});
$('#ajaxRep').click(function(e){
    if($('#ajax').is(":hidden")){
        $('#ajax').removeAttr("hidden");
    } else if ($('#ajax').children("div").is(":visible")){
        e.stopPropagation();
        $('#ajax').prop("hidden", "true");
    }
});

$('#reactVig').click(function(e){
    if($('#react').is(":hidden")){
        $('#react').removeAttr("hidden");
    } else if ($('#react').children("div").is(":visible")){
        e.stopPropagation();
        $('#react').prop("hidden", "true");
    }
});
$('#reactRep').click(function(e){
    if($('#react').is(":hidden")){
        $('#react').removeAttr("hidden");
    } else if ($('#react').children("div").is(":visible")){
        e.stopPropagation();
        $('#react').prop("hidden", "true");
    }
});

$('#socketVig').click(function(e){
    if($('#socket').is(":hidden")){
        $('#socket').removeAttr("hidden");
    } else if ($('#socket').children("div").is(":visible")){
        e.stopPropagation();
        $('#socket').prop("hidden", "true");
        $('#socketMusic')[0].pause();
    }
});
$('#socketRep').click(function(e){
    if($('#socket').is(":hidden")){
        $('#socket').removeAttr("hidden");
    } else if ($('#socket').children("div").is(":visible")){
        e.stopPropagation();
        $('#socket').prop("hidden", "true");
        $('#socketMusic')[0].pause();
    }
});

$('#sqlVig').click(function(e){
    if($('#sql').is(":hidden")){
        $('#sql').removeAttr("hidden");
    } else if ($('#sql').children("div").is(":visible")){
        e.stopPropagation();
        $('#sql').prop("hidden", "true");
    }
});
$('#sqlRep').click(function(e){
    if($('#sql').is(":hidden")){
        $('#sql').removeAttr("hidden");
    } else if ($('#sql').children("div").is(":visible")){
        e.stopPropagation();
        $('#sql').prop("hidden", "true");
    }
});

$('#algoVig').click(function(e){
    if($('#algo').is(":hidden")){
        $('#algo').removeAttr("hidden");
    } else if ($('#algo').children("div").is(":visible")){
        e.stopPropagation();
        $('#algo').prop("hidden", "true");
    }
});
$('#algoRep').click(function(e){
    if($('#algo').is(":hidden")){
        $('#algo').removeAttr("hidden");
    } else if ($('#algo').children("div").is(":visible")){
        e.stopPropagation();
        $('#algo').prop("hidden", "true");
    }
});



