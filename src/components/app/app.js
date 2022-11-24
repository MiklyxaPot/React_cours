import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import './app.css'
import Appfilter from '../app-filter/app-filter'
import EmployeersList from '../employeers-list/employeers-list'
import EmployeersAddForm from '../employeers-add-form/employeers-add-form'


function App(){

   const data = [
      {name: 'Maks', salary: 800, increase: false, id: 1},
      {name: 'Anna', salary: 3000, increase: false, id: 2},
      {name: 'Mike', salary: 9000, increase: true, id: 3},
 
   ];
   

   return(
      <div className="app">
         <AppInfo/>
         <div className="search-panel">
            <SearchPanel/>
            <Appfilter/>
         </div>
         <EmployeersList data = {data}/>
         <EmployeersAddForm/>
      </div>
   )
}
export default App