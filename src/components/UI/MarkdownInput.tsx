import { useState, useMemo } from 'react';
import ReactMde from 'react-mde';
import * as Showdown from 'showdown';
import { useInput, Labeled } from 'react-admin';

import 'react-mde/lib/styles/css/react-mde-all.css';

type Props = {
  label: string
  source: string
}
const MarkdownInput = (props: Props) => {
  const { label } = props
  const { field } = useInput({
    ...props,
    defaultValue: '',
    parse: value => value
  });
  const [tab, setTab] = useState<'write' | 'preview'>('write')

  const converter = useMemo(() => new Showdown.Converter({
    tables: true,
    simplifiedAutoLink: true,
    strikethrough: true,
    tasklists: true
  }), [])

  return (
    <Labeled label={label}>
      <ReactMde
        {...field}
        selectedTab={tab}
        onTabChange={setTab}
        generateMarkdownPreview={async markdown => converter.makeHtml(markdown)}
      />
    </Labeled>
  );
}

export default MarkdownInput;
