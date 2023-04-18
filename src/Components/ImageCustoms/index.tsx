import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IImageTypes } from './Image.props';
import ImageStyled from './Style'
export function ImageCustoms({
  src, alt, className, width, height
}: IImageTypes) {
  return (
    <ImageStyled>
      <LazyLoadImage effect='blur' src={src} alt={alt} width={width} height={height}/>
    </ImageStyled>
  );
}
