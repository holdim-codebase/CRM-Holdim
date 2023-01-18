import { Admin, EditGuesser, ListGuesser, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { DaosList } from "./components/Daos";
import { PostList } from "./components/Posts";
import { PostEdit } from "./components/PostEdit";
import { PostCreated } from "./components/PostCreated";
import PostIcon from "@mui/icons-material/Book";
import UserIcon from "@mui/icons-material/Group";
import { Dashboard } from "./components/Dashboard";
import { authProvider } from "./provider/authProvider";
import { dataProvider } from "./provider/dataProvider";


//Читать Подключение к реальному API в туториале 

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

                  
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
    <Resource name="users" list={DaosList} icon={UserIcon} recordRepresentation="name"/> 



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
    <Resource name="posts" list={PostList} recordRepresentation="name" edit={PostEdit} create={PostCreated} icon={PostIcon}/>
  </Admin>
)

export default App;