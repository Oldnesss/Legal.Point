import axios from 'axios';
import type { FirmType, PostFirmFormDataType } from '../types/firms';

const apiInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASEURL as string,
});

class ApiService {
  static async getFirms(): Promise<FirmType> {
    try {
      const response = await apiInstance.get<FirmType>('api/firm');
      return response.data;
    } catch (error) {
      console.log('Произошла ошибка при получении компаний в сервисе', error);
      throw error;
    }
  }

  static async deleteFirm(firmId: FirmType['id']): Promise<FirmType['id']> {
    try {
      const response = await apiInstance.delete(`api/firm/${firmId}`);
      if (response.status !== 200)
        return await Promise.reject(new Error('Failed to deleted firm'));
      return firmId;
    } catch (error) {
      console.log('Ошибка сервиса на удаление', error);
      throw error;
    }
  }

  static async postFirm(formData: PostFirmFormDataType): Promise<FirmType> {
    try {
      const response = await apiInstance.post<FirmType>('api/form', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      if (response.status !== 201) return response.data;
      return await Promise.reject(new Error('Failed to posted firm'));
    } catch (error) {
      console.log('Ошибка сервиса на добавления', error);
      throw error;
    }
  }

  static async editFirm(
    formData: PostFirmFormDataType,
    firmId: FirmType['id'],
  ): Promise<FirmType> {
    try {
      const response = await apiInstance.patch<FirmType>(
        `api/form/${firmId}`,
        formData,
      );
      if (response.status === 200) return response.data;
      return await Promise.reject(new Error('Failed to editing firm'));
    } catch (error) {
      console.log('Ошибка сервиса на изменений', error);
      throw error;
    }
  }

  static async sendEmail(formData: any): Promise<any> {
    try {
      const response = await apiInstance.post<any>('api/send-email', formData);
      return response.data;
    } catch (error) {
      console.log('Ошибка сервиса на отправку email', error);
      throw error;
    }
  }
}
export default ApiService;
