document.addEventListener('DOMContentLoaded', function() {
    const openModalBtn = document.getElementById('openModalBtn');
    const openModalBtn1 = document.getElementById('disc');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const modal = document.getElementById('modal');

    openModalBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });
    openModalBtn1.addEventListener('click', function() {
        closeMenu();
        modal.style.display = 'flex';
    });


    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    closeModalBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    function openMenu() {
        document.getElementById("haveTOopen").style.display = "flex";
    }

    function closeMenu() {
        document.getElementById("haveTOopen").style.display = "none";
    }

});

function submitForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;

    var botToken = '<<BOT_TOKEN>>';
    var groupChatId = '<<CHAT_ID>>';

    var message = 'team request\n\n' + 'name: ' + name + '\ntg | e-mail: ' + phone;

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.telegram.org/bot' + botToken + '/sendMessage?chat_id=' + groupChatId + '&text=' + encodeURIComponent(message), true);

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    xhr.onload = function () {
        if (xhr.status != 200) {
            alert('произошла ошибка при отправке данных.');
        } else {
            alert('данные успешно отправлены.');
        }
    };

    xhr.send();
}
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}


const section = getParameterByName('section');

if (section) {
    document.querySelectorAll('.tag').forEach(tag => {
        tag.classList.remove('current');
    });
    const element = document.getElementById(section);
    if (element) {
        element.classList.add('current');
    }
}

function chooseTag(tag) {
    let tags = document.getElementById("info").getElementsByClassName("tag");
    for (let i = 0; i < tags.length; i++) {
        tags[i].classList.remove("current");
    }

    tag.classList.add("current");

    let descriptions = document.getElementsByClassName("description");
    for (let i = 0; i < descriptions.length; i++) {
        descriptions[i].style.display = "none";
    }

    document.getElementById('tags-description-' + tag.id).style.display = "block";

    let titles = document.getElementById("info").getElementsByClassName("title");
    for (let i = 0; i < titles.length; i++) {
        titles[i].style.display = "none";
    }
    let titleId;
    switch (tag.id) {
        case 'all':
            titleId = 'allworks';
            break;
        case 'development':
            titleId = 'devwork';
            break;
        case 'design':
            titleId = 'deswork';
            break;
        case 'ai':
            titleId = 'aiwork';
            break;
    }
    document.getElementById(titleId).style.display = "block";
}

window.onload = function() {
    const section = getParameterByName('section');
    if (section) {
        const button = document.getElementById(section);
        if (button) {
            chooseTag(button);
        }
    } else {

        chooseTag(document.getElementById('all'));
    }
};