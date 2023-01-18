import { Edit, ReferenceInput, SimpleForm, TextInput, useRecordContext  } from 'react-admin';

//Для настройки заголовка во время перехода на страницу Edit(изменений)
const PostTitle = () => {
    const record = useRecordContext();
    return <span>Post {record ? `"${record.title}"` : ''}</span>;
};


//КОМПАНЕНТ ИЗМЕНЕНИЯ ЗАПСЕЙ Edit работает как лист, читать про него в /DAOS
export const PostEdit = () => (
    // Передаём наш загаловок 
    <Edit title={<PostTitle />}>
        <SimpleForm>
            {/* с помощью disabled блокирует нужные нам поля*/}
            <TextInput source="id" disabled />
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5}/>
        </SimpleForm>
    </Edit>
);