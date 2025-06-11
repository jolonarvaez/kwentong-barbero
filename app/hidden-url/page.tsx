export default function HiddenPage() {
  return (
    <main className="h-full">
      <div className="font-semibold md:text-4xl text-3xl w-full text-center pt-4 lg:pt-8">
        Hidden Page
      </div>
      <div className="text-center mt-10">
        This page is hidden and not accessible through the main navigation.
      </div>
    </main>
  );
}
