// import React, { useState } from 'react';

// const SearchBar = ({ onSearch, searchResults, onSelectDish }) => {
//   const handleChange = (e) => {
//     onSearch(e.target.value);  // Call onSearch passed from parent when input changes
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search for dishes..."
//         onChange={handleChange}  // Use onChange instead of onKeyDown for live search
//         className="searchInput"
//       />
//       {searchResults.length > 0 && (
//         <div className="searchDropdown">
//           {searchResults.map((dish) => (
//             <div
//               key={dish.id}
//               className="dropdownItem"
//               onClick={() => onSelectDish(dish)}
//             >
//               {dish.name}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;
