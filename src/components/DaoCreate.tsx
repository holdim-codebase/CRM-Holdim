import {
    Create, SimpleForm,
    TextInput,
    FormDataConsumer
} from 'react-admin';

import { getLogoURL } from '../utils/dao';

import MarkdownInput from './UI/MarkdownInput';
import DependencyInput from './UI/DependencyInput';
import PreviewImage from './UI/PreviewImage';

export const DaoCreate = () => (
    <Create>
        <SimpleForm>
            {/* Automated */}
            <DependencyInput source="logo" dependencySource="snapshotId" process={getLogoURL} />
            <TextInput source="logo" disabled fullWidth />
            <FormDataConsumer source="logo">
                {({ formData }) => <PreviewImage src={formData.logo} />}
            </FormDataConsumer>

            {/* Editable */}
            <TextInput source="name" required />
            <TextInput source="snapshotId" label="Snapshot ID" required />
            <MarkdownInput source="overview" label="Overview" />
            <MarkdownInput source="tokenOverview" label="Token overview" />
        </SimpleForm>
    </Create>
);
