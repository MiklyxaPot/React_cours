import './app-info.css'


const AppInfo = ({encreased, emploees}) =>{

   return (
      <div className="app-info">
         <h1>Учет сотрудников в компании Микуха</h1>
         <h2>Общее число сотрудников {emploees}</h2>
         <h2>Премию получат: {encreased}</h2>
      </div>
   )
   };
 export default AppInfo;