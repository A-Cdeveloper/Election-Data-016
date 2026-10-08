import { Suspense } from "react";

import CustumSelect from "@/components/custom/CustumSelect";
import { getPlacesForSelect } from "@/features/places/queries";

const Sidebar = async () => {
  const placesOptions = await getPlacesForSelect();

  return (
    <aside className="pointer-events-auto absolute left-2 top-2 z-1000 h-[10%] w-full max-w-[200px] flex flex-col justify-center items-center">
      <Suspense fallback={null}>
        <CustumSelect options={placesOptions} />
      </Suspense>
    </aside>
  );
};

export default Sidebar;
