import Button from '@/components/shared/Button';

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-[#111111] flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl lg:text-9xl font-bold text-[#C2F026] mb-4">
        404
      </h1>
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
        Page Not Found
      </h2>
      <p className="text-[#999] text-base lg:text-lg max-w-lg mb-8">
        The page you are looking for doesn't exist or has been moved. 
        Let's get you back on track.
      </p>
      <Button 
        label="Back to Homepage" 
        variant="lime" 
        href="/" 
        showArrow 
      />
    </div>
  );
}
