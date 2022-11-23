/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/

// 나중에 메인화면에 리스트 추가하는 코드.
//uploadBtn.addEventListener("click", add_box);

// Upload할 때, 모달창

// Buy할 때, 모달창
function modalOpen() {
    document.querySelector('.modal_wrap').style.display = 'block';
    document.querySelector('.modal_background').style.display = 'block';
}
// 모달 끄기
function modalClose() {
    document.querySelector('.modal_wrap').style.display = 'none';
    document.querySelector('.modal_background').style.display = 'none';
}

function modalPayClose() {
    document.querySelector('.modalPay_wrap').style.display = 'none';
    document.querySelector('.modalPay_background').style.display = 'none';
}
// 버튼 클릭리스너 달기
document.querySelector('#modal_btn').addEventListener('click', modalOpen);
document.querySelector('.modal_close').addEventListener('click', modalClose);

//document.querySelector('#pay_btn').addEventListener('click', modalPayClose);
// 모달창의 결제버튼 클릭시
// 환불 버튼과 구매확정 버튼
const refundBtn = document.querySelector("#refundBtn");
const confirm_pur = document.querySelector("#purchase_confirm");

const target = document.querySelector("#pay_btn");
target.addEventListener('click', () => {
    setTimeout(function() {
        refundBtn.disabled = false;
        confirm_pur.disabled = false;
    }, 5000)
    //refundBtn.disabled = false;
    //confirm_pur.disabled = false;
    //modalPayClose();
})

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
    modal.querySelector('.modal_close_btn').addEventListener('click', function() {
        bg.remove();
        modal.style.display = 'none';
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
    let bikeOwner = document.querySelector("#ownerName").value;
    let bikeModel = document.querySelector("#bikeModel").value;
    let bikePrice = document.querySelector("#bikePrice").value;
    let selectImg = document.querySelector("#profile").files[0];
    console.log(selectImg);
    const imgFile = URL.createObjectURL(selectImg);
    //document.querySelector(".uploadImg").src = imgFile;
    console.log(imgFile);
    let template = 
    `<div class="col mb-5">
        <div class="card h-100">
        <img class="card-img-top" src="${imgFile}" alt="..." />
        <div class="card-body p-4">
            <div class="text-center">
                <h5 class="fw-bolder">${bikeModel}</h5>
                $${bikePrice}
                <br>
                <h7 class="fw-bolder">${bikeOwner}</h7>
            </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center" id="bike${i}">
                <a class="btn btn-outline-dark mt-auto" href="#">Add to cart</a>
            </div>
        </div>
    </div>
    </div>`;
    function add_box(ownerName, bikeModel, price) {
        bikeBox.insertAdjacentHTML('beforeend', template);
        i++;
    }

    add_box(bikeOwner, bikeModel, bikePrice);
    console.log(bikeOwner);
    console.log(bikeModel);
    console.log(bikePrice);
    alert("Upload Success!");
})


