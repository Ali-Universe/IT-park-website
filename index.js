"use strict";

window.onload = () => {
    let addBtn = document.querySelector('.add-btn');
    let cBtn = document.querySelector('.create-btn');
    let navBar = document.querySelector('.navbar-nav');
    let addInt = document.querySelector('.add-input');
    let createBlock = document.querySelector('.create-block');
    let toggle = true;

    addBtn.addEventListener('click', () => {
        let ni = document.querySelector('.nav-item-add');
        ni.classList.toggle('create-block');
    });
    cBtn.addEventListener('click', () => {
        if (addInt.value === '') {
            return;
        }
        let li = document.createElement('li');
        li.classList.add('nav-item');
        let deleate = document.createElement('div')
        deleate.classList.add('destroy')
        li.appendChild(deleate);
        deleate.innerHTML = '&times;';
        deleate.addEventListener('click', () => {
            li.remove();
        })
        let link = document.createElement('a');
        link.innerHTML = addInt.value;
        link.classList.add('nav-link');
        link.setAttribute('aria-current', 'page');
        link.setAttribute('href', '#');
        li.appendChild(link);
        navBar.appendChild(li);
        addInt.value = '';
    });
}