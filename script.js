let btn = document.getElementById('eye');

btn.addEventListener('click', function() {
    let input = document.getElementById('pass');
    
    if(input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    }

    else {
        input.setAttribute('type', 'password');
    }
});