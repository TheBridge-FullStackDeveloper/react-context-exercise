import { useQuery } from "@tanstack/react-query";

const getGOTCharacters = async () => {
  const url = "https://thronesapi.com/api/v2/Characters";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    setError(error.message);
  }
};

const useGOTCharacters = () => {
  return useQuery({
    queryKey: ["GOTCharacters"],
    queryFn: getGOTCharacters,
  });
};

export default useGOTCharacters;
