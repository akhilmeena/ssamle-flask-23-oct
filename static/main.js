const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f7fb7156f2msh3fa7c0f58691b6fp1b826djsn3d9b72dfa245',
    'X-RapidAPI-Host': 'crypto-news-live3.p.rapidapi.com'
  }
};

fetch('https://crypto-news-live3.p.rapidapi.com/news', options)
  .then(function(response) {
    response.text().then(function(data) {
      const Result = JSON.parse(data);
      var CryptoNewsarea = document.getElementById('CryptoNewsIn');
      for(let i = 0 ; i < 10; i++){
        CryptoNewsh = Object.values(Result)[i].title;
        UrlNews = Object.values(Result)[i].url;
        
        var CryptoNews = document.createElement('a');
        //console.log(CryptoNews)
        CryptoNews.className = "CrptoNewsD";
        CryptoNews.href = `${UrlNews}`
        CryptoNews.innerHTML = `● ${CryptoNewsh}`
        //CryptoNews.title = `${CryptoNewsh}`
        
        const Breaker = document.createElement('hr');
        Breaker.className = "Breaker";
        
        CryptoNewsarea.appendChild(CryptoNews)
        CryptoNewsarea.appendChild(Breaker)
      }
    })
  })
  .catch(err => console.error(err));
  
  
  
  //.then(response => response.json())
  //.then(response => console.log(response.keys[0]))
  
function chk(i) {
  if (i < 10){
    i = "0" + i
  }
  return i;
}
  
const main = () => {
  const d = new Date();
  let hrs = chk(d.getHours());
  let mins = chk(d.getMinutes());
  let secs = chk(d.getSeconds());
  let time = "Time : " + hrs + ":" + mins + ":" + secs;
  document.getElementById("t").innerHTML = time;
}

setInterval(() =>{
  main();
},10)

