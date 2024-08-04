document.addEventListener('DOMContentLoaded', function () {
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl, {
            trigger: 'hover focus' // Exibe o popover ao passar o mouse ou focar a imagem
        });
    });

    const carouselElement = document.querySelector('#carouselExampleIndicators');
    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 10000,
        ride: 'carousel'
    });
});

document.getElementById('orcamento-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Cria uma solicitação AJAX para enviar o formulário
    var xhr = new XMLHttpRequest();
    xhr.open('POST', this.action, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Cria um objeto de dados do formulário
    var formData = new FormData(this);
    var encodedData = new URLSearchParams(formData).toString();

    // Define a ação para após a solicitação ser concluída
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                console.log('Formulário enviado com sucesso!');
                window.location.href = 'obrigado.html'; // Redireciona para a página de agradecimento
            } else {
                console.error('Erro ao enviar o formulário: ', xhr.status, xhr.statusText);
                alert('Ocorreu um erro. Por favor, tente novamente.');
            }
        }
    };

    // Envia os dados do formulário
    xhr.send(encodedData);
});
