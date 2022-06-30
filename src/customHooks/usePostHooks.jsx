import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { postApiData } from '../helper/AxiosInstance';
const usePostHook = ({ queryKey }) => {
  const queryClient = useQueryClient();
  const [data, setData] = useState({});
  const {
    isLoading: isPostLoading,
    mutate,
    isSuccess: isPostSuccess,
    data: postData,
    isError: isPostError,
  } = useMutation(postApiData, {
    onSuccess: (data) => {
      console.log(data);
      setData(data);
    },
    onError: (error) => {},
    onSettled: () => {
      queryClient.invalidateQueries(queryKey);
    },
  });
  return {
    isPostLoading,
    mutate,
    isPostSuccess,
    postData,
    isPostError,
    data,
  };
};
export default usePostHook;