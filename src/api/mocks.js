import people from './mocksData/people.json';


export async function getAllPeople() {
  const data = new Promise((resolve, reject) => {
    setTimeout(() => {
      const typedPeople = people;
      resolve(typedPeople);
    }, 0);
  });
  return data;
}
