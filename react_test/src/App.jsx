import './App.css'
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Plus, Star, Armchair, ArrowRight } from "lucide-react";

const categories = ["Chair", "Beds", "Sofa", "Lamp"];

const productsByCategory = {
  Chair: [
    { id: 1, name: "Sakarias Armchair", price: 392 },
    { id: 2, name: "Baltsar Chair", price: 299 },
    { id: 3, name: "Anjay Chair", price: 519 },
    { id: 4, name: "Nyantuy Chair", price: 921 },
  ],
  Beds: [
    { id: 5, name: "Malfors Bed", price: 640 },
    { id: 6, name: "Tufjord Bed", price: 780 },
    { id: 7, name: "Hemnes Bed", price: 455 },
    { id: 8, name: "Nordli Bed", price: 610 },
  ],
  Sofa: [
    { id: 9, name: "Kivik Sofa", price: 899 },
    { id: 10, name: "Ektorp Sofa", price: 745 },
    { id: 11, name: "Vimle Sofa", price: 1020 },
    { id: 12, name: "Soderhamn Sofa", price: 860 },
  ],
  Lamp: [
    { id: 13, name: "Foto Lamp", price: 45 },
    { id: 14, name: "Ranarp Lamp", price: 39 },
    { id: 15, name: "Skaftet Lamp", price: 52 },
    { id: 16, name: "Not Lamp", price: 61 },
  ],
};

function StarRating() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={14} fill="#F5A623" stroke="#F5A623" />
      ))}
    </div>
  );
}

function ProductCard({ product, category }) {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col">
      <div className="bg-[#F3F1EE] rounded-xl h-48 flex items-center justify-center mb-4">
        <Armchair size={72} strokeWidth={1.2} className="text-[#2B2B33]" />
      </div>
      <p className="text-xs text-gray-400 mb-1">{category}</p>
      <h3 className="font-semibold text-[#1B1B24] mb-1">{product.name}</h3>
      <StarRating />
      <div className="flex items-center justify-between mt-4">
        <p className="font-bold text-[#1B1B24]">
          <span className="font-normal text-sm align-top mr-0.5">$</span>
          {product.price}
        </p>
        <button
          className="w-9 h-9 rounded-full bg-[#1B2A4A] text-white flex items-center justify-center hover:brightness-125 transition"
          aria-label={`Add ${product.name} to cart`}
        >
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}

export default function BestSellingProduct() {
  const [activeTab, setActiveTab] = useState("Chair");
  const products = productsByCategory[activeTab];

  return (
    <section className="bg-[#FAF9F7] py-16 px-6 relative">
      <div className="absolute left-6 top-0 bottom-0 w-px bg-[#E8B4A0] hidden md:block" />
      <div className="absolute right-6 top-0 bottom-0 w-px bg-[#E8B4A0] hidden md:block" />

      <h2 className="text-3xl font-bold text-center text-[#1B1B24] mb-6">
        Best Selling Product
      </h2>

      <div className="flex justify-center mb-10">
        <div className="bg-[#EFEDEA] rounded-full p-1 flex gap-1">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeTab === cat
                  ? "bg-white text-[#1B1B24] shadow-sm"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto relative">
        <button
          className="hidden md:flex absolute -left-14 top-1/3 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow items-center justify-center hover:bg-gray-50"
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} category={activeTab} />
          ))}
        </div>

        <button
          className="hidden md:flex absolute -right-14 top-1/3 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow items-center justify-center hover:bg-gray-50"
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      <div className="flex justify-center mt-10">
        <button className="flex items-center gap-2 text-[#F5A623] font-medium hover:gap-3 transition-all">
          View All <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
}