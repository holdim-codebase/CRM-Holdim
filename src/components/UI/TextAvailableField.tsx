import { FC } from "react";
import { useRecordContext } from "react-admin";

interface UrlFieldProps {
    source: string;
}

const TextAvailableField: FC<UrlFieldProps> = ({ source }) => {
    const record = useRecordContext();

    const text = record[source].length ? 'YES' : 'NO';
    const backgroundColor = record[source].length ? '#d0ffc7' : '#ffc7c7';

    return record
        ? <span style={{ backgroundColor, padding: 8 }}>{text}</span>
        : null;
};

export default TextAvailableField;
