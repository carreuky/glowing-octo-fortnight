import dayjs from 'dayjs';

const categories = ['bills', 'wages', 'purchases'];
const notes = ['Rent', 'Electricity', 'Salary', 'Groceries', 'Office Supplies', 'Internet', 'Fuel', 'Maintenance', 'Travel', 'Food'];

const generateRandomDate = () => {
  const start = new Date(2024, 0, 1);
  const end = new Date();
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
};

const generateRandomAmount = () => {
  return Math.floor(Math.random() * 10000) + 1;
};

const generateRandomCategory = () => {
  return categories[Math.floor(Math.random() * categories.length)];
};

const generateRandomNote = () => {
  return notes[Math.floor(Math.random() * notes.length)];
};

const generateDummyData = (numItems) => {
  const data = [];
  for (let i = 0; i < numItems; i++) {
    data.push({
      key: i + 1, // Add a unique key to each item
      amount: generateRandomAmount().toString(),
      category: generateRandomCategory(),
      date: generateRandomDate().toISOString(),
      note: generateRandomNote(),
    });
  }
  return data;
};

const ExpenseData = generateDummyData(20);

export default ExpenseData;
