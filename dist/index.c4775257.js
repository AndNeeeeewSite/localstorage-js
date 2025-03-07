//               1.
addBut = document.querySelector('#addBookmarkBtn');
addInput = document.querySelector('#bookmarkInput');
addInput1 = document.querySelector('#bookmarkInput1');
addInput2 = document.querySelector('#bookmarkInput2');
addInput3 = document.querySelector('#bookmarkInput3');
addList = document.querySelector('#bookmarkList');
urlsJSON = localStorage.getItem('urls');
if (urlsJSON == null) localStorage.setItem('urls', JSON.stringify({
    urls: []
}));
function clearList() {
    links = document.querySelectorAll('.renderli');
    for (link of links){
        link.remove();
        console.log(link + 'removed');
    }
}
function render() {
    urlsJSON = JSON.parse(localStorage.getItem('urls')).urls;
    console.log(urlsJSON);
    for (item of urlsJSON){
        renderli = document.createElement('li');
        renderli.classList.add('renderli');
        renderLink = document.createElement('h2');
        renderLink.textContent = 'First Name: ' + item[0];
        renderLink1 = document.createElement('h2');
        renderLink1.textContent = 'Second Name: ' + item[1];
        renderLink2 = document.createElement('h2');
        renderLink2.textContent = 'Phone Number: ' + item[2];
        renderLink3 = document.createElement('h2');
        renderLink3.textContent = 'Email: ' + item[3];
        renderButton = document.createElement('button');
        renderButton.textContent = 'X';
        renderButton.classList.add('delete');
        editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit');
        renderli.append(renderLink);
        renderli.append(renderLink1);
        renderli.append(renderLink2);
        renderli.append(renderLink3);
        renderli.append(renderButton);
        renderli.append(editButton);
        addList.append(renderli);
    }
    deleteButtons = document.querySelectorAll('.delete');
    console.log(deleteButtons);
    for (let item1 of deleteButtons)item1.addEventListener('click', function() {
        buttLi = item1.parentElement;
        textLink = buttLi.children[0].textContent;
        console.log(textLink);
        let urlsJSON1 = JSON.parse(localStorage.getItem('urls'));
        let deleteIndex = urlsJSON1.urls.indexOf(textLink);
        console.log(urlsJSON1.urls);
        urlsJSON1.urls.splice(deleteIndex, 1);
        console.log(urlsJSON1.urls);
        console.log(urlsJSON1);
        localStorage.setItem('urls', JSON.stringify(urlsJSON1));
        buttLi.remove();
    });
    deleteButtons = document.querySelectorAll('.edit');
    console.log(deleteButtons);
    for (let item1 of deleteButtons)item1.addEventListener('click', function() {
        buttLi = item1.parentElement.children;
        textname = buttLi[0].textContent.slice(12);
        textname2 = buttLi[1].textContent.slice(13);
        textphone = buttLi[2].textContent.slice(14);
        textemail = buttLi[3].textContent.slice(7);
        addInput.value = textname;
        addInput1.value = textname2;
        addInput2.value = textphone;
        addInput3.value = textemail;
        buttLi = item1.parentElement;
        textLink = buttLi.children[0].textContent;
        console.log(textLink);
        let urlsJSON1 = JSON.parse(localStorage.getItem('urls'));
        let deleteIndex = urlsJSON1.urls.indexOf(textLink);
        console.log(urlsJSON1.urls);
        urlsJSON1.urls.splice(deleteIndex, 1);
        console.log(urlsJSON1.urls);
        console.log(urlsJSON1);
        localStorage.setItem('urls', JSON.stringify(urlsJSON1));
        buttLi.remove();
    });
}
render();
addBut.addEventListener('click', function() {
    urlsJSON = JSON.parse(localStorage.getItem('urls'));
    if (urlsJSON == null) localStorage.setItem('urls', JSON.stringify({
        urls: []
    }));
    urlsJSON = JSON.parse(localStorage.getItem('urls'));
    addInputText = addInput.value;
    addInputText1 = addInput1.value;
    addInputText2 = addInput2.value;
    addInputText3 = addInput3.value;
    if (addInputText == '' || addInputText1 == '' || addInputText2 == '' || addInputText3 == '') alert('You must write url');
    else {
        urlsJSON.urls.push([
            addInputText,
            addInputText1,
            addInputText2,
            addInputText3
        ]);
        localStorage.setItem('urls', JSON.stringify(urlsJSON));
        console.log(urlsJSON);
        clearList();
        render();
        addInput.value = '';
        addInput1.value = '';
        addInput2.value = '';
        addInput3.value = '';
    }
});

//# sourceMappingURL=index.c4775257.js.map
