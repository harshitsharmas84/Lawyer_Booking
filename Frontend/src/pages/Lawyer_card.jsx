import React from "react";
import "./Lawyer_card.css";
import "./Cards.css";

const lawyers = [
  { name: "Adv. Rahul Sharma", type: "Criminal Lawyer", image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=400&fit=crop", available: true, rating: 4.7, cases: 145 },
  { name: "Adv. Neha Verma", type: "Family Lawyer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop", available: true, rating: 4.8, cases: 132 },
  { name: "Adv. Aman Gupta", type: "Corporate Lawyer", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop", available: false, rating: 4.9, cases: 178 },
  { name: "Adv. Riya Malhotra", type: "Property Lawyer", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop", available: true, rating: 4.6, cases: 121 },
  { name: "Adv. Kunal Mehta", type: "Cyber Lawyer", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop", available: true, rating: 4.8, cases: 156 },
  { name: "Adv. Tanya Kashyap", type: "Civil Lawyer", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop", available: false, rating: 4.7, cases: 138 },
  { name: "Adv. Vikram Singh", type: "Criminal Lawyer", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop", available: true, rating: 4.9, cases: 192 },
  { name: "Adv. Priya Desai", type: "Family Lawyer", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop", available: true, rating: 4.8, cases: 167 },
  { name: "Adv. Arjun Reddy", type: "Corporate Lawyer", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop", available: true, rating: 4.7, cases: 143 },
  { name: "Adv. Sneha Patel", type: "Property Lawyer", image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop", available: false, rating: 4.6, cases: 129 },
  { name: "Adv. Rohit Kumar", type: "Cyber Lawyer", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop", available: true, rating: 4.9, cases: 185 },
  { name: "Adv. Anjali Nair", type: "Civil Lawyer", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop", available: true, rating: 4.7, cases: 151 },
  { name: "Adv. Karan Joshi", type: "Criminal Lawyer", image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop", available: true, rating: 4.6, cases: 125 },
  { name: "Adv. Divya Iyer", type: "Family Lawyer", image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop", available: true, rating: 4.9, cases: 155 },
  { name: "Adv. Nikhil Saxena", type: "Corporate Lawyer", image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop", available: false, rating: 4.7, cases: 190 },
  { name: "Adv. Pooja Bhatt", type: "Property Lawyer", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop", available: true, rating: 4.8, cases: 135 },
  { name: "Adv. Sanjay Rao", type: "Cyber Lawyer", image: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?w=400&h=400&fit=crop", available: false, rating: 4.9, cases: 200 },
  { name: "Adv. Meera Kapoor", type: "Civil Lawyer", image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&h=400&fit=crop", available: true, rating: 4.6, cases: 118 },
  { name: "Adv. Aditya Menon", type: "Criminal Lawyer", image: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=400&h=400&fit=crop", available: true, rating: 4.8, cases: 172 },
  { name: "Adv. Kavya Shah", type: "Family Lawyer", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop", available: true, rating: 4.9, cases: 163 },
];

const enrichLawyer = (lawyer, index) => ({
    ...lawyer,
    cover: `https://images.unsplash.com/photo-${[
        '1589829085413-56de8ae18c73', 
        '1505664194779-8beaceb930b5', 
        '1486406146926-c627a92ad1ab', 
        '1450101499163-c8848c66ca85'
    ][index % 4]}?w=600&h=300&fit=crop`,
    experience: `${Math.floor(Math.random() * 10) + 5} Yrs`,
    location: ["Mumbai, MH", "Delhi, NCR", "Bangalore, KA", "Pune, MH"][index % 4],
    phone: "+91 98765 4321" + (index % 10),
    about: "Dedicated legal professional committed to providing top-tier representation and achieving favorable outcomes for clients."
});

const SingleLawyerCard = ({ lawyer }) => {
  return (
    <div className="lawyer-card-profile">
      <div className="card-header">
        <div 
          className="card-cover" 
          style={{ backgroundImage: `url(${lawyer.cover || lawyer.image})` }}
        ></div>
        
        <span className={`status-badge ${lawyer.available ? 'available' : 'unavailable'}`}>
          <span className="dot"></span>
          {lawyer.available ? 'Available' : 'Booked'}
        </span>

        <img className="card-avatar" src={lawyer.image} alt={lawyer.name} />
        
        <div className="card-fullname">{lawyer.name}</div>
        <div className="card-specialty">{lawyer.type}</div>
      </div>

      <div className="card-main">
        <div className="card-section">
          <p className="card-desc">{lawyer.about}</p>
          
          <div className="card-contact-info">
            <div className="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              <span>{lawyer.location}</span>
            </div>
            <div className="contact-item">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>{lawyer.phone}</span>
            </div>
          </div>

          <div className="card-stats-grid">
            <div className="stat-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <div>
                <div className="stat-value">{lawyer.cases}+</div>
                <div className="stat-label">Wins</div>
              </div>
            </div>
            <div className="stat-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <div>
                <div className="stat-value">{lawyer.experience}</div>
                <div className="stat-label">Exp</div>
              </div>
            </div>
            <div className="stat-box">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="#fbbf24" stroke="#fbbf24" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <div>
                <div className="stat-value">{lawyer.rating}</div>
                <div className="stat-label">Rating</div>
              </div>
            </div>
          </div>
          
          <button className="book-btn">Book Consultation</button>
        </div>
      </div>
    </div>
  );
};

const Lawyer_card = ({ selected }) => {
  const filteredLawyers = selected === "All" 
    ? lawyers 
    : lawyers.filter((lawyer) => lawyer.type === selected);

  return (
    <div className="right">
      {filteredLawyers.map((lawyer, index) => (
        <SingleLawyerCard key={index} lawyer={enrichLawyer(lawyer, index)} />
      ))}
    </div>
  );
};

export default Lawyer_card;