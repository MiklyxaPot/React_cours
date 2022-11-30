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
            {name: 'Maks', salary: 800, increase: false, like: true, id: 1},
            {name: 'Anna', salary: 3000, increase: false, like: false,id: 2},
            {name: 'Mike', salary: 9000, increase: true, like: false, id: 3},
       
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
         like: false,
         increase: false,
         id: this.maxId++
      };
      this.setState(({data}) => {
         const newArr = [...data, newItem];
         return{data: newArr}
         
      })
   }
   onToggleIncrease = ( id) => {
   // this.setState(({data}) => {
   //    const index = data.findIndex(elem => elem.id === id);
   //    const old = data[index];
   //    const newItem = {...old, increase:!old.increase};//спред опреатор разворачивает обьект, то что запписано после запятойи= если совподение то заменяется в новом оьекте 
   //    const newArr = [...data.slice(0, index), newItem, ...data.slice(index +1)];// слайсоь копирует частьобьекта доиндекса добовляеттуда новый item и потом добовляется остаок масива 
      
   //    return {
   //       data: newArr//в data передаем новый масив
   //    }
   // })
   this.setState(({data}) =>({
      data: data.map(item =>{//тк метод мар не нарушает принцып немутабельности он проходит по массиву 
         if(item.id === id){//если йд айтома совпал с йд в аргументе то
            return {...item, increase:!item.increase}//совподаюший меняется на противоположный 
         }
         return item//если совподений нет то возврашаетсяне изменнеый item
      })
      }))
   }
   onToggleRise = (id) => {
      this.setState(({data}) =>({
         data: data.map(item =>{//тк метод мар не нарушает принцып немутабельности он проходит по массиву 
            if(item.id === id){//если йд айтома совпал с йд в аргументе то
               return {...item, like:!item.like}//совподаюший меняется на противоположный 
            }
            return item//если совподений нет то возврашаетсяне изменнеый item
         })
         }))
   }
   
render (){
   const emploees = this.state.data.length;
   const encreased = this.state.data.filter(item => item.increase).length;
   
   
   return(
      <div className="app">
         <AppInfo emploees = {emploees} encreased ={encreased}/>
         <div className="search-panel">
            <SearchPanel/>
            <Appfilter/>
         </div>
         <EmployeersList 
         data = {this.state.data}
         onDelete = {this.deleteItem}
         onToggleIncrease = {this.onToggleIncrease}
         onToggleRise = {this.onToggleRise}
         />
         <EmployeersAddForm
       onAdd = { this.addItem}
         />
      </div>
   )
}
   
}
export default App