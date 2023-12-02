const installCalcHeight =()=> {
    const buildNav = document.querySelector('.builds-poland-nav')
    const buildInfo = document.querySelector('.builds-info') 

    function reportWindowSize() {
        const buildNavHeight = buildNav.offsetHeight
        const buildInfoHeight = buildInfo.offsetHeight
        const calcHeight = buildNavHeight - buildInfoHeight;
        buildInfo.style.top = calcHeight + "px" ;
    } reportWindowSize()

    window.onresize = reportWindowSize;
}

document.querySelector('.builds-list-poland') ? installCalcHeight() : null;


const installBuilds =()=> {
    const buildItem = document.querySelectorAll('.build-item path')
    const buildItemAdress = document.querySelector('#adress')
    const buildItemFloors = document.querySelector('#floors')
    const buildItemFlats = document.querySelector('#flats')

    const buildItemFreeFlats = document.querySelector('#free-flats')
    const buildItemSoldFlats = document.querySelector('#sold-flats')
    const buildItemActionFlats = document.querySelector('#action-flats')
    const buildItemReservationFlats = document.querySelector('#reservation-flats')

    buildItem.forEach(item => {
        let itemFlats = item.getAttribute('data-flats')
        
        if( Number(itemFlats) === 0 ) {
            item.closest('a').classList.add('sales')
        }

        const saleItem = document.querySelectorAll('.sales')
   
        saleItem.forEach((sales, index) =>{
            sales.setAttribute('data-modal', 'modal-' + (index + 1))
        })

        item.addEventListener('mouseover', function () {
            const getItemAdress = item.getAttribute('data-adress')
            const getItemFloors = item.getAttribute('data-floors')
            const getItemFlats = item.getAttribute('data-flats')

            const getItemFreeFlats = item.getAttribute('data-free-flats');
            const getItemSoldFlats = item.getAttribute('data-sold-flats');
            const getItemActionFlats = item.getAttribute('data-action-flats');
            const getItemReservationFlats = item.getAttribute('data-reservation-flats');

            buildItemAdress.innerHTML = getItemAdress
            buildItemFloors.innerHTML = getItemFloors
            buildItemFlats.innerHTML = getItemFlats
            buildItemFreeFlats.innerHTML = getItemFreeFlats
            buildItemSoldFlats.innerHTML = getItemSoldFlats
            buildItemActionFlats.innerHTML = getItemActionFlats
            buildItemReservationFlats.innerHTML = getItemReservationFlats
            
        })

        item.addEventListener('click', function(event){
           if(item.closest('.sales')){
                event.preventDefault()
                // alert('дом продан')
           }
        })
    })
}
document.querySelector('.builds-list-poland') ? installBuilds() : null;

function installModal() {
    const callModalBtns = document.querySelectorAll("[data-modal]");
    const customModal = document.querySelectorAll('.custom-modal')
    const closeModal = document.querySelectorAll('.close-modal')

    customModal.forEach((modal, index)=>{
        modal.setAttribute('id', 'modal-' + (index + 1))
    })

    callModalBtns.forEach((call, index) =>{
        call.addEventListener('click', function(){
            const callModal = document.querySelector('#modal-' + (index + 1))
            callModal.style.display = "flex";
            callModal.classList.add('show-modal')
        })
    })

    closeModal.forEach(closeBtn => {
        closeBtn.addEventListener('click', onCloseModal)
    })
  
    function onCloseModal() {
        const openModal = document.querySelector('.show-modal')
        openModal.classList.remove('show-modal')
        openModal.style.display = "none";
    } 
    window.addEventListener("keydown", function(event){
        if (event.key === "Escape"){
            onCloseModal()
        }
    });
 
 
    window.onclick = (event) => customModal.forEach(item => {
        event.target == item ? onCloseModal() : false
        }
    );

}
document.querySelector('.custom-modal') ? installModal() : false;