
const DogImg = document.querySelector('#dog-img');
const Btn = document.querySelector('.btn');

const showMyDog = async () =>{
        try{
            const setHeader = {
                Header:{
                    Accept : 'appllication/json'
                }
            }

            const resp = await fetch('https://dog.ceo/api/breeds/image/random',setHeader);
            const data = await resp.json();
            DogImg.src = data.message;
        }catch(err){
            console.log(err);
        }
}



Btn.addEventListener('click', showMyDog);