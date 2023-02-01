import { useMediaQuery } from "@mui/material";
import { List, Datagrid, TextField, DateField, SimpleList, ImageField, useRecordContext } from "react-admin";
import TextAvailableField from "./UI/TextAvailableField";


export const DaosList = () => {

    // Чтобы использовать <Datagrid> компонент на рабочем столе и <SimpleList>компонент на мобильном устройстве.
    // Для этого нужно воспользоваться хуком useMediaQuery из MUI:
    const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));

    return (
        // List дочерние элементы могут быть чем угодно — даже настраиваемым компонентом React со своей собственной логикой.
        <List >
            {!isSmall ? (
                    <Datagrid rowClick="edit">
                        {/* React-admin предоставляет гораздо больше компонентов Field(TextField, EmailField ...), 
                        отображающих различные типы данных: число, дату, изображение, HTML, 
                        массив, отношения и т. д. 
                        
                        Например, websiteполе(<TextField source="website" />) выглядит как URL. 
                        Вместо того, чтобы отображать его в виде текста, почему бы не отображать 
                        его с помощью кликабельной ссылки? Это именно то, что <UrlField>делает:
                        */}

                        {/* SOURCE
                        в source мы указываем поля из нашего апи 
                        например в апи айди лежит в api.id, то мы передаём id
                        или как именим компанием оно лежит в api.company.name
                        нам нужно передать company.name */}
                        <TextField source="id" label="ID" />
                        <ImageField
                            source="logo"
                            sx={{ '& img': { maxWidth: 25, maxHeight: 25, objectFit: 'contain' } }}
                        />
                        <TextField source="name" />
                        <TextField source="snapshotId" label="Snapshot ID" />
                        <TextAvailableField source="overview" />
                        <TextAvailableField source="tokenOverview" />
                        <DateField source="createdAt" showTime />
                    </Datagrid>
                ) : (

                // приведенный выше код составляет функциональные возможности <List>и <Datagrid>.
                // Это означает, что мы можем <List>использовать другой компонент, например <SimpleList>:
                
                // <SimpleList>использует MUI <List>и <ListItem>компоненты и 
                // ожидает функции как primaryText, secondaryTextи tertiaryTextprops.
                // Кроме того, <SimpleList>компонент отлично подходит для мобильных устройств.
                 
                <SimpleList
                primaryText={(record) => record.name}
                secondaryText={(record) => record.username}
                tertiaryText={(record) => record.email}
                />
                )
            }
        </List>
    )
};