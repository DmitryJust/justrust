/*
css by vk.com/justrust
*/
@charset "UTF-8";

body {
font-family:Cera Pro,sans-serif;
background-size:cover!important
}

:root {
	--default-font-family:Cera Pro;
  	--default-font-size: 16px;
  	--default-font-weight: 300;
  	--default-letter-spacing: 1.5px;
  	--default-border-radius: 15px;
  	--default-color: #ffffffd6;
  	--default-color-hover: #ffffff;
  	--default-background: #202020;
  
	--orange-color: #FF8000;
  	--orange-color-hover: #FF9800;
	--orange-box-shadow: rgb(226 92 14 / 10%);
  
  	--small-font-size: 13px;
  
  	--bg-opacity: #ffffff00;
}

:root[data-theme=red_black] {
    --accent-color-800: #ff8000;
    --accent-color-900: #c96704;
    --font-color-700: #fff;
    --font-color-800: rgba(255, 255, 255, .7);
    --font-color-900: #ffffff;
    --bg-color-800: rgb(61 60 60);
    --bg-color-700: #282828;
    --bg-color-900: #1d1b1a;
    --product-items-trans-bg-color: rgba(0, 0, 0, .4);
}

* {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  	font-family: var(--default-font-family), sans-serif;
  	color: var(--default-font-color);
}

img {
    -webkit-user-drag: none;
    -moz-user-drag: none;
    -ms-user-drag: none;
}

body {
	background-color: var(--default-background);
  	font-weight: var(--default-font-weight);
}

a, p, h1, h2, h3, h4, h5, li {
  	font-weight: var(--default-font-weight);
}

a::first-word, h1::first-word, h2::first-word, h3::first-word, h4::first-word, h5::first-word, li::first-word, span::first-word, p::first-word {
  	text-transform: capitalize!important;
}

a, button {
  	font-weight: var(--default-font-weight);
}

.LangSwitcher-module__btn,
.boxHeader.Shop-module__header,
.MonitoringWidget-module__updateBtn,
.boxHeader.MonitoringWidget-module__header,
[data-widgettype="monitoring"] .boxFooter,
.productModalProductAvailability,
.RouletteContent-module__triangle.RouletteContent-module__bottom,
.productModalContainsTitle,
.ProfileNav-module__header.boxHeader,
.ProfileContent-module__header.boxHeader,
.BasketContent-module__header.boxHeader,
.Selector-module__dropDownWrapper, .SelectContent-module__label, .ItemContent-module__label,
.HistoryContent-module__header.boxHeader {
	display: none;
}

.Header-module__wrapper,
.Shop-module__wrapper .boxBody,
.MonitoringWidget-module__body.boxBody,
.Shop-module__wrapper .boxFooter,
.Widgets-module__widgetWrapper .boxBody,
.ProfileNav-module__wrapper .boxFooter,
.ProfileNav-module__body.boxBody {
	background-color: rgb(0 0 0 / 30%);
	border-radius: 15px 15px 15px 15px;
}
.PlayerMenu-module__loginLink,
.swiper-button-next:after, 
.swiper-button-prev:after,
.swiper,
.PlayerBalance-module__btn,
.Button-module__btn.Button-module__gray, 
.Button-module__btn.Button-module__accent,
.Servers-module__server,
.Categories-module__category,
.Search-module__wrapper,
.MonitoringServer-module__wrapper,
.MonitoringServer-module__progressBarWrapper,
.productModalDescription,
.boxBody:last-child {
    border-radius: var(--default-border-radius);
}

.ProductModal-module__header,
.PlayerBalanceModal-module__header,
.customModalContent .boxHeader {
    border-radius: var(--default-border-radius) var(--default-border-radius) 0 0;
	
}

.ItemContent-module__footer,
.PlayerBalanceModal-module__footer,
.RouletteContent-module__footer,
.KitContent-module__footer,
.customModalContent .boxFooter {
	border-radius: 0 0 var(--default-border-radius) var(--default-border-radius);
}

.DesktopCopyright-module__text {
    letter-spacing: 1px;
}

.DesktopCopyright-module__wrapper {
    border-radius: 0 var(--default-border-radius) 0 0 !important;
    background-color: #28282852 !important;
}

.MobileCopyright-module__wrapper {
	border-radius: var(--default-border-radius)!important;
  	background-color: var(--bg-color-700)!important;
  	margin-top: 25px;
}

.MobileCopyright-module__link {
    white-space: nowrap;
    margin-left: 5px;
    color: var(--orange-color);
}

.gs-loader__spinner {
    background: url(https://i.postimg.cc/PJN3kkKV/just.png) no-repeat;
    border: none;
    height: 100px;
    margin-top: 0;
    width: 100px;
  	animation: float 1s ease-in-out infinite;
}

.gs-loader {
    backdrop-filter: blur(5px);
    background-color: transparent;
}

@keyframes float {
0% {
    transform: translatey(0px);
}
100% {
    transform: translatey(0px);
}

50% {
    transform: translatey(-30px);
}
}

.Header-module__logoImage {
    width: 35px;
    margin-left: 5px;
}

.LangSwitcher-module__lang img {
    width: 30px;
}

.HeaderNav-module__link:hover, 
.HeaderNav-module__link:focus,
.HeaderNav-module__linkk:hover,
.HeaderNav-module__linkk:focus
.SupportLink-module__link:hover,
.SupportLink-module__link:focus {
    color: var(--default-color-hover);
  	transition: all 0.2s;
}

.HeaderNav-module__link,
.SupportLink-module__link,
.HeaderNav-module__linkk {
color: white;
align-items:center;
margin-left:-30px;
border-radius:10px;
cursor:pointer;
display:flex;
font-size:13pt;
font-weight:600;
justify-content:center;
max-height:40px;
padding:10px;
transition:all .1s ease;
white-space:nowrap
}

.HeaderNav-module__link:hover {
background:linear-gradient(to left,#ffae00 0,#fe5900 100%);
color:#292b2c!important
}

.HeaderNav-module__link:hover,
.SupportLink-module__link:hover,
.HeaderNav-module__linkk:hover {
  	opacity: 1;
}

.SupportLink-module__link img {
    width: 20px;
}

.name-user {
color: #fffafa;
}
.category-user {
color: #bab3b3;
}

.productModalDescription {
    margin-bottom: 5px;
  	margin-top: 1px;
}

.productModalDescription {
    background-color: #ffffff00;
}

.Header-module__wrapper {
-webkit-box-shadow:0 1px 1px rgb(0 0 0 / 30%);
align-items:center;
background:rgb(0 0 0 / 30%);
border-radius:10px;
display:flex;
flex-wrap:wrap;
font-weight:500;
margin-bottom:20px;
min-height:60px;
padding:0 15px;
width:100%
}

.PlayerMenu-module__loginLink {
color: white;
align-items:center;
border-radius:10px;
cursor:pointer;
display:flex;
font-size:13pt;
font-weight:600;
justify-content:center;
max-height:40px;
padding:10px;
transition:all .1s ease;
white-space:nowrap
}

.Button-module__btn.Button-module__accent {
    background: #ff8000;
    color: var(--default-color-hover);
    transition: all 0.2s;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
	
}

.PlayerBalance-module__btn {
	color: #ffffff;
	align-items:center;
	border-radius:10px;
	cursor:pointer;
	display:flex;
	font-size:13pt;
	font-weight:600;
	justify-content:center;
	max-height:40px;
	transition:all .1s ease;
	white-space:nowrap
    transition: all 0.2s;
    padding: 10px 20px;
}

.PlayerBalance-module__btn:hover {
color:#292b2c!important
}

.Button-module__btn.Button-module__gray {
    color: var(--font-color-800);
    background-color: #383737;
    border: 2px solid #383737;
  	transition: all 0.2s;
    padding: 10px 20px;
}

.Button-module__btn.Button-module__gray:hover {
    background: #1e1d1d;
	border: 2px solid #1e1d1d;
    box-shadow: 0px 0px 10px 5px #575555;
    color: #fff;
}

.PlayerMenu-module__loginLink:hover {
	background: var(--orange-color-hover);
  	box-shadow: 0px 0px 10px 5px var(--orange-box-shadow);
}

.PlayerMenu-module__loginLink:hover,
.Button-module__btn.Button-module__accent:hover {
	background: linear-gradient(to left,#ffae00 0,#fe5900 100%);
	color:#000000!important;
  	box-shadow: 0px 0px 10px 5px var(--orange-box-shadow);
}

.PlayerBalance-module__btn:hover {
	background:linear-gradient(to left,#ffae00 0,#fe5900 100%);
	color:#292b2c!important
    box-shadow: 0px 0px 10px 5px #00000017;
}

.swiper {
    width: 100%;
    height: 100%;
}
.swiper-slide {
    text-align: center;
    font-size: 18px;
    background: black;
    display: flex;
    align-items: center;
}

.swiper-slide {
    height: 290px!important;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-button-next:after, .swiper-button-prev:after {
    font-family: swiper-icons;
    font-size: var(--swiper-navigation-size);
    text-transform: none !important;
    letter-spacing: 0;
    font-variant: initial;
    line-height: 1;
    padding: 10px;
}

.swiper-button-prev {
    margin-left: 10px;
}

.swiper-button-next {
    margin-right: 10px;
}

.swiper-button-next, .swiper-button-prev {
    color: var(--default-color-hover)!important;
}

.container.swiperContainer {
	margin-bottom: 40px;
  	display: none;
  	opacity: 0;
    transition: opacity 0.5s;
}

.PlayerMenu-module__avatar {
    border-radius: 50%;
    width: 48px;
    height: 48px;
    transition: 0.2s;
}

.PlayerMenu-module__avatar:hover, .PlayerMenu-module__avatar:focus{
    transform: scale(1.2);
  	transition: 0.2s;
}

.PlayerMenu-module__avatar>a>img {
	width: 100%; 
  	height: 100%; 
  	object-fit: cover; 
  	border-radius: 50%;
}

.PlayerMenu-module__wrapper {
    column-gap: 20px;
}

@keyframes float {
	0% {
        transform: translatey(0px);
    }

    100% {
        transform: translatey(0px);
    }
    50% {
        transform: translatey(-30px);
    }
}

.Servers-module__server {
    max-width: unset;
}

.Servers-module__server.Servers-module__active, .Servers-module__server:hover, .Servers-module__server:focus {
    color: #

fff;
}

.Shop-module__wrapper .boxBody {
    padding: 0px 15px 15px 15px;
}

.Categories-module__category.Categories-module__enableFocus {
background-color:hsla(0, 0%, 0%, 0.18);
color:#ffffff;
margin-top:20px;
border-radius:9px;
font-size:14px
}

.Categories-module__category.Categories-module__enableFocus:focus {
background-color:#ff8000f5;
color:#ffffff
}

.Categories-module__category.Categories-module__enableFocus:hover {
	background: linear-gradient(to left,#ffae00 0,#fe5900 100%);
	color:#000000!important;
  	box-shadow: 0px 0px 10px 5px var(--orange-box-shadow);
}

.Categories-module__category.Categories-module__active {
	background: linear-gradient(to left,#ffae00 0,#fe5900 100%);
	color:#000000!important;
  	box-shadow: 0px 0px 10px 5px var(--orange-box-shadow);
}

.Search-module__wrapper {
border-radius:8px;
display: none;
background:#00000042
}

.Search-module__iconWrapper {
display: none;
background:#ff800073
}


.Product-module__wrapper {
    border-radius: 5px var(--default-border-radius) 5px var(--default-border-radius);
    min-height: 30px;
}

.Products-module__wrapper {
    margin-top: 20px;
    gap: 10px;
}

.Servers-module__servers {
    margin: -5px -5px 10px;
}

.Product-module__wrapper {
background:#46464600;
transition:.2s cubic-bezier(0.45, 0.05, 0.55, 0.95) 0s;
border-radius:8px
}

.Product-module__price .span__price {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    gap: 10px;
}

.Product-module__wrapper,
.Product-module__wrapper .Product-module__price .span__price,
.Product-module__wrapper .Product-module__price {
    transition: all 0.2s;
	
}

.Product-module__wrapper:hover {
-moz-transform:scale(1.07);
-o-transform:scale(1.07);
-webkit-transform:scale(1.07);
box-shadow:0 0 40px 0 #ff80008a;

transform:scale(1.07)
}

.Product-module__wrapper:hover .Product-module__price .span__price {
    color: #ffffff;
	
}

.Product-module__wrapper:hover .Product-module__name {
backface-visibility:hidden;
border-radius:0 0 10px 10px;
opacity:1;
padding:1px 10px
}

/*///////////////////////////////Бонусы за ник (Виджет)//////////////////////////////*/

.bonus-back {
    background-color: rgb(0 0 0 / 30%);
    box-shadow: 0 0 10px 0 rgb(0 0 10 / 10%);
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: all .4s;
    transition: all .4s;
    align-items: center;
    border-radius: 10px;
    padding: 20px 5px;
    position: relative;
    overflow: hidden;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-between;
}
.bonus-name-ico {
    font-size: 16px;
    padding: 20px;
    font-weight: 500;
    color: white;
}
.bonusinfosteam {
    background: #303030;
    padding: 10px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    border-radius: 10px;
}
.bonus-steam {
    background: url(https://gspics.org/images/2024/02/23/0bZN5I.png) no-repeat center center fixed;
    width: 20px;
    height: 20px;
    background-size: 100%;
    margin-right: 5px;
}
.bonus-title {
    font-weight: 500;
    font-size: 14px;
    color: white;
}

/*///////////////////////////////Бонусы при пополнении (Виджет)//////////////////////////////*/
@keyframes gradient {
      0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
 }

.bonus {
    width: 50%;
	background:linear-gradient(to left,#ffae00 0,#fe5900 100%);
	color:#000000!important;
	font-weight: 500;
    border-radius: 0px 10px 10px 0px;
}

/*///////////////////////////////Левое меню (Виджет)//////////////////////////////*/
.menubox {
    margin: 5px;
    translate: 5px 5px;
}
.menubox > a > div {
    margin: 5px;
}
.menubox > a > div > p{
    margin: 1px;
}
/*///////////////////////////////vk ds (Виджет)//////////////////////////////*/
.DL-Social-box {
    display: flex;
    gap: 8px;
	margin-left: -0px;
    border-radius: 15px;
    justify-content: center;
}

.DL-Social-item {
    transition: transform 0.2s;
}

.DL-Social-item:hover {
	transform:scale(1.13)
}

.VK {
    background: rgb(0 0 0 / 30%);
    padding: 15px 15px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgb(0 0 0 / 30%);
}

.DS {
    background: rgb(0 0 0 / 30%);
    padding: 15px 15px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.DL-Social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.DL-Social-link img {
    width: 30px;
    height: 30px;
    transition: transform 0.2s;
}

.DL-Social-link:hover img {
    transform: scale(1.15);
}
/*///////////////////////////////вайблок (Виджет)//////////////////////////////*/
.block_by_category:before {
	color: #000000;
	border-radius: 10px;
	margin-left:5px;
	font-weight:500;
    display: block;
    font-size: 15px;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    text-transform: uppercase;
    white-space: nowrap;
    width: 90%;
}

.block_category_1:before {
	background: linear-gradient(to left,#ffae00 0,#ffac02 100%);
  	padding: 5px;
    content: "1 ЧАС";
}

.block_category_2:before {
	background: linear-gradient(to left,#ffab03 0,#ffa603 100%);
  	padding: 5px;
    content: "2 ЧАСА";
}

.block_category_3:before {
	background: linear-gradient(to left,#ffa403 0,#ffa004 100%);
  	padding: 5px;
    content: "3 ЧАСА";
}

.block_category_4:before {
	background: linear-gradient(to left,#ff9e04 0,#ff9904 100%);
  	padding: 5px;
    content: "4 ЧАСА";
}

.block_category_5:before {
	background: linear-gradient(to left,#ff9605 0,#ff9205 100%);
  	padding: 5px;
    content: "5 ЧАСОВ";
}

.block_category_6:before {
	background: linear-gradient(to left,#ff9005 0,#ff8905 100%);
  	padding: 5px;
    content: "6 ЧАСОВ";
}

.block_category_7:before {
	background: linear-gradient(to left,#ff8805 0,#ff8305 100%);
    padding: 5px;
    content: "7 ЧАСОВ";
}

.block_category_16:before {
	background: linear-gradient(to left,#ff7804 0,#fe7205 100%);
    padding: 5px;
    content: "16 ЧАСОВ";
}

.block_category_14:before {
	background: linear-gradient(to left,#ff8005 0,#ff7b05 100%);
    padding: 5px;
    content: "14 ЧАСОВ";
}

.block_category_10:before {
	background: linear-gradient(to left,#ff6f04 0,#fe6904 100%);
    padding: 5px;
    content: "16 ЧАСОВ";
}

.block_category_19:before {
	background: linear-gradient(to left,#ff6604 0,#fe6103 100%);
    padding: 5px;

    content: "19 ЧАСОВ";
}

.block_category_24:before {
	background: linear-gradient(to left,#fe5f03 0,#fe5900 100%);
    /*background: var(--bg-color-700);*/
    padding: 5px;
    content: "24 ЧАСА";
}

.block_by_category .kit-item {
    align-items: center;
    background: var(--bg-color-700);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    height: 80px;
    margin: 8px;
    width: 80px;
}

.kit-item__image {
    transform: scale(0.7);
    width: 100%;
}

.kit-item__quantity {
    border-radius: 0 0 15px 15px;
    font-size: 12px;
    position: relative;
    top: -20px;
}
/*///////////////////////////////Киты модальное окно//////////////////////////////*/
.store-categories .btn {
border:none!important;
margin-bottom:5px;
margin-right:5px;
transition:all .2s ease-in-out
}

.store-categories .btn.active {
background:linear-gradient(to left,#ffae00 0,#fe5900 100%);
border:none;
color:#000000;
font-weight:500;
transform:scale(1.15)
}

.store-categories .btn.active:hover {
background:linear-gradient(to left,#ffae00 0,#fe5900 100%);
border:none;
color:#000000!important;
font-weight:500;
transform:scale(1.15)!important
}

.store-categories .btn:hover {
background:linear-gradient(to left,#ffae00 0,#fe5900 100%);
font-weight:500;
color:#000000!important;
transform:scale(1)!important
}

.store-categories>.btn {
border-radius:7.5px;
margin-bottom:5px
}

.store-categories>.btn+.btn {
border-radius:7.5px;
margin-left:5px
}

@media (min-width: 768px) {
.store-categories {
flex-direction:row;
flex-wrap:wrap;
margin-bottom:16px
}
}

.customModalContent .boxHeader {
background:#1d1b1a;
}
.customModalContent .boxFooter{
background:#1d1b1a;
}

/* изменение дизайна модального окна
.customModalContent {
background:linear-gradient(180deg,#1d1b18 0%,#2d261a 100%);
border-radius:20px;
box-shadow:0 0 100px #f1c339;
color:white;
padding:10px;
width:900px
}

.customModalContent .boxBody {
background:transparent;
font-size:14px;
line-height:1.42857143;
padding:15px;
position:relative
}

.customModalContent .boxFooter {
background:transparent
}

.customModalContent .boxHeader {
background:transparent;
font-size:40px;
margin-bottom:15px;
text-align:center
}
*/
/*изменение товар -> другое название*
.ProductItemSelector-module__label {
    font-size: 0;
    color: #b9b8b8;

}
.ProductItemSelector-module__label::before {
	content: "Выберите срок действия";
	font-size: 16px; 
    color: #b2b1b1;
}
*/

.btn-secondary {
background:rgba(0,0,0,.19);
border-color:transparent;
color:rgba(255,255,255,.81);
outline:0!important;
padding:7px 13px
}

.btn-secondary.active,.btn-secondary:active,.show>.btn-secondary.dropdown-toggle {
-webkit-box-shadow:none;
background:linear-gradient(to left,#ffae00 0,#fe5900 100%);
border-color:#0a0a0a;
color:#fff;
transform:scale(1.15)
}

.btn.btn-secondary {
background-color:#1c1c1c;
font-weight:500;
border-radius:15px;
color:white;
font-size:14px
}

.btn.btn-secondary:hover {
box-shadow:none;
color:white
}

.customModalPosition {
backdrop-filter:blur(5px)
}

.kit-item {
align-items:center;
background:linear-gradient(180deg,rgba(41,41,58,0) 0%,rgb(99 89 68 / 20%) 100%);
border-radius:8px;
display:flex;
flex-direction:column;
height:80px;
margin:8px;
width:80px
}

.kit-item:hover {
transform:scale(1.1);
transition:transform 200ms cubic-bezier(0.68,-0.55,0.27,1.55)
}

.kit-item__image {
transform:scale(0.7);
width:100%
}

.kit-item__quantity {
border-radius:0 0 15px 15px;
font-size:12px;
position:relative;
top:-20px
}

.kit-items {
-ms-flex-flow:row wrap;
-ms-flex-pack:center;
-webkit-box-direction:normal;
-webkit-box-orient:horizontal;
-webkit-box-pack:center;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
flex-flow:row wrap;
justify-content:center
}

.modal-open {
overflow:hidden
}

.modal-open .modal {
background-size:cover;
overflow-x:hidden
}

.serverheader {
border-radius:15px;
font-size:20px;
margin-bottom:10px;
margin-top:20px
}

.serverheader span {
background:linear-gradient(to left,#ffae00 0,#fe5900 100%);
border-radius:20px;
font-weight:500;
border-radius:7px;
color:white;
color:#000000;
font-size:15px;
font-size:15px;
padding:2px 12px;
padding:2px 12px 2px 12px;
text-transform:uppercase;
text-transform:uppercase;
transform:translate3d(0,0,0)
}

.serverheader span:before {
font-family:FontAwesome;
font-weight:100;
margin-right:5px
}
/*///////////////////////////////Конец//////////////////////////////*/

.MonitoringServer-module__link {
display:none
}

.Widgets-module__widgetWrapper .boxFooter {
display:none
}

.Widgets-module__widgetWrapper .boxBody {
border-radius:10px;
padding:20px 15px
}

.MonitoringServer-module__name {
color:#ffffff;
font-weight:700;
font-size:18px;
}

.Widgets-module__widgetWrapper .boxFooter {
display:none
}

.boxHeader.Shop-module__header,.boxHeader.MonitoringWidget-module__header {
display:none
}

.menu-discord {
background-color:#7289da;
border-radius:10px;
color:#fff;
margin:10px;
padding:.5rem;
transition:all .1s
}

.menu-vk {
background-color:#5181b8;
border-radius:10px;
color:#fff;
margin:-10px;
padding:.5rem;
transition:all .1s
}
.MonitoringServer-module__progressBarWrapper {
height:16px;
background-color:#ffffff1a;
border-radius:40px
}

.MonitoringServer-module__progressBar {
  border-radius: 20px;
	background: linear-gradient(to left,#fe5900 0,#ffae00 100%);
}

.MonitoringServer-module__progressBarAnim {
background-image:linear-gradient(45deg,#ffffff26 25%,transparent 25%,transparent 50%,#ffffff26 50%,#ffffff26 75%,transparent 75%,transparent);
background-size:40px 40px;
box-shadow:none
}

.MonitoringServer-module__progressInfo {
border-radius:10px;
border:1px solid #FF8000;
}

.MonitoringServer-module__info {
	color:#ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
}

@keyframes progress-bar-stripes {
  0% {
      background-position: 1rem 0;
  }
  100% {
      background-position: 0 0;
  }
}


.customModalContent.cMp {
    width: 1250px;
}

.xbox_custom_rules {
  text-align: left;
}

.xbox_custom_rules ul {
  list-style-type: none;
  padding-left: 0;
}

.xbox_custom_rules li {
  margin-bottom: 10px;
}

.MsoNormal span {
    font-weight: bold;
    font-size: 24px;
}

.MsoNormal {
    margin-top: 10px;
    margin-bottom: 10px;
}

.xbox_custom_rules li span {
    padding: 5px;
    background: var(--bg-color-700);
    border-radius: 5px;
    font-weight: 500;
    line-height: 2;
}

.unban span {
    font-size: 15px;
}

.unbancolor {
    color: var(--orange-color);
    font-weight: 500;
}

.DesktopCopyright-module__wrapper {
    bottom: 0px !important;
    left: 0px !important;
  	font-size: 11px!important;
}

.DesktopCopyright-module__link {
    color: var(--orange-color-hover);
    font-weight: 500;
}

.ShopFooter-module__link {
    color: var(--orange-color);
}


.ProductModal-module__command, .ProductModal-module__bp, .ProductModal-module__item, .ProductModal-module__dropdown {
    width: 350px;
}

.ProductModal-module__roulette .boxBody {
    background: var(--bg-color-900);
    padding: 5px 15px 25px !important;
}

.ModalLayout-module__modal .boxBody {
    background: var(--bg-color-900);
    padding: 25px 15px;
}

.PlayerBalanceModal-module__inputWrapper {
    border-radius: var(--default-border-radius);
    background: var(--bg-color-700);
    height: 43px;
}

.PlayerBalanceModal-module__currency {
    height: 100%;
    padding: 0 10px;
    background: unset;
    color: var(--font-color-700);
    line-height: 36px;
}

.PlayerBalanceModal-module__header {
    font-size: 24px;
    align-items: center;
    justify-content: center;
}

.ModalLayout-module__positionWrapper {
    align-items: center;
    justify-content: center;
    text-align: center;
}

.funpay {
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
    background: var(--bg-color-700);
    border-radius: 10px;
    color: var(--default-color);
    font-weight: var(--default-font-weight);
    border: 2px dashed var(--bg-color-800);
    color: var(--default-color);
}

.PlayerBalanceModal-module__bonus {
    display: flex;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    margin-bottom: 25px;
    color: #fff;
    font-weight: 500;
}

.TotalSum-module__inputWrapper, .CountSelector-module__inputWrapper {
    border-radius: var(--default-border-radius);
    background: var(--bg-color-700);
    border: 2px solid var(--bg-color-800);
}

.TotalSum-module__currency, .PlayerBalanceModal-module__currency {
    background: var(--bg-color-800) !important;
    display: flex;
    align-items: center;
    justify-content: center;
}

.CountSelector-module__changeCountBtn.CountSelector-module__left {
    border-right: unset;
}

.CountSelector-module__changeCountBtn.CountSelector-module__right {
    border-left: unset;
}

.CountSelector-module__changeCountBtn {
    background: var(--bg-color-800);
}

.CountSelector-module__changeCountBtn:hover {
    background: var(--orange-color-hover);
}

.productModalGiveText {
    color: rgb(173, 173, 173);
    border: 2px dashed var(--bg-color-800);
    padding: 2%;
    border-radius: 10px;
    background: var(--bg-color-700);
    font-size: 14px;
    margin-top: 30px;
}

.PlayerBalanceModal-module__label {
    display: none;
}

.ProductModal-module__header,
.customModalContent .boxHeader{
    font-size: 24px;
  	justify-content: center;
}

.ProductModal-module__header, .KitContent-module__footer, .ItemContent-module__footer {
	background:#1d1b1a
}

.productModalImg {
    filter: drop-shadow(rgba(70, 82, 82, 0.8) 2px 2px 4px) drop-shadow(rgba(70, 82, 82, 0.8) -2px -2px 4px);
	margin-left:auto;
	margin-right:auto;
	margin-top:auto;
	
}
/*кнопка выбора товара внизу*/
.ProductModal-module__dropdown .ProductModal-module__form {
order:3;
}

.ProductModal-module__dropdown .SelectContent-module__selectorWrapper {
order:2;
margin-top:-20px;
}

.ProductModal-module__dropdown .boxBody {
display:flex;
justify-content:center;
flex-wrap:wrap;
flex-direction:column
}

.ProductModal-module__dropdown .productModalDescription {
order:1;
padding-top:5px;
}

.ProductModal-module__dropdown .productModalProductAvailability {
order:4
}
  
.ProductModal-module__dropdown .productModalGiveText {
order:5
}
/*кнопка выбора товара внизу конец*/
.productModalContainsItem {
    border-radius: var(--default-border-radius);
}

.RouletteContent-module__triangle.RouletteContent-module__top {
    animation-duration: 2s;
    animation-iteration-count: infinite;
    animation-name: bounce-2;
    animation-timing-function: ease;
    border-left: 18px solid transparent;
    border-right: 18px solid transparent;
    border-top: 20px solid #bbb;
}

@keyframes bounce-2 {
	0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-10px);
    }
}

.RouletteContent-module__rouletteItemImg {
    background: #333;
    border-radius: 35px;
    box-shadow: 5px 5px 10px rgba(0,0,0,0.05);
    height: 240px;
    overflow: hidden;
    padding: 25px;
    transform: scale(0.9);
    width: 240px;
    margin-top: 25px;
}

.RouletteContent-module__rouletteItem+.RouletteContent-module__rouletteItem {
    margin-left: 10px;
}

.RouletteContent-module__lineWrapper {
    -webkit-mask-image: linear-gradient(to left, rgba(255, 255, 255, 0) 5%, #000 35%, #000 65%, rgba(255, 255, 255, 0) 95%);
    background: var(--bg-color-900);
    margin-bottom: 15px;
}

.ModalLayout-module__wrapper {
backdrop-filter:blur(2px);
background-color:transparent
}

.ModalLayout-module__modal {
background:#262626;
border-radius:16px;
box-shadow:0 0 100px #ff8000
}

.ModalLayout-module__modal {
    background: var(--bg-color-900);
    border-radius: 20px;
}

.RouletteContent-module__rouletteItem {
    background: var(--bg-color-900);
}

.RouletteContent-module__rouletteItemInfo {
    color: #e8e8e8;
    font-size: 16px;
}

.KitContent-module__containsItem {
    background: var(--bg-color-700);
    border-radius: 15px;
    box-shadow: unset;
    color: rgba(255, 255, 255, .7);
    cursor: pointer;
    margin: -8px 2px 8px;
    overflow: hidden;
    position: relative;
    text-align: center;
    transform: rotate(0deg);
    transition: all .3s;
    height: 251px;
}

.KitContent-module__containsItem .KitContent-module__itemName {
    background: transparent;
    font-size: var(--default-font-size);
    font-weight: var(--default-font-weight);
    text-align: center;
    text-overflow: ellipsis;
    text-shadow: 0 0 4px rgba(0,0,0,.4);
}

.KitContent-module__containsItem .KitContent-module__itemCount {
    background: unset;
    border-radius: 10px;
    bottom: 8px;
    color: rgba(255, 255, 255, .7);
    font-weight: var(--default-font-weight);
    right: 10px;
    text-align: end;
    z-index: 1;
}

.KitContent-module__containsItems {
    grid-template-columns: repeat(5, minmax(190px, 1fr));
}

.ProductModal-module__set {
    width: 1100px!important;
}

.ProfileNav-module__wrapper .boxFooter {
	padding: 0px;
  	margin-top: 10px;
}

.ProfileNav-module__body.boxBody {
    padding: 20px;
    display: flex;
    gap: 5px;
}

.ProfileNav-module__navItem {
    display: flex;
    align-items: center;
    gap: 10px;
    opacity: 1.7;
    transition: all 0.2s;
}

.ProfileNav-module__navItem:hover,
.ProfileNav-module__active {
    opacity: 1;
}

.ProfileNav-module__navItem {
    border-radius: var(--default-border-radius);
}

.ProfileContent-module__body.boxBody,
.BasketContent-module__wrapper .boxBody,
.HistoryContent-module__wrapper .boxBody {
    background: var(--bg-color-700);
}

.ProfileContent-module__box {
    background-color: var(--bg-color-800);
    padding: 0 4px;
    border-radius: var(--default-border-radius);
    margin-top: 5px;
}

.ProfileContent-module__title {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    color: var(--font-color-900);
}

.ProfileContent-module__infoLineValue.ProfileContent-module__steamid {
    color: #fff;
    display: flex;
    justify-content: flex-end;
}

.ProfileContent-module__infoLineValue {
    color: var(--font-color-700);
    display: flex;
    justify-content: flex-end;
}
.Selector-module__dropDownCurrentItem {
    width: 100%;
    background-color: var(--bg-color-800);
    cursor: pointer;
    border-radius: var(--default-border-radius);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    white-space: nowrap;
    font-size: 15px;
    outline: 1px solid transparent;
    transition: all .1s ease;
}

.Selector-module__dropDownList {
    background: var(--bg-color-800);
    border-radius: var(--default-border-radius);
}

.Selector-module__dropDownItem:hover, .Selector-module__dropDownItem:focus, .Selector-module__dropDownItem.Selector-module__active {
    background-color: var(--bg-color-700);
    border-radius: var(--default-border-radius);
}

.ProfileContent-module__input {
    background: var(--bg-color-800);
    border-radius: var(--default-border-radius);
}

.Selector-module__dropDownCurrentItem:hover, .Selector-module__dropDownCurrentItem:focus {
    outline: unset;
}

.BasketSearch-module__wrapper,
.HistorySearch-module__wrapper {
    border-radius: var(--default-border-radius);
    background: var(--bg-color-800);
}

.BasketSearch-module__iconWrapper,
.HistorySearch-module__iconWrapper {
    background: var(--bg-color-800);
}

.BasketTable-module__tableHeader,
.HistoryTable-module__tableHeader {
    background-color: var(--bg-color-800);
    border-radius: var(--default-border-radius);
}

.BasketTable-module__tableLine:nth-child(2n-1),
.HistoryTable-module__tableLine:nth-child(2n-1) {
    background-color: var(--bg-color-800);
    border-radius: var(--default-border-radius);
}

.Pagination-module__page:hover, .Pagination-module__page.Pagination-module__active, .Pagination-module__page:focus {
    color: #fff;
}

.content__info>.title {
    font-size: 17px;
    color: black;
    margin-bottom: 3px;
    font-weight: 500;
}

.content__info>.description {
    font-weight: 300;
    color: #404040;
  	font-size: 14px;
  	border-radius: 10px;
}

.widget__img {
    width: 50px;
}

.widget__title {
    font-weight: var(--default-font-weight);
    color: #fff;
}

.widget__description {
    font-size: 12px;
}

.widgetWrapper--flex .boxBody {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    border-radius: 10px;
    background: var(--bg-color-700) !important;
    transition: 0.2s;
}

.widgetWrapper--flex .boxBody:hover {
    transform: translateY(-3px);
    transition: 0.2s;
}

.customModalPosition {
    align-items: center;
    justify-content: center;
    text-align: center;
  	transition: backdrop-filter 0.5s ease;
  	backdrop-filter: blur(10px);
}

.customModalContent {
background:linear-gradient(180deg,#1d1b18 0%,#2d261a 100%);
border-radius:20px;
box-shadow:0 0 100px #ef8207;
color:white;
padding:10px;
width:900px
}



.kit-items {
    -ms-flex-flow: row wrap;
    -ms-flex-pack: center;
    -webkit-box-direction: normal;
    -webkit-box-orient: horizontal;
    -webkit-box-pack: center;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
}

.kit-item__image {
    transform: scale(0.7);
    width: 100%;
}

.kit-item__quantity {
    border-radius: 0 0 15px 15px;
    font-size: 12px;
    position: relative;
    top: -20px;
}

.ProductItemSelector-module__items {
    display: grid;
    grid-template-columns: repeat(3, minmax(50px, 1fr));
    gap: 8px;
}

.ProductItemSelector-module__item {
    border-radius: var(--default-border-radius);
    background: var(--bg-color-700);
    border: 0px;
}

.ProductItemSelector-module__item.ProductItemSelector-module__active {
    border-radius: var(--default-border-radius);
    background: var(--bg-color-800);
    border: 0px;
}

.ProductItemSelector-module__item {
    transition: all 0.2s;
}

.ProductItemSelector-module__item:hover,
.ProductItemSelector-module__item:active {
    border: 1px solid var(--orange-color);
    border-radius: var(--default-border-radius);
}

.block-items {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 15px;
    overflow: hidden;
}

.block-item {
    cursor: pointer;
    background: var(--bg-color-700);
    padding: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
}

.block-item img {
    width: 80px;
    height: 80px;
}

.block-item p {
    cursor: pointer;
    margin-top: 0px;
    margin-bottom: 1rem;
    color: rgb(186, 177, 168);
}

.block-time {
    position: absolute;
    padding: 5px;
    font-weight: 400;
    font-size: 15px;
    top: 5px;
    right: 5px;
    line-height: 14px;
    color: black;
    background: var(--bg-color-800);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 15px -6px;
    backdrop-filter: blur(6px);
    border-radius: 5px;
}

.dropDownList {
    border-radius: var(--default-border-radius);
}

.PlayerMenuMobile-module__profileLink, .PlayerMenuMobile-module__loginLink {
    border-radius: var(--default-border-radius);
    background-color: var(--bg-color-700);
    text-align: center;
    width: 100%;
    padding: 10px;
}

.desc__content {
    padding: 10px;
    background-color: var(--bg-color-700);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}

.desc__content__img {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-start;
}

.desc__content>a>img {
    width: 135px;
  	border-radius: 8px;
}

.desc__content>font, .desc__content__img>font {
    font-size: 14px;
    font-weight: 500;
    padding: 5px 10px;
    background: var(--bg-color-800);
    color: var(--default-color);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 3px 50px 0px rgba(0, 0, 0, 0.3);
}

.content__info>.title {
    font-size: 17px;
    color: var(--title-color);
    margin-bottom: 3px;
    font-weight: 500;
}

.content__info>.description {
    font-weight: 300;
    color: #ffa141;
  	font-size: 14px;
}

.desc__title {
	margin-bottom: 5px;
}

.desc__title__kit {
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
}

.hzBtn {
    font-size: 14px;
    font-weight: 500;
    padding: 5px 10px;
    background: var(--orange-color);
    color: var(--default-color-hover) !important;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 3px 50px 0px rgba(0, 0, 0, 0.3);
    transition: all 0.2s;
    cursor: pointer;
    letter-spacing: 0px !important;
}

.hzBtn:hover {
    background: var(--orange-color-hover);
    cursor: pointer;
    box-shadow: 0px 0px 10px 5px rgb(229 174 31 / 10%);
}

.customModalPosition .desc__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
}

.block-one, .block-two {
    background: var(--bg-color-700);
    padding: 20px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 5px;
}

.block-contex {
    display: flex;
    justify-content: space-around;
    gap: 15px;
    margin-bottom: 25px;
}

.aa {
    opacity: 0.7;
}

.bb {
    font-size: 18px;
    color: white;
}

.desc__block {
    padding: 0px;
    background-color: #ff000000;
    border-radius: 10px;
}

.desc__title {
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
}

.desc__block.one {
	margin-bottom: 20px;
}

.productModalDescription {
    padding: 1px;
}

.Product-module__discount {
    margin: 8px;
	font-weight: 450;
    border-radius: 5px 10px 5px 5px;
	background:linear-gradient(to left,#ffae00 0,#fe5900 100%);
}

.Product-module__price {
	color:#ffffffde;
	font-weight: 450;
	padding: 5px 5px;
	border-radius: 0px 0 15px 0;    
}

.Product-module__name {
	background:linear-gradient(to left,#ffae00 0,#fe5900 100%);
    font-weight: 500;
    color: #000000;
    display: flex;
	display: ;
    align-items: center;
    justify-content: center;
}

.dropDownItem:hover, .dropDownItem:focus, .dropDownItem.active {
    background-color: var(--bg-color-800);
    border-radius: var(--default-border-radius);
}

.dropDownCurrentItem {
    border-radius: var(--default-border-radius);
}

.dropDownCurrentItem:hover, .dropDownCurrentItem:focus {
    outline: unset;
}

.boxBody.PlayerMenuMobile-module__body {
	border-radius: 0px;
}

.container-oplata .tooltiptext1 {
background-color:rgba(0,0,0,0.5);
border-radius:6px;
color:#fff;
left:105%;
opacity:0;
padding:10px;
position:absolute;
text-align:center;
transition:opacity 220ms ease-out;
visibility:hidden;
width:170px;
z-index:1
}

.container-oplata .tooltiptext1::after {
border-color:transparent rgba(0,0,0,0.5) transparent transparent;
border-style:solid;
border-width:5px;
content:"";
margin-top:-5px;
position:absolute;
right:100%;
top:50%
}

.container-oplata:hover .tooltiptext1 {
opacity:1;
visibility:visible
}

.priv_discount {
background:#1b1b1b;
border-radius:0 10px 0 10px;
color:white;
cursor:help;
font-size:14px;
font-weight:400;
opacity:1;
padding:0 8px 0 10px;
position:absolute;
right:0;
top:0;
z-index:3
}

.priv_discount2 {
background:rgba(33,33,33,0.5);
border-radius:0 10px 0 10px;
color:white;
cursor:help;
font-size:14px;
font-weight:400;
opacity:1;
padding:0 8px 0 10px;
position:absolute;
right:0;
top:0;
z-index:3
}

.productModalDescription .container-oplata {
background:#333;
border-radius:12px;
cursor:pointer;
display:-webkit-inline-box;
height:50px;
margin-bottom:5px;
padding:5px;
right:-21110px;
text-align:initial;
transform:scale(1);
transition:all .2s ease-out;
width:100%
}

.productModalDescription .container-oplata {
display:flex
}

.productModalDescription .container-oplata:hover {
transform:scale(0.95)
}

.productModalDescription .container-oplata:last-child {
margin-bottom:0!important;
right:-11120px
}

.productModalDescription .icon-user-oplata {
-ms-flex:0 0 auto;
-webkit-box-flex:0;
border-radius:0;
flex:0 0 auto;
height:30px!important;
margin:5px;
margin-right:10px!important;
width:30px!important
}

.productModalDescription .textContainer-oplata {
-ms-flex:1;
-ms-flex-direction:column;
-ms-flex-pack:justify;
-webkit-box-direction:normal;
-webkit-box-flex:1;
-webkit-box-orient:vertical;
-webkit-box-pack:justify;
display:-webkit-box;
display:-ms-flexbox;
display:flex;
flex:1;
flex-direction:column;
justify-content:space-evenly;
overflow:hidden
}

.ProductModal-module__dropdown .boxHeader,.ProductModal-module__dropdown .boxBody,.ProductModal-module__dropdown .boxFooter,.ProductModal-module__dropdown .productModalDescription {
background:transparent
}

@media (max-width: 790px){
    .container.swiperContainer {
        display: none;
    }
  
  	.Categories-module__categoriesBlock {
        display: flex;
        align-items: flex-end;
        flex-direction: column;
    }
  
    .Search-module__wrapper {
        width: 100%;
    }
  
  	.Categories-module__categories {
        display: flex;
		padding: 10px;
        justify-content: center;
    }
  
  	.Product-module__price {
        background: var(--bg-color-800);
    }
  
  	.Shop-module__wrapper .boxBody {
        padding: 0px 0px 15px 0px;
    }
}

@media (max-width: 355px){
    .Product-module__wrapper {
        min-height: 355px;
    }
  
  	.KitContent-module__containsItems {
        grid-template-columns: repeat(1, minmax(190px, 1fr));
    }
}

@media only screen and (max-width: 767px) {
.container-oplata .tooltiptext1 {
left:24%;
top:-160%
}

.container-oplata .tooltiptext1::after {
border-color:rgba(0,0,0,0.5) transparent transparent;
border-style:solid;
border-width:5px;
content:"";
margin-top:-5px;
position:absolute;
right:50%;
top:105%
}
}

.xbox {
position: relative;
background-color: rgb(0 0 0 / 30%);
margin-bottom: 20px;
border-radius: 15px;
}

input::placeholder {
color: #ffffffd6 !important;
}

.xbox__footer {
border-radius : 0 0 3px 3px;
}
.xbox__footer, .xbox__header {
background : rgb(236 26 26 / 0%);
padding : 10px;
}
.xbox__header h4 {
line-height: 100%;
font-size: 18px;
margin: auto;
width: auto;
text-align: center;
border-radius: 3px;
transition: all 0.1s linear;
font-weight: 700;
color: #ffffff;
}

.xbox__body {
    font-size: 16px;
    padding: 5px 15px;
	color: #ffffff;
	font-weight: 350;
    background-color: rgb(255 255 255 / 0%);
}
