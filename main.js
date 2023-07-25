const tech = [
    {
        title: 'Asus',
        category: 'TV',
        price: 7000,
        desciption: {
            screen: '23',
            matrix: 'ips',
            screen: 'fullHD',
            color: 'grey'
        }
    },
    {
        title: 'Xiaome',
        category: 'TV',
        price: 8000,
        desciption: {
            screen: '25',
            matrix: 'ips',
            screen: 'fullHD',
            color: 'white'
        }
    },
    {
        title: 'Samsung',
        category: 'TV',
        price: 10000,
        desciption: {
            screen: '30',
            matrix: 'oled',
            screen: '4k',
            color: 'black'
        }
    },
    {
        title: 'LG',
        category: 'TV',
        price: 9000,
        desciption: {
            screen: '27',
            matrix: 'ips',
            screen: 'fullHD',
            color: 'grey'
        }
    },
    {
        title: 'Asus',
        category: 'phone',
        price: 7000,
        desciption: {
            screen: '5',
            matrix: 'ips',
            screen: 'HD',
            color: 'grey'
        }
    },
    {
        title: 'Xiaome',
        category: 'phone',
        price: 8000,
        desciption: {
            screen: '5',
            matrix: 'ips',
            screen: 'HD',
            color: 'white'
        }
    },
    {
        title: 'Samsung',
        category: 'phone',
        price: 10000,
        desciption: {
            screen: '6',
            matrix: 'oled',
            screen: 'fullHD',
            color: 'black'
        }
    },
    {
        title: 'Apple',
        category: 'phone',
        price: 9000,
        desciption: {
            screen: '4.5',
            matrix: 'ips',
            screen: 'HD',
            color: 'grey'
        }
    },
    {
        title: 'Asus',
        category: 'tablet',
        price: 7000,
        desciption: {
            screen: '8',
            matrix: 'ips',
            screen: 'HD',
            color: 'grey'
        }
    },
    {
        title: 'Xiaome',
        category: 'tablet',
        price: 8000,
        desciption: {
            screen: '8',
            matrix: 'ips',
            screen: 'fullHD',
            color: 'white'
        }
    },
    {
        title: 'Samsung',
        category: 'tablet',
        price: 10000,
        desciption: {
            screen: '10',
            matrix: 'oled',
            screen: '4k',
            color: 'black'
        }
    },
    {
        title: 'Apple',
        category: 'tablet',
        price: 9000,
        desciption: {
            screen: '9',
            matrix: 'ips',
            screen: 'fullHD',
            color: 'grey'
        }
    },
    {
        title: 'Asus',
        category: 'watch',
        price: 7000,
        desciption: {
            screen: '2',
            matrix: 'ips',
            screen: 'HD',
            color: 'grey'
        }
    },
    {
        title: 'Xiaome',
        category: 'watch',
        price: 8000,
        desciption: {
            screen: '2.1',
            matrix: 'ips',
            screen: 'HD',
            color: 'white'
        }
    },
    {
        title: 'Samsung',
        category: 'watch',
        price: 10000,
        desciption: {
            screen: '2.5',
            matrix: 'oled',
            screen: 'HD',
            color: 'black'
        }
    },
    {
        title: 'Apple',
        category: 'watch',
        price: 9000,
        desciption: {
            screen: '2.2',
            matrix: 'ips',
            screen: 'HD',
            color: 'grey'
        }
    },
    {
        title: 'Asus',
        category: 'headphones',
        price: 7000,
        desciption: {
            soundQuality: '50mhZ',
            color: 'grey'
        }
    },
    {
        title: 'Xiaome',
        category: 'headphones',
        price: 8000,
        desciption: {
            soundQuality: '60mhZ',
            color: 'white'
        }
    },
    {
        title: 'Samsung',
        category: 'headphones',
        price: 10000,
        desciption: {
            soundQuality: '80mhZ',
            color: 'black'
        }
    },
    {
        title: 'LG',
        category: 'headphones',
        price: 9000,
        desciption: {
            soundQuality: '70mhZ',
            color: 'grey'
        }
    },
]

const btnSortPrice = document.getElementById('sort-price')
const blockElements = document.getElementById('elements')
const elements = document.getElementById('elements-block')
const allBtn = document.querySelectorAll('.btn-sort')



function inner(value) {
    const p = document.createElement('p')
        p.innerHTML = `wtyf: ${value}`;
        elements.append(p)
}


function createElement() {
    const div = document.createElement('div')
    div.className = 'elements-block'
    div.id = 'elements-block'
    blockElements.append(div)
}

function sort(value) {
    for(let key of tech){
        if(key.category === value){
            for(let val in key){
                inner(key[val])
            }
        }
    }
}

function btnValue() {
    allBtn.forEach(el => {
        el.addEventListener('click', ()=>{
            let value = el.value
            sort(value)
        })
    })
}

function byField(field) {
    return (a, b) => a[field] > b[field] ? -1 : 1;
  }


function sortPrice() {
    tech.sort(byField('price'))
    
}


btnSortPrice.addEventListener('click', sortPrice)
btnValue()


