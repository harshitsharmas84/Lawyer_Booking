import { useState } from 'react';
import { Search, MapPin, Briefcase, Trophy, DollarSign, Clock, BookOpen, X, ChevronDown } from 'lucide-react';
import { DualRangeSlider } from './DualRangeSlider';
import { locations, specialties, availabilityOptions } from '../constants/filters';

export function FilterSidebar({ filters, setFilters, totalResults }) {
  const [expandedSections, setExpandedSections] = useState({
    location: true,
    experience: true,
    casesWon: false,
    specialty: true,
    cost: false,
    availability: false
  });

  const handleCheckboxChange = (category, value) => {
    setFilters({
      ...filters,
      [category]: filters[category].includes(value)
        ? filters[category].filter((item) => item !== value)
        : [...filters[category], value]
    });
  };

  const clearAllFilters = () => {
    setFilters({
      search: '',
      locations: [],
      experienceRange: [0, 25],
      casesWonRange: [0, 350],
      specialties: [],
      costRange: [0, 25000],
      availability: []
    });
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const hasActiveFilters =
    filters.search ||
    filters.locations.length > 0 ||
    filters.specialties.length > 0 ||
    filters.availability.length > 0 ||
    filters.experienceRange[0] > 0 ||
    filters.experienceRange[1] < 25 ||
    filters.casesWonRange[0] > 0 ||
    filters.casesWonRange[1] < 350 ||
    filters.costRange[0] > 0 ||
    filters.costRange[1] < 25000;

  return (
    <aside className="hidden lg:block w-80 bg-white border-r border-gray-200 h-[calc(100vh-64px)] overflow-y-auto sticky top-16">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">Filters</h2>
          {hasActiveFilters && (
            <button
              onClick={clearAllFilters}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
            >
              <X className="w-4 h-4" />
              Clear all
            </button>
          )}
        </div>

        {/* Search */}
        <div className="mb-6">
          <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
            <Search className="w-4 h-4" />
            Search
          </label>
          <input
            type="text"
            placeholder="Search by name, location, specialty..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Location - Collapsible */}
        <div className="mb-4 border-b pb-4">
          <button onClick={() => toggleSection('location')} className="flex items-center justify-between w-full text-left">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <MapPin className="w-4 h-4" />
              Location
              {filters.locations.length > 0 && (
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">{filters.locations.length}</span>
              )}
            </label>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${expandedSections.location ? 'rotate-180' : ''}`} />
          </button>
          {expandedSections.location && (
            <div className="space-y-2 max-h-48 overflow-y-auto mt-3 custom-scrollbar">
              {locations.map(location => (
                <label key={location} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                  <input
                    type="checkbox"
                    checked={filters.locations.includes(location)}
                    onChange={() => handleCheckboxChange('locations', location)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="text-sm text-gray-700">{location}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Specialty - Collapsible */}
        <div className="mb-4 border-b pb-4">
          <button onClick={() => toggleSection('specialty')} className="flex items-center justify-between w-full text-left">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <BookOpen className="w-4 h-4" />
              Specialty
              {filters.specialties.length > 0 && (
                <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">{filters.specialties.length}</span>
              )}
            </label>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${expandedSections.specialty ? 'rotate-180' : ''}`} />
          </button>
          {expandedSections.specialty && (
            <div className="space-y-2 max-h-48 overflow-y-auto mt-3 custom-scrollbar">
              {specialties.map(specialty => (
                <label key={specialty} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                  <input
                    type="checkbox"
                    checked={filters.specialties.includes(specialty)}
                    onChange={() => handleCheckboxChange('specialties', specialty)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="text-sm text-gray-700">{specialty}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Experience - Collapsible */}
        <div className="mb-4 border-b pb-4">
          <button onClick={() => toggleSection('experience')} className="flex items-center justify-between w-full text-left">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Briefcase className="w-4 h-4" />
              Experience (years)
            </label>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${expandedSections.experience ? 'rotate-180' : ''}`} />
          </button>
          {expandedSections.experience && (
            <div className="space-y-3 mt-3 px-1">
              <DualRangeSlider
                min={0}
                max={25}
                value={filters.experienceRange}
                onChange={(value) => setFilters({ ...filters, experienceRange: value })}
              />
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>{filters.experienceRange[0]} Years</span>
                <span>{filters.experienceRange[1]}+ Years</span>
              </div>
            </div>
          )}
        </div>

        {/* Cases Won - Collapsible */}
        <div className="mb-4 border-b pb-4">
          <button onClick={() => toggleSection('casesWon')} className="flex items-center justify-between w-full text-left">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Trophy className="w-4 h-4" />
              Cases Won
            </label>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${expandedSections.casesWon ? 'rotate-180' : ''}`} />
          </button>
          {expandedSections.casesWon && (
            <div className="space-y-3 mt-3 px-1">
              <DualRangeSlider
                min={0}
                max={350}
                value={filters.casesWonRange}
                onChange={(value) => setFilters({ ...filters, casesWonRange: value })}
              />
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>{filters.casesWonRange[0]} Cases</span>
                <span>{filters.casesWonRange[1]}+ Cases</span>
              </div>
            </div>
          )}
        </div>

        {/* Average Cost - Collapsible */}
        <div className="mb-4 border-b pb-4">
          <button onClick={() => toggleSection('cost')} className="flex items-center justify-between w-full text-left">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <DollarSign className="w-4 h-4" />
              Avg Cost Per Case (₹)
            </label>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${expandedSections.cost ? 'rotate-180' : ''}`} />
          </button>
          {expandedSections.cost && (
            <div className="space-y-3 mt-3 px-1">
              <DualRangeSlider
                min={0}
                max={25000}
                step={1000}
                value={filters.costRange}
                onChange={(value) => setFilters({ ...filters, costRange: value })}
              />
              <div className="flex justify-between text-xs text-gray-500 font-medium">
                <span>₹{filters.costRange[0].toLocaleString('en-IN')}</span>
                <span>₹{filters.costRange[1].toLocaleString('en-IN')}</span>
              </div>
            </div>
          )}
        </div>

        {/* Availability - Collapsible */}
        <div className="mb-4">
          <button onClick={() => toggleSection('availability')} className="flex items-center justify-between w-full text-left">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Clock className="w-4 h-4" />
              Availability
            </label>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${expandedSections.availability ? 'rotate-180' : ''}`} />
          </button>
          {expandedSections.availability && (
            <div className="space-y-2 mt-3">
              {availabilityOptions.map(option => (
                <label key={option} className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-1 rounded">
                  <input
                    type="checkbox"
                    checked={filters.availability.includes(option)}
                    onChange={() => handleCheckboxChange('availability', option)}
                    className="w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 border-gray-300"
                  />
                  <span className="text-sm text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="pt-4 border-t">
          <p className="text-sm text-gray-600">
            <span className="font-medium text-gray-900">{totalResults}</span> lawyers found
          </p>
        </div>
      </div>
    </aside>
  );
}
