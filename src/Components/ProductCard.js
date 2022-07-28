import React from "react";
import { useNavigate } from "react-router-dom";

export const ProductCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/product/${data.id}`, { state: { id: data.id } });
        //   <Link to={`/article/${post.objectID}`} />
      }}
    >
      <div className="max-w-sm h-96 w-60 m-5 rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-auto p-4 mx-auto h-48 overflow-hidden"
          src={data.avatar}
          alt={data.name}
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{data.name}</div>
          <p className="font-bold">${data.price}</p>
          <p className="text-gray-700 text-base">{data.category}</p>
          {/* <p className="text-gray-700 text-base">{data.description}
      </p> */}
        </div>
      </div>
    </div>
  );
};
