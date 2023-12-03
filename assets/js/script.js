const installCalcHeight = () => {
  const buildNav = document.querySelector(".builds-poland-nav");
  const buildInfo = document.querySelector(".builds-info");

  function reportWindowSize() {
    const buildNavHeight = buildNav.offsetHeight;
    const buildInfoHeight = buildInfo.offsetHeight;
    const calcHeight = buildNavHeight - buildInfoHeight;
    buildInfo.style.top = calcHeight + "px";
  }
  reportWindowSize();

  window.onresize = reportWindowSize;
};

document.querySelector(".builds-list-poland") ? installCalcHeight() : null;

const installBuilds = () => {
  const buildItem = document.querySelectorAll(".build-item path");
  const buildItemAdress = document.querySelector("#adress");
  const buildItemFloors = document.querySelector("#floors");
  const buildItemFlats = document.querySelector("#flats");

  const buildItemFreeFlats = document.querySelector("#free-flats");
  const buildItemSoldFlats = document.querySelector("#sold-flats");
  const buildItemActionFlats = document.querySelector("#action-flats");
  const buildItemReservationFlats =
    document.querySelector("#reservation-flats");

  buildItem.forEach((item) => {
    let itemFlats = item.getAttribute("data-flats");

    if (Number(itemFlats) === 0) {
      item.closest("a").classList.add("sales");
    }

    const saleItem = document.querySelectorAll(".sales");

    saleItem.forEach((sales, index) => {
      sales.setAttribute("data-modal", "modal-" + (index + 1));
    });

    item.addEventListener("mouseover", function () {
      const getItemAdress = item.getAttribute("data-adress");
      const getItemFloors = item.getAttribute("data-floors");
      const getItemFlats = item.getAttribute("data-flats");

      const getItemFreeFlats = item.getAttribute("data-free-flats");
      const getItemSoldFlats = item.getAttribute("data-sold-flats");
      const getItemActionFlats = item.getAttribute("data-action-flats");
      const getItemReservationFlats = item.getAttribute(
        "data-reservation-flats"
      );

      buildItemAdress.innerHTML = getItemAdress;
      buildItemFloors.innerHTML = getItemFloors;
      buildItemFlats.innerHTML = getItemFlats;
      buildItemFreeFlats.innerHTML = getItemFreeFlats;
      buildItemSoldFlats.innerHTML = getItemSoldFlats;
      buildItemActionFlats.innerHTML = getItemActionFlats;
      buildItemReservationFlats.innerHTML = getItemReservationFlats;
    });

    item.addEventListener("click", function (event) {
      if (item.closest(".sales")) {
        event.preventDefault();
        // alert('дом продан')
      }
    });
  });
};
document.querySelector(".builds-list-poland") ? installBuilds() : null;

function installModal() {
  const callModalBtns = document.querySelectorAll("[data-modal]");
  const customModal = document.querySelectorAll(".custom-modal");
  const closeModal = document.querySelectorAll(".close-modal");

  customModal.forEach((modal, index) => {
    modal.setAttribute("id", "modal-" + (index + 1));
  });

  callModalBtns.forEach((call, index) => {
    call.addEventListener("click", function () {
      const callModal = document.querySelector("#modal-" + (index + 1));
      callModal.style.display = "flex";
      callModal.classList.add("show-modal");
    });
  });

  closeModal.forEach((closeBtn) => {
    closeBtn.addEventListener("click", onCloseModal);
  });

  function onCloseModal() {
    const openModal = document.querySelector(".show-modal");
    openModal.classList.remove("show-modal");
    openModal.style.display = "none";
  }
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      onCloseModal();
    }
  });

  window.onclick = (event) =>
    customModal.forEach((item) => {
      event.target == item ? onCloseModal() : false;
    });
}
document.querySelector(".custom-modal") ? installModal() : false;

const flatArray = [
  {
    id: 0,
    house: "2",
    floor: "7",
    rooms: "3",
    square: "82.3 м²",
    price: "700$",
    priceTotal: "52500$",
    flatNumber: 1,
    status: "Вільно",
  },
  {
    id: 1,
    house: "2",
    floor: "7",
    rooms: "2",
    square: "60,7 м²",
    price: "700$",
    priceTotal: "42000$",
    flatNumber: 2,
    status: "Бронь",
  },
  {
    id: 2,
    house: "2",
    floor: "7",
    rooms: "3",
    square: "60,7 м²",
    price: "700$",
    priceTotal: "42000$",
    flatNumber: 3,
    status: "Продано",
  },
  {
    id: 3,
    house: "2",
    floor: "7",
    rooms: "3",
    square: "82 м²",
    price: "700$",
    priceTotal: "52500$",
    flatNumber: 4,
    status: "Акція",
  },
  {
    id: 4,
    house: "2",
    floor: "7",
    rooms: "3",
    square: "79.7 м²",
    price: "700$",
    priceTotal: "55790$",
    flatNumber: 5,
    status: "Вільно",
  },
  {
    id: 5,
    house: "2",
    floor: "7",
    rooms: "1",
    square: "39.2 м²",
    price: "700$",
    priceTotal: "27440$",
    flatNumber: 6,
    status: "Бронь",
  },
  {
    id: 6,
    house: "2",
    floor: "7",
    rooms: "1",
    square: "40.0 м²",
    price: "700$",
    priceTotal: "29400$",
    flatNumber: 7,
    status: "Продано",
  },
  {
    id: 7,
    house: "2",
    floor: "7",
    rooms: "1",
    square: "39.2 м²",
    price: "700$",
    priceTotal: "27440$",
    flatNumber: 8,
    status: "Акція",
  },
  {
    id: 8,
    house: "2",
    floor: "7",
    rooms: "3",
    square: "79.3 м²",
    price: "700$",
    priceTotal: "55510$",
    flatNumber: 9,
    status: "Акція",
  },
];
window.addEventListener("load", function () {
  function installFloorPlan() {
    const flats = document.querySelectorAll(".flat");
    const flatInfo = document.querySelector(".flat-info");
    console.log(flatInfo);

    const faltObj = [
      {
        id: 4,
        house: "2",
        floor: "7",
        rooms: "3",
        square: "79.7 м²",
        price: "700$",
        priceTotal: "55790$",
        flatNumber: 5,
        status: "Вільно",
      },
    ];

    const renderInfo = (array) => {
      console.log(array);
      const flatInformation = array.map((item) => {
        return `
                <div class="flat-item">
                    Номер будинку : <b>${item.house}</b>
                </div>
                <div class="flat-item">
                    Поверх : <b>${item.floor}</b>
                </div>
                <div class="flat-item">
                    К-сть кімнат : <b>${item.rooms}</b>
                </div>
                <div class="flat-item">
                    Площа : <b>${item.square}</b>
                </div>
                <div class="flat-item">
                    Ціна за м² : <b>${item.price}</b>
                </div>
                <div class="flat-item">
                    Ціна за квартиру : <b>${item.priceTotal}</b>
                </div>
                <div class="flat-item">
                    Номер квартири : <b>${item.flatNumber}</b>
                </div>
                <div class="flat-item">
                    Статус квартири : <b>${item.status}</b>
                </div>
                
                `;
      });
      flatInfo.innerHTML = flatInformation;
    };
    renderInfo(faltObj);

    const removeActiveClass = () =>
      flats.forEach((item) => {
        item.classList.remove("active");
      });

    flats.forEach((flat) => {
      flat.addEventListener("mouseover", function () {
        removeActiveClass();
        flat.classList.add("active");

        const thisFlat = flat.getAttribute("id");
        console.log(thisFlat);

        const flatNumber = flatArray.filter(
          (item) => item.flatNumber === Number(thisFlat)
        );
        console.table(flatNumber);

        renderInfo(flatNumber);
      });

      if (flat.classList.contains("booking")) {
        flat.querySelector(".flat-status").innerHTML = "Бронь";
      } else if (flat.classList.contains("action")) {
        flat.querySelector(".flat-status").innerHTML = "Акція";
      } else if (flat.classList.contains("sold")) {
        flat.querySelector(".flat-status").innerHTML = "Продано";
      } else {
        flat.querySelector(".flat-status").innerHTML = "Вільно";
      }
    });
  }
  document.querySelector(".page-floor") ? installFloorPlan() : null;
});
