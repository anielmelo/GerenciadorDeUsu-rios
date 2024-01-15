const show = document.querySelector('.hide-form');
const button = document.querySelector('.button-show');
const allUsers = document.querySelector('.all-users');
const snackbar = document.querySelector('#snackbar');

const showSnackbar = (errorMessage) => {
    snackbar.className = 'show';
    snackbar.innerText = errorMessage;
    setTimeout(function(){ 
        snackbar.className = snackbar.className.replace('show', '');
        snackbar.innerText = '';
    }, 3000);
}

const fetchUsers = async () => {
    const response = await fetch('http://localhost:3333/users');
    const users = await response.json();
    return users;
}

const deleteUser = async (id) => {
    await fetch(`http://localhost:3333/users/${id}`, {
        method: 'delete',
    });

    loadUsers();
}

const loadUsers = async () => {
    const users = await fetchUsers();

    allUsers.innerHTML = '';

    users.forEach(user => {
        const { id, name, email, number_cellphone, birth_date } = user;

        allUsers.innerHTML += createSection(id);

        document.querySelector(`#labelName-${id}`).innerText = name;
        document.querySelector(`#labelEmail-${id}`).innerText = email;
        document.querySelector(`#labelNumber-${id}`).innerText = number_cellphone;
        document.querySelector(`#labelDate-${id}`).innerText = birth_date;

        document.querySelector(`#header-section-${id}`).innerHTML = `
        <button type="button" class="edit-button" id='editButton-${id}' onclick='showEditForm(${id})'></button>
        <button type="button" class="delete-button" id='deleteButton-${id}' onclick='deleteUser(${id})'></button>`;
    });
}

button.addEventListener('click', () => {
    showAddForm();
});

const showAddForm = () => {
    show.classList.toggle('show-form');
    const addForm = `
    <form class="form-add-user">
        <div class="header-form">
            <button type="button" class="exit-button"></button>
        </div>
        <fieldset>
            <h3>Add new user</h3>
            <fieldset>
                <div class="field">
                    <label for="inputName">name</label>
                    <input type="text" name="name" id="inputName" required/>
                    </div>
                <div class="field">
                    <label for="inputEmail">email</label>
                    <input type="email" name="email" placeholder="example@example.com" id="inputEmail" required/>
                </div>
            </fieldset>
            <fieldset>
            <div class="field">
                    <label for="inputNumber">number</label>
                    <input type="text" name="number" placeholder="(xx)xxxxx-xxxx" id="inputNumber" required/>
                </div>
                <div class="field">
                    <label for="inputDate">date</label>
                    <input type="text" name="date" placeholder="dd/mm/aaaa" id="inputDate" required/>
                </div>
            </fieldset>
            <div class="bottom-form">
                <button type="submit" class="create-button">add</button>
            </div>
        </fieldset>
    </form>`;
    
    document.querySelector('.show-form').innerHTML = addForm;
    
    const formAddUser = document.querySelector('.form-add-user');

    const exitButton = document.querySelector('.exit-button');
    const inputName = document.querySelector('#inputName');
    const inputEmail = document.querySelector('#inputEmail');
    const inputNumber = document.querySelector('#inputNumber');
    const inputDate = document.querySelector('#inputDate');

    exitButton.addEventListener('click', () => {
        inputName.value = '';
        inputEmail.value = '';
        inputNumber.value = '';
        inputDate.value = '';
        
        document.querySelector('.show-form').innerHTML = '';
        show.classList.toggle('show-form');
    });

    const addUser = async (event) => {
        event.preventDefault();

        const user = { 
            name: inputName.value, 
            email: inputEmail.value, 
            number_cellphone: inputNumber.value, 
            birth_date: inputDate.value 
        };

        const response = await fetch('http://localhost:3333/users', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user),
        });
        
        if (response.status === 201) {
            loadUsers();
            inputName.value = '';
            inputEmail.value = '';
            inputNumber.value = '';
            inputDate.value = '';
            
            document.querySelector('.show-form').innerHTML = '';
            show.classList.toggle('show-form');
        } else if (response.status === 400) {
            const errorData = await response.json();
            const errorMessage = errorData.message;
            showSnackbar(`Error: "${errorMessage}"`);
        }
    }

    formAddUser.addEventListener('submit', addUser);
}

const showEditForm = async (id) => {
    show.classList.toggle('show-form');
    const editForm = `
    <form class="form-edit-user">
        <div class="header-form">
            <button type="button" class="exit-button"></button>
        </div>
        <fieldset>
            <h3>Edit user</h3>
            <fieldset>
                <div class="field">
                    <label for="inputName">name</label>
                    <input type="text" name="name" id="inputName" required/>
                </div>
                <div class="field">
                    <label for="inputEmail">email</label>
                    <input type="email" name="email" placeholder="example@example.com" id="inputEmail" required/>
                </div>
            </fieldset>
            <fieldset>
                <div class="field">
                    <label for="inputNumber">number</label>
                    <input type="text" name="number" placeholder="(xx)xxxxx-xxxx" id="inputNumber" required/>
                </div>
                <div class="field">
                    <label for="inputDate">date</label>
                    <input type="text" name="date" placeholder="dd/mm/aaaa" id="inputDate" required/>
                </div>
            </fieldset>
            <div class="bottom-form">
                <button type="submit" class="update-button">edit</button>
            </div>
        </fieldset>
    </form>`;

    document.querySelector('.show-form').innerHTML = editForm;

    const getUser = async (id) => {
        const response = await fetch(`http://localhost:3333/users/${id}`);
        const [user] = await response.json();
        return user;
    }

    const user = await getUser(id);
    const { name, email, number_cellphone, birth_date } = user;

    const formEditUser = document.querySelector('.form-edit-user');

    const inputName = document.querySelector('#inputName');
    const inputEmail = document.querySelector('#inputEmail');
    const inputNumber = document.querySelector('#inputNumber');
    const inputDate = document.querySelector('#inputDate');

    inputName.value = name;
    inputEmail.value = email;
    inputNumber.value = number_cellphone;
    inputDate.value = birth_date;

    const exitButton = document.querySelector('.exit-button');

    exitButton.addEventListener('click', () => {
        inputName.value = '';
        inputEmail.value = '';
        inputNumber.value = '';
        inputDate.value = '';

        document.querySelector('.show-form').innerHTML = '';
        show.classList.toggle('show-form');
    });

    const updateUser = async ({ id, name, email, number_cellphone, birth_date }) => {
        
        const response = await fetch(`http://localhost:3333/users/${id}`, {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, number_cellphone, birth_date }),
        });

        if (response.status === 204) {
            loadUsers();
            inputName.value = '';
            inputEmail.value = '';
            inputNumber.value = '';
            inputDate.value = '';

            document.querySelector('.show-form').innerHTML = '';
            show.classList.toggle('show-form');
        } else if (response.status === 400) {
            const errorData = await response.json();
            const errorMessage = errorData.message;
            showSnackbar(`Error: "${errorMessage}"`);
        }
    }

    formEditUser.addEventListener('submit', (event) => {
        event.preventDefault();

        updateUser({ 
            id, name: inputName.value, 
            email: inputEmail.value, 
            number_cellphone: inputNumber.value, 
            birth_date: inputDate.value 
        });
    });
}

const createSection = (id) => {
    var section = `
    <section class="user">
        <div class="header" id='header-section-${id}'>
        </div>
        <div class="info">
            <div class="nameEmail">
                <label class="labelName" id='labelName-${id}'></label>
                <label class="labelEmail" id='labelEmail-${id}'></label>
            </div>
            <div class="numDate">
                <label class="labelNumber" id='labelNumber-${id}'></label>
                <label class="labelDate" id='labelDate-${id}'></label>
            </div>
        </div>
    </section>`;

    return section;
}

loadUsers();