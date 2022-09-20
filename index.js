'use strict';
// console.log('Hi');

const getData = async function () {
    const response = await fetch(`https://newtusharbarai.herokuapp.com/getuser`);
    const response_data = await response.json();
    // console.log(response_data.data);
    return response_data.data;
};

const login_data = async function () {
    const login_data = await getData();
    console.log(login_data);

    const body = document.querySelector('table');
    
    login_data.forEach(function(data){
        console.log(data);
        const html = `<tr><td>${data.userId}</td><td>${data.name}</td><td>${data.emailId}</td><td>${data.phone}</td></tr>`;
        body.insertAdjacentHTML('beforeend', html);
    });

};

login_data();
// console.log(login_data);
