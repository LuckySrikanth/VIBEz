import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDropleft } from "react-icons/io";

const Breadcrumb = ({ breadcrumbs }) => {
  return (
    <nav className="mb-4 ml-5">
      <ol className="flex space-x-2 text-gray-600">
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <span className="mx-2">
                <IoIosArrowDropleft />
              </span>
            )}
            {breadcrumb.link ? (
              <Link to={breadcrumb.link} className="hover:text-green-500">
                {breadcrumb.text}
              </Link>
            ) : (
              <span>{breadcrumb.text}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
