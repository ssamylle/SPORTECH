/*document.addEventListener('DOMContentLoaded', function() {
    let cadastroLink = document.querySelector('a[href="cadastro.html"]');
});

const meuH1 = document.querySelector('h1');



document.getElementById("buttonVoltar").addEventListener("click", function() {
    window.history.back();
});*/

function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    var content = document.getElementById('content');

    if (sidebar.style.transform === 'translateX(0px)') {
        sidebar.style.transform = 'translateX(-250px)';
        content.style.marginLeft = '10px';
    } else {
        sidebar.style.transform = 'translateX(0px)';
        content.style.marginLeft = '260px';
    }

    sidebarOpen = !sidebarOpen;
}


$(document).ready(function() {
    $('#calendario').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        defaultView: 'month',
        events: [
            {
                title: 'Evento 1',
                start: '2023-11-10T10:00:00',
                end: '2023-11-10T12:00:00'
            },
            // Adicione mais eventos conforme necessário
        ]
    });
});

