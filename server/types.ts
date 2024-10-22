interface election {
  name: string;
  id: number;
}

interface animal {
  id: number;
  name: string;
  image: string;
}

interface vote {
  id: number;
  animalId: number;
  electionId: number;
}
