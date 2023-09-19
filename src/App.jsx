import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Search from './components/Search';
import Tabs from './components/Tab';
import PaginationComponent from './components/Pagination';

function App() {
  // const [count, setCount] = useState(0)
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [pageNumber, setPageNumber] = useState(1);
  const [pageUser, setPageUser] = useState([]);
  useEffect(()=>{

      const fetchData = async ()=>{
      try {
        const res =  await fetch(`https://api.slingacademy.com/v1/sample-data/users`);
        const api_data = await res.json();
        console.log("from api", api_data.users);
        setData(api_data.users);
        setPageUser(api_data.users.slice(0,3));
      } catch (error) {
        console.log(error);
      }
    }
     fetchData();
  },[])

  let filterUser = data.filter((item)=>{
    const fullname = item.first_name+' '+ item.last_name;
    if(search!== ' ' && fullname.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
      return item;
  });

  const handleChange = (event, value)=>{
    setPageNumber(value);
    console.log('page number',value);
    console.log('data>>', data);
    setPageUser(data.slice((value-1)*3, (value-1)*3+3));
  }
  console.log('app.jsx',pageUser);
  
  return (
    <>
     <NavBar />
     <Search search={search} setSearch={setSearch} />
     <Tabs data={search ? filterUser: pageUser}/>
     {!search && (
      <PaginationComponent
        pageNumber={pageNumber}
        handleChange={handleChange}
       />
      )}
    </>
  )
}

export default App
