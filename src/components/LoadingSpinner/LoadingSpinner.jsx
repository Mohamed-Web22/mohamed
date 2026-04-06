const LoadingSpinner = ({ size = "large", message = "Loading..." }) => {
  const sizeClasses = {
    small: "w-6 h-6",
    medium: "w-12 h-12",
    large: "w-16 h-16"
  };

  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className={`animate-spin rounded-full border-4 border-navy/20 border-t-navy ${sizeClasses[size]}`}></div>
      <p className="mt-4 text-navy/70 text-sm">{message}</p>
    </div>
  );
};

export default LoadingSpinner; 