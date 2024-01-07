(function () {

    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')
    const btn = document.querySelector('.btn')
    let index = 0
    const customers = []

    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text

    }

    function createCustomer(img, name, text) {
        let Img = `./img/${img}.webp`
        let customer = new Customer(Img, name, text)

        customers.push(customer)

    }


    createCustomer(0, 'Natesh', 'Hello My dear Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit minus animi eaque quos saepe obcaecati porro necessitatibus praesentium repudiandae debitis perferendis quibusdam exercitationem facilis, accusamus, qui amet nulla veritatis maiores! Vitae, optio sequi dolore reiciendis at sit pariatur nihil debitis aut delectus corporis voluptate, facilis, modi aperiam! Sunt iure, itaque quas deleniti hic rem laboriosam')
    createCustomer(1, 'Khushi', 'Hello My dear Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit minus animi eaque quos saepe obcaecati porro necessitatibus praesentium repudiandae debitis perferendis quibusdam exercitationem facilis, accusamus, qui amet nulla veritatis maiores! Vitae, optio sequi dolore reiciendis at sit pariatur nihil debitis aut delectus corporis voluptate, facilis, modi aperiam! Sunt iure, itaque quas deleniti hic rem laboriosam')
    createCustomer(2, 'Panda', 'Hello My dear Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit minus animi eaque quos saepe obcaecati porro necessitatibus praesentium repudiandae debitis perferendis quibusdam exercitationem facilis, accusamus, qui amet nulla veritatis maiores! Vitae, optio sequi dolore reiciendis at sit pariatur nihil debitis aut delectus corporis voluptate, facilis, modi aperiam! Sunt iure, itaque quas deleniti hic rem laboriosam')
    createCustomer(3, 'Naveen', 'Hello My dear Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit minus animi eaque quos saepe obcaecati porro necessitatibus praesentium repudiandae debitis perferendis quibusdam exercitationem facilis, accusamus, qui amet nulla veritatis maiores! Vitae, optio sequi dolore reiciendis at sit pariatur nihil debitis aut delectus corporis voluptate, facilis, modi aperiam! Sunt iure, itaque quas deleniti hic rem laboriosam')
    createCustomer(4, 'Vedika', 'Hello My dear Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit minus animi eaque quos saepe obcaecati porro necessitatibus praesentium repudiandae debitis perferendis quibusdam exercitationem facilis, accusamus, qui amet nulla veritatis maiores! Vitae, optio sequi dolore reiciendis at sit pariatur nihil debitis aut delectus corporis voluptate, facilis, modi aperiam! Sunt iure, itaque quas deleniti hic rem laboriosam')


    btn.forEach(function (button) {

        button.addEventListener('click', function (e) {
            if (e.target.parentElement.classList.contains('preBtn')) {
                if (index === 0) {
                    index = customers.length
                }
                index--
                customerImage.src = customers[index].img
                customerName.textContest = customers[index].name
                customerText.textContent = customers[index].text
            }

            if (e.target.parentElement.classList.contains('nextBtn')) {
                index++
                if (index === customers.length) {
                    index = 0
                }

                customerImage.src = customers[index].img
                customerName.textContest = customers[index].name
                customerText.textContent = customers[index].text
            }

        })

    })
})
