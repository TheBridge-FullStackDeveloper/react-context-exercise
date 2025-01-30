import { ApiCallContext } from "../context/ApiContext";

const useApiCall = () => {
    const context = useContext(ApiCallContext);
    if (!context) {
      throw new Error('useApiCall must be used within an ApiCallProvider');
    }
    return context;
  };