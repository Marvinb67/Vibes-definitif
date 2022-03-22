
        // Menu burger

        let burger = document.querySelector('#burger')
        burger.addEventListener("click", function () {
            let nav = burger.previousElementSibling

            if (nav.style.display == "none") {
                nav.style.display = "flex"
            } else {
                nav.style.display = "none"
            }
        })

        // up button

        let up = document.querySelector("#up")
        let rootElement = document.querySelector("header")

        up.addEventListener("click", function () {
            rootElement.scrollIntoView({ behavior: "smooth", block: "start" })
        })

        // accordeons menu

        let accordeons = document.querySelectorAll(".show")

        accordeons.forEach(function (accordeon) {
            accordeon.addEventListener("click", function () {
                let pannelActif = document.querySelector(".show.active")

                let nextPannel = pannelActif.nextElementSibling
                pannelActif.classList.toggle("active")
                nextPannel.classList.toggle("active")

                this.classList.toggle("active")
                let pannel = this.nextElementSibling
                pannel.classList.toggle("active")

                let icon = pannelActif.firstElementChild

                if (pannel.classList == "active") {
                    icon.classList.replace("fa-plus", "fa-minus")
                }

            })
        })
        // Filtrage gallerie

        let filerButton = document.querySelectorAll(".filter-button")

        filerButton.forEach(function (element) {
            element.addEventListener("click", function () {

                let activeButton = document.querySelector(".filter-button.active")

                activeButton.classList.toggle("active")

                this.classList.toggle("active")

                imgFilter(this.dataset.filter)
            })
        })


        let filterImg = document.querySelectorAll(".filter-img")
        function imgFilter(dataType) {

            filterImg.forEach(function (element) {
                if (dataType == "all" || element.dataset.type == dataType) {
                    element.classList.remove("hide")
                } else {
                    element.classList.add("hide")
                }
            })
        }

        filterImg.forEach(function (element) {
            element.addEventListener("mouseover", function () {

                let imgLogo = element.lastElementChild

                imgLogo.classList.toggle("active")

                setTimeout(function () {
                    imgLogo.classList.toggle("active")
                }, 500)
            })
        })

        // Modal image

        let imgs = document.querySelectorAll('.gallery-img')
        let modal = document.querySelector('#modal')
        let modalImg = document.getElementById("modal-content")
        let modalClose = document.querySelector("#modal-close")
        let modalCaption = document.querySelector("#modal-caption")

        imgs.forEach(function (img){

            img.addEventListener("click", function(){
                modal.style.display = 'block'
                modal.style.backgroundImage = 'url(' + imgs.src + ')';
                modalImg.src = this.src;
                modalCaption.innerHTML = img.alt
            })
        })

        modal.addEventListener("click", function(){
            modal.style.display = 'none'
        })
        // Changer de theme

        let themeButton = document.querySelector("#change-theme")
        let theme = document.querySelector("#css")

        themeButton.addEventListener("click", function () {
            if (theme.getAttribute('href') == 'asset/styles.css') {
                theme.setAttribute('href', 'asset/stylesDark.css')
            } else {
                theme.setAttribute('href', 'asset/styles.css')
            }
        })