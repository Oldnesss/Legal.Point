export type FirmType = {
  id: number;
  name: string;
  nameIFNS: string;
  image: string;
  title: string;
  description: string;
  price: string;
  body: string;
  // createdAt: Date;
  // updatedAt: Date;
};

export type PostFirmFormDataType = {
  name: string;
  nameIFNS: string;
  image: string;
  title: string;
  description: string;
  price: string;
};

export type FirmState = {
  firms: FirmType[]
  selectedFirm: FirmType[] | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;


}
