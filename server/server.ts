import express from 'express';
import cors from 'cors';
import axios from 'axios';

const app = express();
const PORT = process.env.PORT || 5000;
const GITHUB_RAW_URL = 'https://raw.githubusercontent.com/ArtemIvl/artem-ivliev/main/flickrdata.json';

app.use(cors());

app.get('/api/images', async (req, res) => {
  try {
    const tags = req.query.tags as string || '';  // Ensure tags is treated as a string
    const response = await axios.get(GITHUB_RAW_URL);
    const data = response.data.items;

    const filteredData = tags
      ? data.filter((item: any) =>
          item.tags.split(' ').some((tag: string) => tags.split(',').includes(tag))
        )
      : data;

    res.json({ items: filteredData });
  } catch (error: any) {
    console.error('Error fetching data from GitHub:', error.message);
    res.status(500).json({ error: 'Failed to fetch data: ' + error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
