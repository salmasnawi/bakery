var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

const btn = document.getElementById('tooltip-btn');

const tooltip = new bootstrap.Tooltip(btn, {
    placement: 'top',
    title: 'Tooltip on top'
});

btn.addEventListener('click', () => {
    const modal = new bootstrap.Modal(document.getElementById('xampleModal'));
    modal.toggle();

    tooltip.show();
    setTimeout(() => {
        tooltip.hide();
    }, 100);
});
function showAlertAndChangeTooltip(buttonId) {
    var button = document.getElementById(buttonId);
    var tooltip = bootstrap.Tooltip.getInstance(button); 
    button.setAttribute('data-bs-original-title', 'done'); 
    tooltip.setContent({ '.tooltip-inner': 'done' }); 
    tooltip.show(); 
    alert('we got your order, we will contact you soon!');
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});
