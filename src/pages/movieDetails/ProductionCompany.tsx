import React from "react";
import { ProductionCompany } from "./types";

interface ProductionCompaniesProps {
  production_companies: ProductionCompany[];
  imageBaseUrl: string;
}

export const ProductionCompanies: React.FC<ProductionCompaniesProps> = ({
  production_companies,
  imageBaseUrl,
}) => {
  return (
    <div className="mb-6">
      <h3 className="font-bold text-gray-900 mb-2">Production Companies</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {production_companies?.map((company) => (
          <div key={company.id} className="flex items-center gap-2">
            {company?.logo_path && (
              <img
                src={`${imageBaseUrl}${company?.logo_path}`}
                alt={company?.name}
                className="h-8 object-contain"
              />
            )}
            <span className="text-sm">{company?.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
