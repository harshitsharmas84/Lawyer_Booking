import { useState } from "react";
import { LawyerCard } from "../components/LawyerCard";
import { FilterSidebar } from "../components/FilterSidebar";

// Mock lawyer data matching the To_implement design
const mockLawyers = [
  {
    id: '1',
    name: 'Adv. Rahul Sharma',
    image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop',
    location: 'Mumbai, MH',
    experience: 12,
    casesWon: 145,
    specialty: ['Criminal Lawyer', 'Civil Lawyer'],
    avgCostPerCase: 15000,
    availability: 'Available',
    rating: 4.7,
    description: 'Specializing in criminal defense with extensive experience in high-profile cases across Maharashtra.'
  },
  {
    id: '2',
    name: 'Adv. Neha Verma',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    location: 'Delhi, DL',
    experience: 8,
    casesWon: 132,
    specialty: ['Family Lawyer', 'Property Lawyer'],
    avgCostPerCase: 8500,
    availability: 'Available',
    rating: 4.8,
    description: 'Dedicated family law attorney with a compassionate approach to sensitive domestic matters.'
  },
  {
    id: '3',
    name: 'Adv. Aman Gupta',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    location: 'Bangalore, KA',
    experience: 15,
    casesWon: 178,
    specialty: ['Corporate Lawyer', 'Tax Law'],
    avgCostPerCase: 20000,
    availability: 'Busy',
    rating: 4.9,
    description: 'Leading expert in corporate law and mergers & acquisitions for Fortune 500 companies.'
  },
  {
    id: '4',
    name: 'Adv. Riya Malhotra',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    location: 'Hyderabad, TG',
    experience: 10,
    casesWon: 121,
    specialty: ['Property Lawyer', 'Real Estate Law'],
    avgCostPerCase: 12000,
    availability: 'Available',
    rating: 4.6,
    description: 'Expert in property disputes and real estate transactions with a strong success rate.'
  },
  {
    id: '5',
    name: 'Adv. Kunal Mehta',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
    location: 'Chennai, TN',
    experience: 6,
    casesWon: 156,
    specialty: ['Cyber Lawyer', 'Corporate Lawyer'],
    avgCostPerCase: 6500,
    availability: 'Available',
    rating: 4.8,
    description: 'Specialized in cyber crime and digital law with expertise in data protection cases.'
  },
  {
    id: '6',
    name: 'Adv. Tanya Kashyap',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    location: 'Kolkata, WB',
    experience: 20,
    casesWon: 138,
    specialty: ['Civil Lawyer', 'Human Rights'],
    avgCostPerCase: 18000,
    availability: 'Limited',
    rating: 4.7,
    description: 'Veteran civil rights attorney with decades of experience in landmark cases.'
  },
  {
    id: '7',
    name: 'Adv. Vikram Singh',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
    location: 'Pune, MH',
    experience: 9,
    casesWon: 192,
    specialty: ['Criminal Lawyer', 'Civil Lawyer'],
    avgCostPerCase: 9500,
    availability: 'Available',
    rating: 4.9,
    description: 'Known for meticulous case preparation and exceptional courtroom presence.'
  },
  {
    id: '8',
    name: 'Adv. Priya Desai',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
    location: 'Ahmedabad, GJ',
    experience: 14,
    casesWon: 167,
    specialty: ['Family Lawyer', 'Immigration Law'],
    avgCostPerCase: 16500,
    availability: 'Limited',
    rating: 4.8,
    description: 'Expert in family law and immigration cases with a client-first approach.'
  },
  {
    id: '9',
    name: 'Adv. Arjun Reddy',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    location: 'Mumbai, MH',
    experience: 11,
    casesWon: 143,
    specialty: ['Corporate Lawyer', 'Tax Law'],
    avgCostPerCase: 14000,
    availability: 'Available',
    rating: 4.7,
    description: 'Specializing in corporate compliance and tax planning for businesses.'
  },
  {
    id: '10',
    name: 'Adv. Sneha Patel',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop',
    location: 'Delhi, DL',
    experience: 7,
    casesWon: 129,
    specialty: ['Property Lawyer', 'Civil Lawyer'],
    avgCostPerCase: 11000,
    availability: 'Busy',
    rating: 4.6,
    description: 'Focused on property disputes and civil litigation with strong negotiation skills.'
  },
  {
    id: '11',
    name: 'Adv. Rohit Kumar',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
    location: 'Bangalore, KA',
    experience: 16,
    casesWon: 185,
    specialty: ['Cyber Lawyer', 'Corporate Lawyer'],
    avgCostPerCase: 19000,
    availability: 'Available',
    rating: 4.9,
    description: 'Pioneer in cyber law with expertise in handling complex digital crime cases.'
  },
  {
    id: '12',
    name: 'Adv. Anjali Nair',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
    location: 'Chennai, TN',
    experience: 13,
    casesWon: 151,
    specialty: ['Civil Lawyer', 'Family Lawyer'],
    avgCostPerCase: 13500,
    availability: 'Available',
    rating: 4.7,
    description: 'Compassionate advocate for civil and family matters with excellent client relations.'
  }
];

const All_lawyer = () => {
  const [filters, setFilters] = useState({
    search: '',
    locations: [],
    experienceRange: [0, 25],
    casesWonRange: [0, 350],
    specialties: [],
    costRange: [0, 25000],
    availability: []
  });

  const filteredLawyers = mockLawyers.filter(lawyer => {
    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch = 
        lawyer.name.toLowerCase().includes(searchLower) ||
        lawyer.location.toLowerCase().includes(searchLower) ||
        lawyer.specialty.some(s => s.toLowerCase().includes(searchLower)) ||
        lawyer.description.toLowerCase().includes(searchLower);
      
      if (!matchesSearch) return false;
    }

    // Location filter
    if (filters.locations.length > 0) {
      if (!filters.locations.includes(lawyer.location)) return false;
    }

    // Experience filter
    if (lawyer.experience < filters.experienceRange[0] || lawyer.experience > filters.experienceRange[1]) {
      return false;
    }

    // Cases won filter
    if (lawyer.casesWon < filters.casesWonRange[0] || lawyer.casesWon > filters.casesWonRange[1]) {
      return false;
    }

    // Specialty filter
    if (filters.specialties.length > 0) {
      const hasMatchingSpecialty = lawyer.specialty.some(s => filters.specialties.includes(s));
      if (!hasMatchingSpecialty) return false;
    }

    // Cost filter
    if (lawyer.avgCostPerCase < filters.costRange[0] || lawyer.avgCostPerCase > filters.costRange[1]) {
      return false;
    }

    // Availability filter
    if (filters.availability.length > 0) {
      if (!filters.availability.includes(lawyer.availability)) return false;
    }

    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <FilterSidebar 
          filters={filters} 
          setFilters={setFilters}
          totalResults={filteredLawyers.length}
        />
        
        <main className="flex-1 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Lawyer</h1>
              <p className="text-gray-600">
                Showing {filteredLawyers.length} of {mockLawyers.length} lawyers
              </p>
            </div>

            {filteredLawyers.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No lawyers match your current filters.</p>
                <button
                  onClick={() => setFilters({
                    search: '',
                    locations: [],
                    experienceRange: [0, 25],
                    casesWonRange: [0, 350],
                    specialties: [],
                    costRange: [0, 25000],
                    availability: []
                  })}
                  className="mt-4 text-blue-600 hover:text-blue-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredLawyers.map(lawyer => (
                  <LawyerCard key={lawyer.id} lawyer={lawyer} />
                ))}
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default All_lawyer;
