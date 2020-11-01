export default function initModal() {
    
    const togglelModalPerfil = document.querySelector('#profile');
    const modalPerfil = document.querySelector('.modal-perfil');

    const togglelModalApp = document.querySelector('#nav-bar');
    const modalApp = document.querySelector('.modal-app');
   
    function toggleModal(element, modal ,modalRemove){
        element.addEventListener('click' , () => {
            modal.classList.toggle('active');
            modalRemove.classList.remove('active');
        });
    }

    toggleModal(togglelModalPerfil,modalPerfil , modalApp);
    toggleModal(togglelModalApp,modalApp,modalPerfil);

}