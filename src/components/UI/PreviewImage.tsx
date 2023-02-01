const PreviewImage = (props) => {
  const { src, size = 150 } = props

  return <>
    Preview:
    <img src={src} width={size} height={size} />
  </>;
}

export default PreviewImage;
