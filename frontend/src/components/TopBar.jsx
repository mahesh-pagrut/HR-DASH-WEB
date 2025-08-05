import React, { useState, useEffect, useRef } from 'react';
import { FiBell, FiSettings, FiSearch, FiFilter, FiBarChart2 } from 'react-icons/fi';
import { format } from 'date-fns';

const today = new Date();
const formattedDate = format(today, "EEEE, MMM do yyyy");

const timeRanges = [
  { value: '1h', label: 'Last Hour' },
  { value: '24h', label: 'Last 24 Hours' },
  { value: '48h', label: 'Last 48 Hours' },
  { value: '15d', label: 'Last 15 Days' },
  { value: '1m', label: 'Prev 1 Month' },
  { value: '3m', label: 'Prev 3 Months' },
  { value: '6m', label: 'Prev 6 Months' },
];

const TopBar = ({ onRangeChange }) => {
  const [timeRange, setTimeRange] = useState('6m');
  const [searchTerm, setSearchTerm] = useState('');
  const [open, setOpen] = useState(false);
  const drawerRef = useRef();

  const selectedLabel = timeRanges.find(r => r.value === timeRange)?.label || "Prev 6 Months";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleRangeSelect = (value) => {
    setTimeRange(value);
    setOpen(false);
    if (onRangeChange) onRangeChange(value);
  };

  return (
    <div className="border-b px-4 py-3 bg-white shadow-sm border-stone-200 relative z-50">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

        {/* Left Section */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <div>
            <h1 className="text-xl font-bold text-violet-700">HR Interface Monitor</h1>
            <p className="text-xs text-stone-500">{formattedDate}</p>
          </div>

          {/* Search Input */}
          <div className="flex items-center bg-stone-100 px-2 py-1 rounded-md w-full sm:w-auto">
            <FiSearch className="text-stone-500 mr-2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search interfaces..."
              className="bg-transparent focus:outline-none text-sm w-full"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap items-center justify-start md:justify-end gap-2 sm:gap-3">
          {/* Advanced Filters */}
          <button
            onClick={() => alert("Advanced Filter Clicked")}
            className="flex items-center gap-2 text-sm bg-stone-100 hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded"
          >
            <FiFilter className="text-base" />
            <span className="hidden sm:inline">Advanced Filters</span>
          </button>

          {/* Time Range Selector */}
          <div className="relative" ref={drawerRef}>
            <button
              onClick={() => setOpen(!open)}
              className="flex text-sm items-center gap-2 bg-stone-100 hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded"
            >
              <FiBarChart2 className="text-base" />
              <span className="hidden sm:inline">{selectedLabel}</span>
            </button>

            {/* Dropdown */}
            <div
              className={`absolute right-0 mt-2 w-64 bg-white border border-stone-200 rounded-md shadow-lg transition-all origin-top-right duration-200 ${
                open ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
              }`}
              style={{ zIndex: 9999 }}
            >
              <div className="p-3">
                <div className="text-xs font-semibold text-stone-500 mb-2">
                  📊 Filter Dashboard Data
                </div>
                <div className="flex flex-col gap-1">
                  {timeRanges.map((range) => (
                    <button
                      key={range.value}
                      onClick={() => handleRangeSelect(range.value)}
                      className={`text-left text-sm px-3 py-2 rounded-md transition-colors ${
                        timeRange === range.value
                          ? 'bg-violet-100 text-violet-700'
                          : 'hover:bg-stone-100'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Icons */}
          <button className="p-2 rounded hover:bg-stone-100 text-stone-500">
            <FiBell />
          </button>
          <button className="p-2 rounded hover:bg-stone-100 text-stone-500">
            <FiSettings />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
