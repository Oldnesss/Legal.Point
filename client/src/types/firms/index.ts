export type FirmType = {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
  body: string;
  // createdAt: Date;
  // updatedAt: Date;
};

export type PostFirmFormDataType = {
  name: string;
  image: string;
  title: string;
  description: string;
  body: string;
};

export type FirmState = {
  firms: FirmType[]
  selectedFirm: FirmType[] | null;
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  error: string | null;


}
