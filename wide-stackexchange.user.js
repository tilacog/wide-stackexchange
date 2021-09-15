// ==UserScript==
// @name            Wide Stack Exchange
// @description    Remove sidebars from StackExchange pages
// @version        0.0.1
// @include        http*://stackoverflow.com/questions/*
// @include        http*://serverfault.com/questions/*
// @include        http*://superuser.com/questions/*
// @include        http*://stackapps.com/questions/*
// @include        http*://meta.stackoverflow.com/questions/*
// @include        http*://*.stackexchange.com/questions/*
// @include        http*://askubuntu.com/questions/*
// @include        http*://answers.onstartups.com/questions/*
// @include        http*://meta.mathoverflow.net/questions/*
// @include        http*://mathoverflow.net/questions/*
// ==/UserScript==

function remove(elementId) {
    let element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
}

(function(d){
    ["sidebar", "left-sidebar"].forEach(remove);


    let container = document.getElementsByClassName('container')[0];
    container.style.maxWidth = 'none';

    let content = d.getElementById("content");
    content.style.maxWidth = 'none';


    let mainbar = d.getElementById('mainbar');
    mainbar.style.width = "100%"

})(document);
