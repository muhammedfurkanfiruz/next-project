"use client";

const Category = () => {
  const categoryList = [
    { name: "ayakkabı" },
    { name: "çanta" },
    { name: "aksesuar" },
    { name: "spor ayakkabı" },
    { name: "terlik" },
    { name: "bot" },
    { name: "sneakers" },
  ];

  return (
    <div className="w-screen py-4">
      <div className="flex  flex-row justify-between  overflow-x-auto gap-6 py-2 px-6 w-full">
        {categoryList.map((item, index) => (
          <div
            key={index}
            className="border text-slate-500 rounded-full px-4 py-2 min-w-[120px] text-center whitespace-nowrap flex-shrink-0"
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
