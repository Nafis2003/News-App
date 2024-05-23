import { useState,useEffect } from "react";


const API_KEY='cbb0d292fb084fbf9611c6729e8153d8';

const Nav=()=>{
    return <nav>
     <a>Home</a>
     <a>About Us</a>
    </nav>
}

const Header=()=>{
    const [nav,setNav]=useState(false);
    return <header>
        <h1>News<input id='search' placeholder="Search"></input><span id="country">BD</span><button id="navBtn" onClick={()=>setNav(!nav)}>{nav==false?'=':'×'}</button></h1>
        {nav && <Nav/>}
    </header>
}

const Card=({title,image})=>{
    return <div className="card">
        <img src={image}/>
        <h4>{title}</h4>
    </div>
}


const App=()=>{
    const [data,setData]=useState([]);
    const [sort,setSort]=useState('');
    let url='https://newsapi.org/v2/top-headlines?country=us&apiKey='+API_KEY;
    useEffect(()=>{
        fetch(url).then(blob=>blob.json()).then(data=>setData(data.articles));
    },[]);
    console.log(data);
    let key =0;
    return <>
    <Header/>
    {
        data.map(article=>{
            return <Card key={key++} image={article.urlToImage} title={article.title}/>
        })
    }
    </>
}

export default App;