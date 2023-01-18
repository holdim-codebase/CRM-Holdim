import { Datagrid, EditButton, List, ReferenceField, ReferenceInput, TextField, TextInput } from 'react-admin';

//Массив компанентов ввода (инпутов) который мы передаём в List

// Эти компаненты которые будут появлятся в нашем списке
// Первый элемент это текстинпут компанент отвечающий
// за поиск его атрибут alwaysOn означет что он должен отображатся всегда
// когда другие компаненты без это атрибута будут иметь функциональность добавления 
const postFilters = [
  <TextInput source="q" label="Search" alwaysOn />,
  <ReferenceInput source="userId" label="User" reference="users" />,
];


export const PostList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            
            <TextField source="id"/>
            {/*ReferenceField  
            ReferenceField может запрашивать данные из других запросов(в нашем случае из /users)
            и вставлять нужные нам данные 
            А в <Resource name="posts" list={PostList} recordRepresentation="name"/>
            сообщаем в recordRepresentation="name" из какого поля нужно взять значение 
            в нашем случае это users.name */}
            <ReferenceField source="userId" reference="users" />
            <TextField source="title" />
            {/* Кнопка редактирования */}
            <EditButton />
        </Datagrid>
    </List>
);