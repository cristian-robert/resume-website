export default function ErrorState({ message }: { message: string }) {
  return (
    <div className="flex justify-center items-center min-h-[200px]">
      <div className="text-red-500 dark:text-red-400">{message}</div>
    </div>
  );
}
