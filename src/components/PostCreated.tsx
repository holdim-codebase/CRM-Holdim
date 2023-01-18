import { Create, ReferenceInput, SimpleForm, TextInput  } from 'react-admin';


//КОМПАНЕНТ ИЗМЕНЕНИЯ ЗАПСЕЙ Create работает как лист, читать про него в /DAOS
export const PostCreated = () => (
    <Create>
        <SimpleForm>
            {/* с помощью disabled блокирует нужные нам поля*/}
            <ReferenceInput source="userId" reference="users" />
            <TextInput source="title" />
            <TextInput source="body" multiline rows={5}/>
        </SimpleForm>
    </Create>
);