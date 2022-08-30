const dummyData = [
  {
    id: 1,
    type: "command",
    title: "Delete Day",
  },
  {
    id: 2,
    type: "day",
    title: "Performed the play",
    tags: ["scared", "proud"],
    date: "19 Sep 2022",
  },
  {
    id: 3,
    type: "day",
    title: "Was congratulated for my acting",
    tags: ["happy", "proud"],
    date: "20 Sep 2022",
  },
  {
    id: 4,
    type: "dream",
    title: "Dreamt of climbing a mountain",
    tags: ["scared", "excited"],
    date: "28 Oct 2022",
  },
];

export function filterData(searchPhrase) {
  const newData = dummyData.filter((entry) => {
    if (entry["title"].toLowerCase().includes(searchPhrase.toLowerCase())) {
      return true;
    }
  });
  return newData;
}
