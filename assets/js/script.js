const installBuilds =()=> {
    const buildItem = document.querySelectorAll('.build-item path')
    const buildItemAdress = document.querySelector('#adress')
    const buildItemFloors = document.querySelector('#floors')
    const buildItemFlats = document.querySelector('#flats')

    buildItem.forEach(item => {
        let itemFlats = item.getAttribute('data-flats')
        
        if( Number(itemFlats) === 0 ) {
            item.closest('a').classList.add('sales')
        }

        const saleItem = document.querySelectorAll('.sales')
   
        // saleItem.forEach((sales, index) =>{
        //     sales.setAttribute('data-modal', 'modal-' + (index + 1))
        // })

        item.addEventListener('mouseover', function () {
            const getItemAdress = item.getAttribute('data-adress')
            const getItemFloors = item.getAttribute('data-floors')
            const getItemFlats = item.getAttribute('data-flats')

            buildItemAdress.innerHTML = getItemAdress
            buildItemFloors.innerHTML = getItemFloors
            buildItemFlats.innerHTML = getItemFlats
        })

        item.addEventListener('click', function(event){
           if(item.closest('.sales')){
                event.preventDefault()
                alert('дом продан')
           }
        })
    })
}
document.querySelector('.builds-list-poland') ? installBuilds() : null;

