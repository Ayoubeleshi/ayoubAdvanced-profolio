//
//
//

let contrasttoggle = false;

function togglecontrast(){

    contrasttoggle = !contrasttoggle;

    if(contrasttoggle){
      document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }
}




function contact(event){
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += "modal__overlay--visible";

    emailjs
      .sendForm(
        'service_z8whcjc',
        'template_mm328ru',
        event.target,
        'pYvAX6-MSg_xJxlda'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailble. please contact me on ayoubeleshi@gmail.com"
        );
    })
}

let ismodalopen = false;

function toggleModal() {
    if(ismodalopen) {
        ismodalopen = false;
        return document.body.classList.remove("modal--open");
    }

    ismodalopen = true;

    document.body.classList += " modal--open";

}


const scaleFactor = 1/20;

function movebackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;
    
    for(let i = 0; i < shapes.length; ++i){
        const isodd =i % 2 !== 0;
        const oddintegar = isodd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * oddintegar}px, ${y * oddintegar}px)`
    }
}


