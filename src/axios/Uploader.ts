import { axiosInstance } from ".";

interface UploadResponse {
  url?: string;
  message?: string;
  success: boolean;
}

export const uploader = async (
  url: string,
  payload: FormData
): Promise<UploadResponse> => {
  const { data } = await axiosInstance.post<UploadResponse>(url, payload);
  return data;
};
