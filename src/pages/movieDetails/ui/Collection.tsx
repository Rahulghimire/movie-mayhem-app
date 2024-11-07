import React from "react";
import { PartOfCollectionProps } from "../types";

const PartOfCollection: React.FC<PartOfCollectionProps> = ({
  collection,
  imageBaseUrl,
}) => (
  <div>
    <h3 className="font-bold text-gray-900 mb-2">Part of Collection</h3>
    <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
      <img
        src={`${imageBaseUrl}${collection.poster_path}`}
        alt={collection.name}
        className="w-20 rounded"
      />
      <div>
        <p className="font-semibold">{collection.name}</p>
      </div>
    </div>
  </div>
);

export default PartOfCollection;
