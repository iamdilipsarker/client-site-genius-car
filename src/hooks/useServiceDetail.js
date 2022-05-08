import { useEffect, useState } from "react";
import ServiceDetail from "../Pages/ServiceDetail/ServiceDetail";

const useServiceDetail = serviceId => {
  const [service, setService] = useState({});
  

      useEffect(() => {
        const url = `https://polar-scrubland-97410.herokuapp.com/service/${serviceId}`;
        fetch(url)
          .then((res) => res.json())
          .then((data) => setService(data));
      }, [serviceId]);
    return [service];
}
export default useServiceDetail;