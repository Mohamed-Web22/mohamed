const SearchBar = ({ searchTerm, setSearchTerm, sortBy, setSortBy }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mb-8">
      {/* Search Input */}
      <div className="flex-1">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-navy/40 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent bg-beige text-navy placeholder-navy/40"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-navy/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Sort Dropdown */}
      <div className="sm:w-64">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full px-4 py-3 border border-navy/40 rounded-lg focus:ring-2 focus:ring-navy focus:border-transparent bg-beige text-navy cursor-pointer"
        >
          <option value="">Sort by...</option>
          <option value="price-low-high">Price: Low to High</option>
          <option value="price-high-low">Price: High to Low</option>
          <option value="name-a-z">Name: A-Z</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar; 