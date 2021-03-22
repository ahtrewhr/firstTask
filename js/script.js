document.addEventListener("DOMContentLoaded", function(event) {

    const userLogin = '123@ru',
          userPass = 123;

    const lkContent = document.querySelectorAll('.lk'),
          lkBtn = document.querySelectorAll('.lkBtn');
    
    function hideContent() {
        for (i = 0; i < lkContent.length; i++) {
            lkContent[i].classList.remove('show');
        }
    }

    function showContent(attr = 0) {
        lkContent[attr].classList.add('show');
    }

    hideContent();
    showContent(0);

    for (let i = 0; i < lkBtn.length; i++) {
        lkBtn[i].addEventListener('click', function(e) {
            e.preventDefault();

            if (e.target.classList.contains('register') || e.target.classList.contains('entryAccountBtn')) {
                const activeBtnAttr = e.target.getAttribute('data-lk-link');
                hideContent();
                showContent(activeBtnAttr);
            }

            const inputEmail = document.querySelector('.userEmail'),
                  inputPass = document.querySelector('.userPass');

            if (inputEmail.value == userLogin && inputPass.value == userPass.toString()) {
                const activeBtnAttr = e.target.getAttribute('data-lk-link');
                hideContent();
                showContent(activeBtnAttr);
            } else {
                inputEmail.value = 'Вы ввели некорректные данные';
                inputPass.type = 'text';
                inputPass.value = 'Вы ввели некорректные данные';
                inputEmail.addEventListener('focus', function() {
                    inputEmail.value = '';
                })
                inputPass.addEventListener('focus', function() {
                    inputPass.value = '';
                    inputPass.type = 'password';
                })
                return false;
            }

        });
    }

});


function showPass(el) {
    
    let inputPass = el.parentElement.querySelector('input[name=pass]');

    if (inputPass.type === 'password') {
        inputPass.type = 'text';
    } else {
        inputPass.type = 'password';
    }
}