export interface ProductModalProps {
  product: {
    photo: string;
    productName: string;
    price: number;
  };
  onClose: () => void;
}
