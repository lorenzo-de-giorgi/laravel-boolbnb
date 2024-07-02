import './bootstrap';
import '~resources/scss/app.scss';
import '~icons/bootstrap-icons.scss';
import * as bootstrap from 'bootstrap';
import.meta.glob([
    '../img/**'
])

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('register-form');
    const password = document.getElementById('password');
    const passwordConfirm = document.getElementById('password-confirm');
    const passwordMatchError = document.getElementById('password-match-error');
    const birthday = document.getElementById('birthday');

    form.addEventListener('submit', function (event) {
        if (password.value !== passwordConfirm.value) {
            event.preventDefault();
            passwordMatchError.style.display = 'block';
        } else {
            passwordMatchError.style.display = 'none';
        }
    });

    passwordConfirm.addEventListener('input', function () {
        if (password.value !== passwordConfirm.value) {
            passwordConfirm.classList.add('is-invalid');
            passwordMatchError.style.display = 'block';
        } else {
            passwordConfirm.classList.remove('is-invalid');
            passwordMatchError.style.display = 'none';
        }
    });

    const today = new Date();
    const maxDate = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
    birthday.max = maxDate.toISOString().split('T')[0];
});

const deleteSubmitButtons = document.querySelectorAll(".delete-button");

deleteSubmitButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        event.preventDefault();

        const dataTitle = button.getAttribute("data-item-title");
        const dataId = button.getAttribute("data-item-id");

        const modal = document.getElementById("deleteModal");

        const bootstrapModal = new bootstrap.Modal(modal);
        bootstrapModal.show();

        const modalItemTitle = modal.querySelector("#modal-item-title");
        modalItemTitle.textContent = dataTitle;

        const buttonDelete = modal.querySelector("button.btn-danger");

        buttonDelete.addEventListener("click", () => {
            button.parentElement.submit();
        });
    });
});

//prendo la casella di input file
const image = document.getElementById("uploadImage");

//se esiste nella pagina
if (image) {
    image.addEventListener("change", () => {
        //console.log(image.files[0]);
        //prendo l'elemento ing dove voglio la preview
        const preview = document.getElementById("uploadPreview");

        //creo nuoco oggetto file reader
        const oFReader = new FileReader();

        //uso il metodo readAsDataURL dell'oggetto creato per leggere il file
        oFReader.readAsDataURL(image.files[0]);

        //al termine della lettura del file
        oFReader.onload = function (event) {
            //metto nel src della preview l'immagine
            preview.src = event.target.result;
        };
    });
}

let deletedImages = document.querySelectorAll('.deletedImages');
let toDelete = document.getElementById('toDelete');
deletedImages.forEach(function (deletedImage){
    deletedImage.addEventListener('click', () =>{

   /*  toDelete.value = deletedImage.id; */
    let id = deletedImage.id;
    toDelete.value = id; 
    console.log(toDelete.value);
    })
});

let resetDelete = document.getElementById('resetDelete');
resetDelete.addEventListener('click', () => {
    toDelete.value = ''
})