import { Admin, Resource } from "react-admin";
import PostIcon from "@mui/icons-material/Book";
import BusinessIcon from '@mui/icons-material/Business';

import { DaosList } from "./components/Daos";
import { DaoEdit } from "./components/DaoEdit";
import { DaoCreate } from "./components/DaoCreate";
import { ProposalsList } from "./components/Proposals";
import { PostEdit } from "./components/PostEdit";
import { PostCreated } from "./components/PostCreated";
import { Dashboard } from "./components/Dashboard";

import { authProvider } from "./provider/authProvider";
import { dataProvider } from "./provider/dataProvider";
                  
const App = () => (
  //dataProvider
  //корневой компанент react-admin - он
  //ожидает dataProvider - функция способная получать
  //данные из Api
  
  // Dashboard
  // дэшборд отвечает за главную странцу админки 

  // authProvider
  // Отвечает за авторизацию пользователя
  <Admin authProvider={authProvider} dataProvider={dataProvider} dashboard={Dashboard}> 
    {/* Также компанент Admin ожидает один
    или несколько Resource, каждый ресурс сопоставляет имя с конечной точкой в ​​API. */}

    {/* Строка <Resource name="users" />информирует react-admin 
    о необходимости получить записи «users» с URL- адреса
    https://jsonplaceholder.typicode.com/users
    то есть она добавлет в конец нашего апи dataProvider - users */}

    {/* list={ListGuesser} - <ListGuesser> компонент для отображения списка пользователей.
    Этот компонент угадывает конфигурацию, которую следует использовать для списка 
    (имена и типы столбцов), на основе данных, полученных из API. */}

    {/*
    ListGuesser
    Компонент <ListGuesser>не предназначен для использования в 
    продакшене — это просто способ быстро загрузить администратора.   
    <Resource name="users" list={ListGuesser} />

    ListGuesser можно использовать как для создания шаблонов компанентов 
    То есть вставлять ЛистГессор и в консоле забирать компанент 
    чтобы создать настраиваемы компанент
    */}

    {/* Добавляем свой компанент в list вместо ListGuesser */}

    {/* Icon
    это атрибут который добавляет слева иконку к компаненту  */}
    <Resource name="daos" options={{ label: 'DAOs' }} list={DaosList} edit={DaoEdit} create={DaoCreate} icon={BusinessIcon}/> 


    {/*recordRepresentation="name"/> 
    в <Resource name="posts" list={PostList} recordRepresentation="name"/>
    сообщаем в recordRepresentation="name" из какого поля нужно взять значение 
    в нашем случае это users.name */}
    {/* <Resource name="posts" list={PostList} recordRepresentation="name"/> */}


    {/*EditGuesser 
    React-admin предоставляет <Edit> компонент для редактирования записей
    давайте использовать, <EditGuesser>чтобы помочь загрузить его. 
    для этого используем атрибут edit и передаём туда наш компанент
    
    Create
    create работает так же как edit*/}
    <Resource name="proposals" list={ProposalsList} edit={PostEdit} create={PostCreated} icon={PostIcon}/>
  </Admin>
)

export default App;
