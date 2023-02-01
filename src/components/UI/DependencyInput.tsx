import { useEffect, useMemo } from 'react';
import { useInput } from 'react-admin';

const DependencyInput = (props) => {
  const { label, source, dependencySource, process } = props
  const imageInput = useInput({ source });

  const dependencyInput = useInput({ source: dependencySource });
  const dependencyValue = useMemo(() => dependencyInput.field.value, [dependencyInput.field.value]);
  const src = useMemo(() => process(dependencyValue), [dependencyValue]);
  useEffect(() => imageInput.field.onChange(src), [src])

  return null;
}

export default DependencyInput;
