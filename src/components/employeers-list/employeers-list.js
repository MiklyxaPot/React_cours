import EmployeersListItem from '../employeers-list-item/employeers-list-item'
import './employeers-list.css'

const EmployeersList = ({ data, onDelete, onToggleProp }) => {

   const element = data.map(item => {
      const { id, ...itemProps } = item;

      return (
         // <EmployeersListItem name = {item.name} salary = {item.salary}/>

         <EmployeersListItem
            key={id}
            {...itemProps}// спред  оператор развернет массив 
            onDelete={() => onDelete(id)}
            onToggleProp = {(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
        
         />

      )
   })



   return (
      <ul className=" app-list list-group">
         {element}

      </ul>
   )
};
export default EmployeersList;