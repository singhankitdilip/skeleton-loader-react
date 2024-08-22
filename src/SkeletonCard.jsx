// // src/components/SkeletonCard.jsx
// import React from "react";

// const SkeletonCard = () => {
//   return (
//     <div className="flex flex-col gap-5 justify-center items">
//       <div className="w-full px-4">
//         <div className="animate-wave bg-slate-200 rounded-lg w-full  flex flex-col ">
//           <div className="p-4 space-y-2">
//             <div className="bg-slate-300 h-4 w-3/4 rounded"></div>
//             <div className="bg-slate-300 h-4 w-1/2 rounded"></div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full px-4 h-80">
//         <div className="animate-wave bg-slate-200 rounded-lg w-full h-full flex flex-col">
//           <div className=" h-full w-full  grid grid-cols-3 gap-5 p-5">
//             <div className="bg-slate-300 col-span-2 rounded-lg"></div>
//             <div className="animate-wave col-span-1 grid grid-cols-2 rounded-lg gap-5">
//               <div className="bg-slate-300 w-full rounded-xl">
//                 <div className=""></div>
//               </div>
//               <div className="bg-slate-300  w-full rounded-xl"></div>
//               <div className="bg-slate-300  w-full rounded-xl"></div>
//               <div className="bg-slate-300  w-full rounded-xl"></div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full  px-4">
//         <div className="animate-wave flex space-x-4 p-5 justify-center items-center rounded-xl">
//           <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
//           <div className="flex-1 space-y-4 py-1">
//             <div className="h-4 bg-slate-200 rounded w-3/4"></div>
//             <div className="space-y-2">
//               <div className="h-4 bg-slate-200 rounded"></div>
//               <div className="h-4 bg-slate-200 rounded w-5/6"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SkeletonCard;

import React from "react";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center bg-white dark:bg-slate-700 w-full">
      <div className="w-full px-4">
        <div className="animate-wave bg-slate-200 dark:bg-slate-800 rounded-lg w-full flex flex-col">
          <div className="p-4 space-y-2">
            <div className="bg-slate-300 dark:bg-slate-700 h-4 w-3/4 rounded"></div>
            <div className="bg-slate-300 dark:bg-slate-700 h-4 w-1/2 rounded"></div>
          </div>
        </div>
      </div>
      <div className="w-full px-4 h-80">
        <div className="animate-wave bg-slate-200 dark:bg-slate-800 rounded-lg w-full h-full flex flex-col">
          <div className="h-full w-full grid grid-cols-3 gap-5 p-5">
            <div className="bg-slate-300 dark:bg-slate-700 col-span-2 rounded-lg"></div>
            <div className="col-span-1 grid grid-cols-2 rounded-lg gap-5">
              <div className="bg-slate-300 dark:bg-slate-700 w-full rounded-xl"></div>
              <div className="bg-slate-300 dark:bg-slate-700 w-full rounded-xl"></div>
              <div className="bg-slate-300 dark:bg-slate-700 w-full rounded-xl"></div>
              <div className="bg-slate-300 dark:bg-slate-700 w-full rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4">
        <div className="animate-wave  bg-slate-200 dark:bg-slate-800 flex space-x-4 p-5 justify-center items-center rounded-xl">
          <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full"></div>
          <div className="flex-1 space-y-4 py-1">
            <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
            <div className="space-y-2">
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded"></div>
              <div className="h-4 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;


