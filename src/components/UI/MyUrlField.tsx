import { FC } from "react";
import { useRecordContext } from "react-admin";
import { Link } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

// В react-admin поля — это просто компоненты React.
//  При рендеринге они захватывают данные, полученные recordиз API 
//  (например { "id": 2, "name": "Ervin Howell", "website": "anastasia.net", ... }, ), 
//  используя специальный хук, и используют sourceполе (например website, ) 
//  для получения значения, которое они должны отображать (например, «anastasia.net»).

// Это означает, что вы можете сделать то же самое, 
// чтобы написать пользовательское поле. Например, вот упрощенная версия <UrlField>:


interface UrlFieldProps {
    source: string;
}

const MyUrlField: FC<UrlFieldProps> = ({ source }) => {
    // useRecordContext
    // Для каждой строки <Datagrid>создает RecordContextи 
    // сохраняет в ней текущую запись.

    // useRecordContextпозволяет прочитать эту запись. 
    // Это один из 50+ безголовых хуков, которые предоставляет react-admin, 
    // чтобы вы могли создавать свои собственные компоненты, 
    // не навязывая определенный пользовательский интерфейс.
    const record = useRecordContext();

    if (!record) return null;

    return record ? (
        // SX
        // Все компоненты MUI (и большинство компонентов react-admin) 
        // поддерживают свойство под названием sx, которое позволяет создавать 
        // собственные встроенные стили. Давайте воспользуемся sxреквизитом, 
        // чтобы удалить подчеркивание из ссылки и добавить значок:
        // Свойство sxпохоже на свойство React style, 
        // за исключением того, что оно поддерживает темы, медиа-запросы, 
        // сокращенные свойства и многое другое
        <Link href={record[source]} sx={{ textDecoration: "none" }}>
            {record[source]}
            <LaunchIcon sx={{ fontSize: 15, ml: 1 }} />
        </Link>

    ) : null; 
  };
  
  export default MyUrlField;