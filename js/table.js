var data=[
    {
        name:'casablanca',
        prix: 25 ,
        dleay: '1j'
    },
    {
        name:'Ait Melloul',
        prix: 40 ,
        dleay: '1j - 3j'
    },
    {
        name:'al houceima',
        prix: 40 ,
        dleay: '1j - 2j'
    },
    {
        name:'Assila',
        prix: 40 ,
        dleay: '1j - 2j'
    },
    {
        name:'azemour',
        prix: 40 ,
        dleay: '1j - 3j'
    },
]
var data2=[
    {
        name:'casablanca',
        prix: 25 ,
        dleay: '1j'
    },
    {
        name:'Ait Melloul',
        prix: 40 ,
        dleay: '1j - 3j'
    },
    {
        name:'al houceima',
        prix: 40 ,
        dleay: '1j - 2j'
    },
    {
        name:'Assila',
        prix: 40 ,
        dleay: '1j - 2j'
    },
    {
        name:'azemour',
        prix: 40 ,
        dleay: '1j - 3j'
    },
]
const containerList=document.getElementById('container')
const containerList2=document.getElementById('container-2')
function MakeList(e , list){
    let x=1
    list.forEach(element => {
        console.log(x)
        var ulList =document.createElement('ul')
        ulList.innerHTML=`
        <li> ${element.name}</li>
        <li>${element.prix}DH</li>
        <li>${element.dleay}</li>
        `
        x%2==0 ? ulList.classList='body active': ulList.classList='body active2'
        e.append(ulList)
        x+=1
    });
}

MakeList(containerList, data)
MakeList(containerList2, data2)
