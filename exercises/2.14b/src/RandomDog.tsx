import { useEffect, useState } from "react";

interface Dog {
  message: string;
  status: string;
}

const RandomDog = () => {
  const [dog, setDog] = useState<Dog | undefined>(undefined);

  const fetchDogImage = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random");

    if (!response.ok)
      throw new Error(
        `fetch error : ${response.status} : ${response.statusText}`
      );

    const dog = await response.json();

    setDog({
      message: dog.message ?? "No dog found",
      status: dog.status ?? "Error",
    });
  };

  useEffect(() => {
    const interval = setInterval(fetchDogImage, 5000);
    return () => {
      clearInterval(interval);
      console.log("Cleared interval");
    }
  }, []);

  if (!dog) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h3>Random dog</h3>
      <img src={dog.message} alt="Random dog" style={{ maxHeight: 300 }} />
    </div>
  );
};

export default RandomDog;
