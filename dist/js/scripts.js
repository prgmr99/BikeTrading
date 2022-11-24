/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/

// 나중에 메인화면에 리스트 추가하는 코드.
//uploadBtn.addEventListener("click", add_box);

// Upload할 때, 모달창

// Buy할 때, 모달창
function modalOpen(i) {
    let mw = document.querySelectorAll('.modal_wrap');
    let mb = document.querySelectorAll('.modal_background');
    mwLen = mw.length;
    mbLen = mb.length;
    mw[i].style.display = 'block';
    mb[i].style.display = 'block';
    
}
// 모달 끄기
function modalClose(i) {
    let mw = document.querySelectorAll('.modal_wrap');
    let mb = document.querySelectorAll('.modal_background');
    mwLen = mw.length;
    mbLen = mb.length;
    mw[i].style.display = 'none';
    mb[i].style.display = 'none';
}

function modalPayClose() {
    document.querySelector('.modalPay_wrap').style.display = 'none';
    document.querySelector('.modalPay_background').style.display = 'none';
}
// 버튼 클릭리스너 달기
//document.querySelector('#modal_btn').addEventListener('click', modalOpen);
//document.querySelector('.modal_close').addEventListener('click', modalClose);
//const modalButtons = document.querySelectorAll('#modal_btn');
//let modalBtnsLen = modalButtons.length;
/*for(let i=0;i<modalBtnsLen;i++) {
    modalButtons[i].addEventListener('click', () => {
        modalOpen();
    });
}*/
//const modalCloseBtns = document.querySelectorAll('.modal_close');
//let modalCloseLen = modalCloseBtns.length;
/*for(let j=0;j<modalCloseBtns;j++) {
    modalCloseBtns[i].addEventListener('click', () => {
        modalClose();
    });
}*/

// 각각의 모달창 열기.
const test1 = document.querySelector('.bikeOpen1');
test1.addEventListener('click', () => {
    modalOpen(0);
})
const test2 = document.querySelector('#bikeClose1');
test2.addEventListener('click', () => {
    modalClose(0);
})
const test3 = document.querySelector('.bikeOpen2');
test3.addEventListener('click', () => {
    modalOpen(1);
})
const test4 = document.querySelector('#bikeClose2');
test4.addEventListener('click', () => {
    modalClose(1);
})
const test5 = document.querySelector('.bikeOpen3');
test5.addEventListener('click', () => {
    modalOpen(2);
})
const test6 = document.querySelector('#bikeClose3');
test6.addEventListener('click', () => {
    modalClose(2);
})
const test7 = document.querySelector('.bikeOpen4');
test7.addEventListener('click', () => {
    modalOpen(3);
})
const test8 = document.querySelector('#bikeClose4');
test8.addEventListener('click', () => {
    modalClose(3);
})

//document.querySelector('#pay_btn').addEventListener('click', modalPayClose);
// 모달창의 결제버튼 클릭시
// 환불 버튼과 구매확정 버튼
const refundBtn = document.querySelector("#refundBtn");
const confirm_pur = document.querySelector("#purchase_confirm");

const target = document.querySelector("#pay_btn");
const target1 = document.querySelector("#modal_btn");
target.addEventListener('click', () => {
    setTimeout(function() {
        refundBtn.disabled = false;
        confirm_pur.disabled = false;  
    }, 5000)
    target1.disabled = true;
})

// json 파일 불러오기 1
// const jsonData = require('./XXX.json');
// console.log(jsonData);  불러온 것 확인.

// json 파일 불러오기 2
/*fetch("./XXX.json").then(response => {
    return response.json();
})
.then(jsondata => console.log(jsondata));*/

// json 파일 불러오기 3
// <script src="../json/myJson.json" type="text/javascript"></script>
// json 파일이 객체 형태로 표현된 경우
//let mydata = JSON.parse(JSON.stringify(data));
//console.log(mydata); 이렇게 파싱.
// json 파일 파싱 후 데이터 불러오기. 

// let datas = [ ... ];

/*if(datas.length != 0) {
    location.reload(true);
}*/
// reload 함수
/*function reLoad() {
    location.reload(true); // 브라우저가 가지고 있는 기존의 리소스는 신경쓰지 않고 새로운 리소스를 받아 화면을 갱신합니다.
}*/

// Upload Modal
function modal(id) {
    var zIndex = 9999;
    var modal = document.getElementById(id);

    // 모달 div 뒤에 희끄무레한 레이어
    var bg = document.createElement('div');
    bg.setStyle({
        position: 'fixed',
        zIndex: zIndex,
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        // 레이어 색갈은 여기서 바꾸면 됨
        backgroundColor: 'rgba(0,0,0,0.4)'
    });
    document.body.append(bg);

    // 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
    // 여기서 json 파일에서 읽어온 값. 새로고침 및 체인과 소통.
    modal.querySelector('.modal_close_btn').addEventListener('click', function() {
        bg.remove();
        modal.style.display = 'none';
        let bikeYear = document.querySelector("#bikeYear").value;
        let bikeModel = document.querySelector("#bikeModel").value;
        let bikePrice = document.querySelector("#bikePrice").value;
        let selectImg = document.querySelector("#profile").files[0];
        const imgFile = URL.createObjectURL(selectImg);
        //datas.push({"Year":"${bikeYear}", "Model":"${bikeModel}", "Price":${bikePrice}, "Image":"${imgFile}");
        //JSON.stringfy(datas);
        location.reload(true);
    });
    modal.querySelector('#submitForm').addEventListener('click', function() {
        bg.remove();
        modal.style.display = 'none';
    });
    modal.setStyle({
        position: 'fixed',
        display: 'block',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

        // 시꺼먼 레이어 보다 한칸 위에 보이기
        zIndex: zIndex + 1,

        // div center 정렬
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        msTransform: 'translate(-50%, -50%)',
        webkitTransform: 'translate(-50%, -50%)'
    });
}
// Element 에 style 한번에 오브젝트로 설정하는 함수 추가
Element.prototype.setStyle = function(styles) {
    for (var k in styles) this.style[k] = styles[k];
    return this;
};
document.getElementById('popup_open_btn').addEventListener('click', function() {
    // 모달창 띄우기
    modal('my_modal');
});

let bikeBox = document.querySelector("#bikeBox");
let i = 0;

// template 추가.
document.querySelector("#submitForm").addEventListener('click', () => {
    let bikeYear = document.querySelector("#bikeYear").value;
    let bikeModel = document.querySelector("#bikeModel").value;
    let bikePrice = document.querySelector("#bikePrice").value;
    let selectImg = document.querySelector("#profile").files[0];
    const imgFile = URL.createObjectURL(selectImg);
    let template = 
    `<div class="col mb-5">
        <div class="card h-100">
            <!-- Product image-->
            <img class="card-img-top" src="${imgFile}" width="400" height="180"/>
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${bikeModel}</h5>
                    <!-- Product price-->
                    $40.00 - $80.
                    <br>
                    <h7 class="fw-bolder">${bikeYear}</h7>
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center" id="bike${i}">
                    <!--<a class="btn btn-outline-dark mt-auto" href="#">Buy</a>-->
                    <button type="button" id="modal_btn">Buy</button>
                    <div class="modal_background"></div>
                    <div class="modal_wrap">
                        <div class="modal_close">X</div>
                        <div class="text">
                            <h2>${bikeModel}</h2>
                            <img src="${imgFile}" width="400" height="250">
                            <br>
                            ${bikePrice}<br>
                            <h7 class="fw-bolder">${bikeYear}</h7>
                            <button type="button" class="modalPay_close" id="pay_btn">Buy</button>
                        </div>
                    </div>
                    <button type="button" id="refundBtn" disabled>Refund</button>
                    <button type="button" id="purchase_confirm" disabled>Confirmed</button>
                </div>
            </div>
        </div>
    </div>`
    function add_box(ownerName, bikeModel, price) {
        bikeBox.insertAdjacentHTML('beforeend', template);
        i++;
    }

    add_box(bikeYear, bikeModel, bikePrice);
    console.log(bikeYear);
    console.log(bikeModel);
    console.log(bikePrice);
    alert("Upload Success!");
})
