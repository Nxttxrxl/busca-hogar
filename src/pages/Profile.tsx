import React, { useState } from "react";
import Register from "../components/Register";

const Profile: React.FC = () => {
  const [isRegistered, setIsRegistered] = useState(true); // ns esto true or false marca si esta registrado o no
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [accountType, setAccountType] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);

  const handleSave = () => {
    console.log({ username, email, accountType, description, location, profilePicture });

  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(e.target.files[0]);
    }
  };

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-md rounded-md m-5">
      {isRegistered ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Perfil</h1>

          <div className="flex items-center mb-6">
            <div className="relative w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
              {profilePicture ? (
                <img
                  src={URL.createObjectURL(profilePicture)}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 12c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zM12 14c-4.4 0-8 2.6-8 6v1h16v-1c0-3.4-3.6-6-8-6z"></path>
                  </svg>
                </div>
              )}
              <input
                type="file"
                accept="image/*"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleProfilePictureChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm">Nombre de Usuario</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Correo Electrónico</label>
            <input
              type="email"
              className="w-full p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Tipo de Cuenta</label>
            <select
              className="w-full p-2 border rounded"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
            >
              <option value="user">Usuario</option>
              <option value="shelter">Refugio/Protectora</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Descripción</label>
            <textarea
              className="w-full p-2 border rounded"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm">Ubicación</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button
            onClick={handleSave}
            className="w-full p-2 bg-gray-700 text-white rounded hover:bg-gray-800"
          >
            Guardar Cambios
          </button>
        </>
      ) : (
        <Register />
      )}
    </div>
  );
};

export default Profile;
