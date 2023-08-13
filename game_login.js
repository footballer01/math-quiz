function addUser()
{
    mathematician1_name = document.getElementById('mathematician2_name_input').value;
    mathematician2_name = document.getElementById('mathematician2_name_input').value;

    localStorage.setItem('mathematician1_name',mathematician1_name);
    localStorage.setItem('mathematician2_name', mathematician2_name);

    window.location = 'game_page.html';
}

