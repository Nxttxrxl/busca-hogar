import React, { useState } from "react";
import Register from "../components/Register";

const Profile: React.FC = () => {
  const [isRegistered] = useState(true); // Cambia esto a true o false para simular si está registrado
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [accountType, setAccountType] = useState("shelter"); // Cambia esto a "user" o "shelter"
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [shelterName, setShelterName] = useState("");
  const [availableDogs, setAvailableDogs] = useState<{ name: string; breed: string; age: string; description: string; photoUrl: string; }[]>([]);
  const [isAddingDog, setIsAddingDog] = useState(false); // Controla si se está agregando un perro nuevo
  const [newDog, setNewDog] = useState<{ name: string; breed: string; age: string; description: string; photoUrl: string; }>({
    name: "",
    breed: "",
    age: "",
    description: "",
    photoUrl: ""
  });

  const handleSave = () => {
    console.log({
      username,
      email,
      accountType,
      description,
      location,
      profilePicture,
      shelterName,
      availableDogs,
    });
    // Aquí puedes agregar la lógica para guardar los datos en tu backend o estado global
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(e.target.files[0]);
    }
  };

  const handleAddDog = () => {
    setIsAddingDog(true);
  };

  const handleCancelAddDog = () => {
    setIsAddingDog(false);
    setNewDog({ name: "", breed: "", age: "", description: "", photoUrl: "" });
  };

  const handleSaveNewDog = () => {
    setAvailableDogs([...availableDogs, newDog]);
    setIsAddingDog(false);
    setNewDog({ name: "", breed: "", age: "", description: "", photoUrl: "" });
  };

  const handleDogChange = (field: string, value: string) => {
    setNewDog({ ...newDog, [field]: value });
  };

  const handleDogPhotoChange = (file: File) => {
    setNewDog({ ...newDog, photoUrl: URL.createObjectURL(file) });
  };

  return (
    <div className="w-full mx-auto p-6 bg-white shadow-md rounded-md m-5">
      {isRegistered ? (
        <>
          <h1 className="text-3xl font-bold mb-6">Perfil</h1>

          {accountType === "shelter" ? (
            <>
              <div className="mb-4">
                <label className="block mb-2 text-sm">Nombre de la Protectora</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded"
                  value={shelterName}
                  onChange={(e) => setShelterName(e.target.value)}
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

              <h2 className="text-2xl font-bold mb-4">Perros Disponibles</h2>
              {availableDogs.map((dog, index) => (
                <div key={index} className="mb-4 p-4 border rounded-md">
                  <div className="flex items-center mb-4">
                    <div className="relative w-24 h-24 bg-gray-200 rounded-full overflow-hidden">
                      {dog.photoUrl ? (
                        <img
                          src={dog.photoUrl}
                          alt="Dog"
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
                        onChange={(e) => handleDogPhotoChange(e.target.files![0])}
                      />
                    </div>
                  </div>
                  <input
                    type="text"
                    placeholder="Nombre"
                    value={dog.name}
                    onChange={(e) => handleDogChange(index, "name", e.target.value)}
                    className="w-full p-2 mb-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Raza"
                    value={dog.breed}
                    onChange={(e) => handleDogChange(index, "breed", e.target.value)}
                    className="w-full p-2 mb-2 border rounded"
                  />
                  <input
                    type="text"
                    placeholder="Edad"
                    value={dog.age}
                    onChange={(e) => handleDogChange(index, "age", e.target.value)}
                    className="w-full p-2 mb-2 border rounded"
                  />
                  <textarea
                    placeholder="Descripción"
                    value={dog.description}
                    onChange={(e) => handleDogChange(index, "description", e.target.value)}
                    className="w-full p-2 border rounded"
                    rows={4}
                  />
                </div>
              ))}
              {isAddingDog ? (
                <>
                  <div className="mb-4 p-4 border rounded-md">
                    <input
                      type="text"
                      placeholder="Nombre"
                      value={newDog.name}
                      onChange={(e) => handleDogChange("name", e.target.value)}
                      className="w-full p-2 mb-2 border rounded"
                    />
                    <input
                      type="text"
                      placeholder="Raza"
                      value={newDog.breed}
                      onChange={(e) => handleDogChange("breed", e.target.value)}
                      className="w-full p-2 mb-2 border rounded"
                    />
                    <input
                      type="text"
                      placeholder="Edad"
                      value={newDog.age}
                      onChange={(e) => handleDogChange("age", e.target.value)}
                      className="w-full p-2 mb-2 border rounded"
                    />
                    <textarea
                      placeholder="Descripción"
                      value={newDog.description}
                      onChange={(e) => handleDogChange("description", e.target.value)}
                      className="w-full p-2 mb-2 border rounded"
                      rows={4}
                    />
                    <div className="relative w-24 h-24 bg-gray-200 rounded-full overflow-hidden my-4">
                      {newDog.photoUrl ? (
                        <img
                          src={newDog.photoUrl}
                          alt="New Dog"
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
                        onChange={(e) => handleDogPhotoChange(e.target.files![0])}
                      />
                    </div>
                    <button
                      onClick={handleSaveNewDog}
                      className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
                    >
                      Guardar Perro
                    </button>
                    <button
                      onClick={handleCancelAddDog}
                      className="w-full p-2 bg-red-500 text-white rounded hover:bg-red-600"
                    >
                      Cancelar
                    </button>
                  </div>
                </>
              ) : (
                <button
                  onClick={handleAddDog}
                  className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
                >
                  Añadir Nuevo Perro
                </button>
              )}
            </>
          ) : (
            <>
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
            </>
          )}

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
