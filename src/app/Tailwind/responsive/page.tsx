const ResponsivePage = () => {
  return (
    <main className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-blue-500 p-6 text-white">Card 1</div>
        <div className="bg-green-500 p-6 text-white">Card 2</div>
        <div className="bg-red-500 p-6 text-white">Card 3</div>
      </div>
    </main>
  );
};

export default ResponsivePage;