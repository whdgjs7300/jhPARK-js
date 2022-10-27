// 바닐라 자바스크립트 : 순수 자바스트립트로만 작업
// jquery 자바스크립트 라이브러리와 함께 사용하는 경우가 많다.
const title = document.querySelector("#title");

title.className = "on" // 클래스를 통채로 바꿈
// classList를 사용하면 add, remove를 통해서 원하는 클래스 이름만 변경
title.classList.add("off"); 
