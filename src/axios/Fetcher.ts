import { axiosInstance } from ".";

export default function fetcher(url: string): Promise<any> {
  return axiosInstance.get(url).then((res) => res.data);
}
