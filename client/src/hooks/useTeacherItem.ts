import { useEffect, useState } from "react";
// import { TeacherType } from "../types";

// const useTeacherItem = () => {
//   const [teachers, setTeachers] = useState<TeacherType[]>([]);
//   const [error, setError] = useState<Error | null>(null);
//   const [isLoading, setIsLoading] = useState<boolean>(true);
//   const url = [import.meta.env.VITE_API_URL, "teachers"].join("/");
//   console.log(url);
//   useEffect(() => {
//     const controller = new AbortController();
//     const signal = controller.signal;

//     const fetchData = async () => {
//       setIsLoading(true);

//       try {
//         const response = await fetch(
//           [import.meta.env.VITE_API_URL, "teachers"].join("/"),
//           { signal }
//         );
//         if (!response.ok) {
//           throw new Error("Network error originated");
//         }
//         const data = await response.json();
//         setTeachers(data);
//         setError(null);
//       } catch (err) {
//         if (signal.aborted) {
//           console.log("Fetch Aborted");
//         } else {
//           setTeachers([]);
//           setError(err as Error);
//         }
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchData();

//     return () => {
//       controller.abort();
//     };
//   }, []);
//   return { teachers, error, isLoading };
// };

// export default useTeacherItem;

import { TeachersResponse } from "../types";

const useTeacherItem = () => {
  const [responseData, setResponseData] = useState<TeachersResponse | null>(
    null
  );
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const url = [import.meta.env.VITE_API_URL, "teachers"].join("/");

  useEffect(() => {
    let isMounted = true; // Flag to prevent state updates on unmounted component
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error("Network error originated");
        }
        const data: TeachersResponse = await response.json(); // Type the response as TeachersResponse
        if (isMounted) {
          setResponseData(data);
          setError(null);
        }
      } catch (err) {
        if (signal.aborted) {
          console.log("Fetch Aborted");
        } else if (isMounted) {
          setResponseData(null);
          setError(err instanceof Error ? err : new Error("Unknown error"));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, [url]);

  return { responseData, error, isLoading };
};

export default useTeacherItem;
