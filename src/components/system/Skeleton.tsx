// src/components/system/Skeleton.tsx

const Skeleton = () => (
  <div className="w-full animate-pulse space-y-3">
    <div className="h-6 bg-gray-300 rounded" />
    <div className="h-4 bg-gray-200 rounded w-3/4" />
    <div className="h-4 bg-gray-100 rounded w-1/2" />
  </div>
);

export default Skeleton;
