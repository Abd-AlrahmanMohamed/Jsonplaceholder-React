// Type declaration for 'react-multi-image-input'
declare module "react-multi-image-input" {
    type ImageState = {
      [key: string]: File | string;
    };
  
    interface MultiImageInputProps {
      images: ImageState;
      setImages: (images: ImageState) => void;
      max?: number;
      theme?: string;
      buttonText?: string;
      accept?: string;
    }
  
    const MultiImageInput: React.FC<MultiImageInputProps>;
  
    export { MultiImageInput };
  }
  