//fetching all events data from firebase
export async function getAllEvents() {
  const response = await fetch(
    "https://nextjs-course-61fce-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();

  //firebaseのデータはオブジェクトでくるからトランスフォームする
  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      //spread operator and just copy everything from data for the given key
      ...data[key]
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter((event) => event.isFeatured);
}
