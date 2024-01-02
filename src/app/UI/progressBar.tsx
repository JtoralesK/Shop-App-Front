type p = {
  progressNumber: number;
};
export const ProgressBar = (p: p) => {
  return (
    <div className="w-full h-4 bg-secondary rounded-full">
      <div
        className="h-full text-center text-white bg-orange-200 rounded-full"
        style={{ width: `${p.progressNumber}%` }}
      ></div>
    </div>
  );
};
