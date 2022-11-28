import { Component } from 'react'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import './app.css'
import Appfilter from '../app-filter/app-filter'
import EmployeersList from '../employeers-list/employeers-list'
import EmployeersAddForm from '../employeers-add-form/employeers-add-form'


class App extends Component {
   constructor(props){
      super(props);
      this.state = {
         data: [
            {name: 'Maks', salary: 800, increase: false, id: 1},
            {name: 'Anna', salary: 3000, increase: false, id: 2},
            {name: 'Mike', salary: 9000, increase: true, id: 3},
       
         ]
      }
      this.maxId = 4;
   }
   deleteItem = (id) =>{
    this.setState(({data}) => {
      // const index = data.findIndex(elem => elem.id === id);
      
      // const befor = data.slice(0, index);
      // const after = data.slice(index +1 );
      // const newArr = [...befor, ...after];

      return {
         data: data.filter(item => item.id !== id)
      }
    })
   }
   addItem = (name, salary) =>{
      const newItem = {
         name,
         salary,
         increase: false,
         id: this.maxId++
      };
      this.setState(({data}) => {
         const newArr = [...data, newItem];
         return{data: newArr}
         
      })
   }
   
render (){
   return(
      <div className="app">
         <AppInfo/>
         <div className="search-panel">
            <SearchPanel/>
            <Appfilter/>
         </div>
         <EmployeersList data = {this.state.data}
         onDelete = {this.deleteItem}/>
         <EmployeersAddForm
       onAdd = { this.addItem}
         />
      </div>
   )
}
   
}
export default App