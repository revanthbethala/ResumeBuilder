import React from "react";
import { User, Mail, Phone, MapPin, Linkedin } from "lucide-react";

interface PersonalInfoFormProps {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    location: string;
    linkedIn: string;
  };
  onChange: (field: string, value: string) => void;
}

export const PersonalInfoForm: React.FC<PersonalInfoFormProps> = ({
  personalInfo,
  onChange,
}) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
      <div className="flex items-center space-x-2">
        <User className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Full Name"
          value={personalInfo.name}
          onChange={(e) => onChange("name", e.target.value)}
          className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Mail className="w-5 h-5 text-gray-500" />
        <input
          type="email"
          placeholder="Email"
          value={personalInfo.email}
          onChange={(e) => onChange("email", e.target.value)}
          className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Phone className="w-5 h-5 text-gray-500" />
        <input
          type="tel"
          placeholder="Phone"
          value={personalInfo.phone}
          onChange={(e) => onChange("phone", e.target.value)}
          className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center space-x-2">
        <MapPin className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="Location"
          value={personalInfo.location}
          onChange={(e) => onChange("location", e.target.value)}
          className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex items-center space-x-2">
        <Linkedin className="w-5 h-5 text-gray-500" />
        <input
          type="text"
          placeholder="LinkedIn URL"
          value={personalInfo.linkedIn}
          onChange={(e) => onChange("linkedIn", e.target.value)}
          className="flex-1 p-2 border rounded focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};
