import { ChevronUpIcon } from "@heroicons/react/24/solid";
import { wrapperCardStyles, type WrapperCardProps } from "./CardWrapper";

interface CollapsibleWrapperCardProps extends WrapperCardProps {
  children: React.ReactNode;
  className?: string;
}

const CollapsibleWrapperCard: React.FC<CollapsibleWrapperCardProps> = ({
  children,
  className,
  padding,
  color,
  rounded
}) => {
  return (
    <div className={wrapperCardStyles({ padding, color, rounded, className })}>
      <div className="flex">
        <div className="flex flex-col justify-center">
          {children}
        </div>
        <div className="flex justify-end">
          <ChevronUpIcon></ChevronUpIcon>
        </div>
      </div>


    </div>
  );
};

export default CollapsibleWrapperCard

// import React, { useState } from "react";
// import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid"; // optional icons

// const DropdownButton: React.FC = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="w-64">
//       <button
//         onClick={() => setOpen(!open)}
//         className="flex justify-between items-center w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
//       >
//         {open ? (
//           <ChevronUpIcon className="w-5 h-5" />
//         ) : (
//           <ChevronDownIcon className="w-5 h-5" />
//         )}
//       </button>

//       {open && (
//         <div className="mt-2 p-4 border rounded shadow bg-white">
//           <p>This is the dropdown content!</p>
//           <p>You can put anything here.</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DropdownButton;
