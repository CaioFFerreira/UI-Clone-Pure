export default function initTooltip() {
    
    const tollTips = document.querySelectorAll('[data-tooltip]');

    tollTips.forEach(item => {
        item.addEventListener("mouseover" , onMouseOver );
    });


    function  onMouseOver(event) {
    const tooltipBox = criatTooltipBox(this);
    tooltipBox.style.top = event.pageY + 30 + 'px';
    tooltipBox.style.left = event.pageX + 'px';

    onMouseleave.tooltipBox = tooltipBox;
    onMouseleave.element = this;
    this.addEventListener('mouseleave' , onMouseleave);
    
    }

    const onMouseleave = {
        handleEvent() {
            this.tooltipBox.remove();
            this.element.removeEventListener('mouseleave' , onMouseleave);
        }
    }

    function criatTooltipBox(element) {
        const tooltipBox = document.createElement('div');
        const text = element.getAttribute('aria-label');
        tooltipBox.classList.add('tooltip');
        tooltipBox.innerText = text;
        document.body.appendChild(tooltipBox);

        return tooltipBox;
    }
}