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
    <div className="w-full bg-blue-300 py-3">
      <div className="flex overflow-x-auto gap-3 px-5 scrollbar-hide">
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
