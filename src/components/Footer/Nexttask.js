

export default function LetGo(){
    const footerBtn = document.querySelector('.footer__btn');
    if(!(footerBtn.classList.contains('active'))) return false;

    const nextBtn = document.querySelector('.footer .active');

    nextBtn.addEventListener("click", () => {
    alert ('Поздравляем! Вам открыт второй уровень.');
    })

}
