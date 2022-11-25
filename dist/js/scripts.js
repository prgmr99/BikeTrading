/*!
* Start Bootstrap - Shop Homepage v5.0.5 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/

// 나중에 메인화면에 리스트 추가하는 코드.
//uploadBtn.addEventListener("click", add_box);
import contract from './bike.json' assert{ type: "json" };

const contractAddress = "0x5190C22Da8F46264025a730e16c66e35951C2b8D";  // smart contract address
const abi = contract.abi;
const buyer_address = "0xBDb91667A454AFEd2451A2A7E2de1772911E4ebA";
const IMGURL = "https://ipfs.io/ipfs/Qmd6EWZd5gUgLqo7z6BMa7sET2bAszJii6tMGQT8SrByfV?filename=bike.png";
// 지갑 연결
async function connect() {
    if (window.ethereum) {
       await window.ethereum.request({ method: "eth_requestAccounts" });
       window.web3 = new Web3(window.ethereum);
       const account = web3.eth.accounts;
       //Get the current MetaMask selected/active wallet
       const walletAddress = account.givenProvider.selectedAddress;
       console.log(`Wallet: ${walletAddress}`);
  
    } else {
     console.log("No wallet");
    }
  }
  document.querySelector("#connectWallet").addEventListener("click", connect);
  
const cw = document.querySelector("#connectWallet");
cw.addEventListener('click', () => {
    connect();
})

async function viewList() {
    try {
      const { ethereum } = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const bikeContract = new ethers.Contract(contractAddress, abi, signer);

            console.log("success1");

            let result = new Array();
            let data = new Object();
            let nftTxn = await bikeContract.sellingList(0);
            data.brand = nftTxn[0];
            data.year = Number(nftTxn[1].toString());
            data.price = Number(nftTxn[2].toString());
            data.contact = nftTxn[3];
            data.tokenId = Number(nftTxn[4].toString());
            data.seller = nftTxn[5];
            data.uri = nftTxn[6]
            
            result.push(data);
            console.log(result);
            let final = JSON.stringify(result);
            return final;
        } else {
          console.log("Ethereum object does not exist");
        }
    } catch (err) {
      console.log(err);
    }
}


// Buy할 때, 모달창
function modalOpen(i) {
    let mw = document.querySelectorAll('.modal_wrap');
    let mb = document.querySelectorAll('.modal_background');
    let mwLen = mw.length;
    let mbLen = mb.length;
    mw[i].style.display = 'block';
    mb[i].style.display = 'block';
    
}
// 모달 끄기
function modalClose(i) {
    let mw = document.querySelectorAll('.modal_wrap');
    let mb = document.querySelectorAll('.modal_background');
    let mwLen = mw.length;
    let mbLen = mb.length;
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
const test0 = document.querySelector('.bikeOpen0');
test0.addEventListener('click', () => {
    modalOpen(0);
})
const test1 = document.querySelector('#bikeClose0');
test1.addEventListener('click', () => {
    modalClose(0);
})
const test2 = document.querySelector('.bikeOpen1');
test2.addEventListener('click', () => {
    modalOpen(1);
})
const test3 = document.querySelector('#bikeClose1');
test3.addEventListener('click', () => {
    modalClose(1);
})
const test4 = document.querySelector('.bikeOpen2');
test4.addEventListener('click', () => {
    modalOpen(2);
})
const test5 = document.querySelector('#bikeClose2');
test5.addEventListener('click', () => {
    modalClose(2);
})

//document.querySelector('#pay_btn').addEventListener('click', modalPayClose);
// 모달창의 결제버튼 클릭시
// 환불 버튼과 구매확정 버튼
const refundBtn = document.querySelectorAll("#refundBtn");
const confirm_pur = document.querySelectorAll("#purchase_confirm");

const target = document.querySelectorAll("#pay_btn");
const target1 = document.querySelectorAll("#modal_btn");
for(let i=0;i<3;i++) {
    target[i].addEventListener('click', async () => {
        setTimeout(function() {
            refundBtn[i].disabled = false;
            confirm_pur[i].disabled = false;  
        }, 5000)
        target1[i].disabled = true;
        //console.log("hi");
        //buyBike(li[0].tokenId);
    })
}
// target[3].addEventListener('click', async () => {
//     let asset = await viewList();
//     let li = JSON.parse(asset);
//     console.log('ji');
//     buyBike(li[0].tokenId);
// })
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
document.querySelector("#submitForm").addEventListener('click', () => {
    let bikeYear = document.querySelector("#bikeYear").value;
    let bikeModel = document.querySelector("#bikeModel").value;
    let bikePrice = document.querySelector("#bikePrice").value;
    let bikeCon = document.querySelector("#ownerContact").value;
    let selectImgs= document.querySelector("#profile").files[0];
    const imgFiles = URL.createObjectURL(selectImgs);
    async function uploadBike(_brand, _year, _price, _contact, _uri) {
        try {
        const { ethereum } = window;

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const signer = provider.getSigner();
                const bikeContract = new ethers.Contract(contractAddress, abi, signer);

                console.log("Initialize payment");
                let nftTxn = await bikeContract.uploadsell(_brand, _year, _price, _contact, _uri, { value: ethers.utils.parseEther("0.000001") });

                console.log(nftTxn);
                console.log("please wait...");

                console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`);

            } else {
            console.log("Ethereum object does not exist");
            }
        } catch (err) {
        console.log(err);
        }
    }
    uploadBike(bikeModel, bikeYear, bikePrice, bikeCon, imgFiles);
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
    // 여기서 json 파일에서 읽어온 값. 새로고침 및 체인과 소통.
    modal.querySelector('.modal_close_btn').addEventListener('click', function() {
        bg.remove();
        modal.style.display = 'none';
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
let i = 3;


async function viewBike() {
    try {
        let asset = await viewList();
        let li = JSON.parse(asset);
        console.log(li);
        let template = 
        `<div class="col mb-5">
            <div class="card h-100">
                <!-- Product image-->
                <img class="card-img-top" src=${IMGURL} width="400" height="180"/>
                <!-- Product details-->
                <div class="card-body p-4">
                    <div class="text-center">
                        <!-- Product name-->
                        <h5 class="fw-bolder">${li[0].brand}</h5>
                        <!-- Product price-->
                        <h6 class="fw-bolder">${li[0].price}</h6>
                        <h7>${li[0].year}</h7>
                    </div>
                </div>
                <!-- Product actions-->
                <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div class="text-center" id="bike${i}">
                        <!--<a class="btn btn-outline-dark mt-auto" href="#">Buy</a>-->
                        <button type="button" id="modal_btn" class="bikeOpen${i}">BUY & MINT NFT</button>
                        <div class="modal_background"></div>
                        <div class="modal_wrap">
                            <div class="modal_close" id="bikeClose${i}">X</div>
                            <div class="text">
                                <h2>${li[0].brand}</h2>
                                <img src="${li[0].uri}" width="400" height="250">
                                <br>
                                ${li[0].price}<br>
                                <h7 class="fw-bolder">${li[0].year}</h7>
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

        add_box(li[0].year, li[0].brand, li[0].price);
        const test6 = document.querySelector('.bikeOpen3');
        test6.addEventListener('click', () => {
            modalOpen(3);
        })
        const test7 = document.querySelector('#bikeClose3');
        test7.addEventListener('click', () => {
            modalClose(3);
        })
        const buyBikeBtn = document.querySelectorAll('#pay_btn');
        const refundBikeBtn = document.querySelectorAll('#refundBtn');
        const purconBtn = document.querySelectorAll('#purchase_confirm');
        refundBikeBtn[3].disabled = false;
        purconBtn[3].disabled = false;
        buyBikeBtn[3].addEventListener('click', async () => {
            // setTimeout(function() {
            //     refundBtn[i].disabled = false;
            //     confirm_pur[i].disabled = false;  
            // }, 5000)
            refundBikeBtn[3].disabled = false;
            buyBike(li[0].tokenId);
        })
        refundBikeBtn[3].addEventListener('click', () => {
            getRefund();
        })
        purconBtn[3].addEventListener('click', () => {
            //purchase_confirmation();
            seller_getMoney(buyer_address);
        })
    } catch(err) {
        console.log("not yet");
    }
};
viewBike();
async function getRefund() {
    try {
      const { ethereum } = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const bikeContract = new ethers.Contract(contractAddress, abi, signer);

            console.log("success2");
            let nftTxn = await bikeContract.refundMoney();

            console.log(nftTxn);
            console.log("please wait...");

            console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`);

        } else {
          console.log("Ethereum object does not exist");
        }
    } catch (err) {
      console.log(err);
    }
}
async function buyBike(tokenId) {
    try {
      const { ethereum } = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const bikeContract = new ethers.Contract(contractAddress, abi, signer);

            await window.ethereum.request({ method: "eth_requestAccounts" });
            window.web3 = new Web3(window.ethereum);
            const account = web3.eth.accounts;
            const walletAddress = account.givenProvider.selectedAddress;
            console.log(`Wallet: ${walletAddress}`);
            let ipfsuri = "https://ipfs.io/ipfs/QmTFpDDS1cFkey7jAkHNrxnLPJDhAS5V7nvsqfXsdoohXV?filename=SongBike.json";

            console.log("success2");
            let nftTxn = await bikeContract.buy(tokenId, { value: ethers.utils.parseEther("0.000001") });

            console.log(nftTxn);
            console.log("please wait...");

            console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`);

            let nftTxn2 = await bikeContract.NFTmint(account, tokenId, ipfsuri);
            console.log(nftTxn2);


        } else {
          console.log("Ethereum object does not exist");
        }
    } catch (err) {
      console.log(err);
    }
}
async function purchase_confirmation() {
    try {
      const { ethereum } = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const bikeContract = new ethers.Contract(contractAddress, abi, signer);

            console.log("success2");
            let nftTxn = await bikeContract.purchase_confirmation();

            console.log(nftTxn);
            console.log("please wait...");

            console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`);

        } else {
          console.log("Ethereum object does not exist");
        }
    } catch (err) {
      console.log(err);
    }
}
async function seller_getMoney(buyer_address) {
    try {
      const { ethereum } = window;

        if (ethereum) {
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = provider.getSigner();
            const bikeContract = new ethers.Contract(contractAddress, abi, signer);

            console.log("success2");
            let nftTxn = await bikeContract.seller_confirmation(buyer_address);

            console.log(nftTxn);
            console.log("please wait...");

            console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`);

        } else {
          console.log("Ethereum object does not exist");
        }
    } catch (err) {
      console.log(err);
    }
}
// template 추가.
/*document.querySelector("#submitForm").addEventListener('click', () => {
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
                    <h6 class="fw-bolder">${bikePrice}</h6>
                    <h7>${bikeYear}</h7>
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center" id="bike${i}">
                    <!--<a class="btn btn-outline-dark mt-auto" href="#">Buy</a>-->
                    <button type="button" id="modal_btn" class="bikeOpen${i}">BUY & MINT NFT</button>
                    <div class="modal_background"></div>
                    <div class="modal_wrap">
                        <div class="modal_close" id="bikeClose${i}">X</div>
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

    const test6 = document.querySelector('.bikeOpen4');
        test6.addEventListener('click', () => {
        modalOpen(3);
    })
    const test7 = document.querySelector('#bikeClose4');
        test7.addEventListener('click', () => {
        modalClose(3);
    })
})*/
