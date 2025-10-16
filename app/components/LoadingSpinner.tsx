import { useNavigation } from "react-router";

export function LoadingSpinner() {
  const navigation = useNavigation();
  
  if (navigation.state !== "loading") {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="loading-spinner bg-white dark:bg-gray-800 rounded-full p-2 border border-gray-200 dark:border-gray-700">
        <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    </div>
  );
}
