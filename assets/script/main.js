const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const searchInput = $('.search-box')
const searchBox = $('.search-icon')
const searchBtn = $('.search-btn')
const nextBtn = $('.btn-right')
const prevBtn = $('.btn-left')
const sliceList = $('.slice-imgs')
const btnCricle = $('.btn-cricle')

const tabs = $$('.food-item')
const contentItem = $$('.review-content')
// const showSlides = function(n){
//     let slideIndex = 0
//     if(n > sliceLists.length){
//         slideIndex =1}
//     if(n<1){
//         slideIndex=sliceLists.length}
//     for (let i=0; i < sliceLists.length; i++){
//         sliceLists[i].style.display = "none"
//     }
//     for (let i= 0; i < btnCricles.length; i++){
//         btnCricles[i].className = btnCricles[i].className.replace(" btn-cricle-highlight", "");
//     }
//     console.log(sliceLists[slideIndex-1], sliceLists.length)

//     sliceLists[slideIndex-1].style.display = "block";
    // btnCricles[slideIndex-1].className += " btn-cricle-highlight";
// }

const app = {
    currentIndex: 0,
    // config: JSON.parse(localStorage.getItem(PLAYER_STORE_KEYS)) || {},
    sliceImg: [
        {
            id: 0,
            src: 'https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000', 
            alt: 'hinh 1'
        },
        {
            id: 1,
            src: 'https://img.freepik.com/premium-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?w=2000',
            alt: 'hinh 2'
        },
        {
            id: 2,
            src: 'https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1',
            alt: 'hinh 3'
        },
    ],

    render: function(){
        indexSlice = this.currentIndex
        _this = this
        sliceList.innerHTML = `<img class="slice-img active" src="${this.sliceImg[0].src}" alt="${this.sliceImg[0].alt}">`         
    },
    handleEvents: function(){
        searchBox.onclick = () => {
            if(!$('.active.search-box')){
                $('.search-box').classList.add('active')
                $('.search-box').focus()
            }
            else{
                $('.search-box').classList.remove('active')
                searchInput.value=''
            }
        }
        nextBtn.onclick = () => {
            if(this.currentIndex >= this.sliceImg.length - 1){
                this.currentIndex=0
                sliceList.innerHTML = `<img class="slice-img active" src="${this.sliceImg[this.currentIndex].src}" alt="">`
            }
            else {
                this.currentIndex++
                sliceList.innerHTML = `<img class="slice-img active" src="${this.sliceImg[this.currentIndex].src}" alt="">`
            }
        }
        prevBtn.onclick = () => {
            if(this.currentIndex <= 0){
                this.currentIndex = 2
                sliceList.innerHTML = `<img class="slice-img active" src="${this.sliceImg[this.currentIndex].src}" alt="">`
            }
            else {
                this.currentIndex--
                sliceList.innerHTML = `<img class="slice-img active" src="${this.sliceImg[this.currentIndex].src}" alt="">`
            }
        }
        tabs.forEach((tab, index) => {
            const content = contentItem[index]
            tab.onclick = function() {
                $('.review-content.active-content').classList.remove('active-content')
                $('.food-item.active-item').classList.remove('active-item')
                this.classList.add('active-item')
                content.classList.add('active-content')
            }
        })

    },
    loadingSlides: function(){
        setInterval(()=>{
            if(this.currentIndex >= this.sliceImg.length - 1){
                this.currentIndex=0
                sliceList.innerHTML = `<img class="slice-img active" src="${this.sliceImg[this.currentIndex].src}" alt="">`
            }
            else {
                this.currentIndex++
                sliceList.innerHTML = `<img class="slice-img active" src="${this.sliceImg[this.currentIndex].src}" alt="">`
            }
        }, 3000)
    },
    start: function(){
        // this.loadingSlides()

        
        this.render()
        this.handleEvents()
    }
}

app.start()

