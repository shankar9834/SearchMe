const search=document.querySelector('#searchForm');
search.addEventListener('submit',async function(e)
{
   e.preventDefault();
   
   const findT=search.elements.query.value ;
  const res= await axios.get(`https://api.tvmaze.com/search/shows?q=${findT}`);
 // console.log(res.data);

 makeImage(res.data);
 search.elements.query.value='';
})


const makeImage=(shows)=>{
    
    for(let re of shows)
    {  if(re.show.image){
        const img=document.createElement('IMG');
        img.src=re.show.image.medium ;
        document.querySelector('#di').append(img);

    }
        
    }

}
const imgre=()=>
{
const im=document.querySelectorAll('img');
console.log(im);
}
imgre();