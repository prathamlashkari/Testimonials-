(function () {
    const customerImage = document.querySelector('#customer-img');
    const customerName = document.querySelector('#customer-name');
    const customerText = document.querySelector('#customer-text');
    const btn = document.querySelectorAll('.btn'); 
    let index = 0;
    const customers = [];

    function Customer(img, name, text) {
        this.img = img;
        this.name = name;
        this.text = text;
    }

    function createCustomer(img, name, text) {
        let Img = `./img/${img}img.webp`;
        let customer = new Customer(Img, name, text);
        customers.push(customer);
    }

    
    createCustomer(0, 'Natesh', 'Hello my name is Natesh and i am a front-End developer ')
    createCustomer(1, 'Khushi', 'Hello my name is Khushi and i am a Back-End developer')
    createCustomer(2, 'Panda', 'Hello my name is Panda and i am a Database Engineer')
    createCustomer(3, 'Naveen', 'Hello my name is Naveen and i am a front-End developer')
    createCustomer(4, 'Vedika', 'Hello my name is Vedika and i am a Full stack developer')

    btn.forEach(function (button) {
        button.addEventListener('click', function (e) {
            if (e.target.parentElement.classList.contains('prevBtn')) {
                if (index === 0) {
                    index = customers.length;
                }
                index--;
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name; // Fix the typo here
                customerText.textContent = customers[index].text;
            }

            if (e.target.parentElement.classList.contains('nextBtn')) {
                index++;
                if (index === customers.length) {
                    index = 0;
                }
                customerImage.src = customers[index].img;
                customerName.textContent = customers[index].name; // Fix the typo here
                customerText.textContent = customers[index].text;
            }
        });
    });
})();
