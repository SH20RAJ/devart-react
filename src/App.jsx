import Content from "./components/Content";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function App() {
  postToIndexNow();

  return (
    <div>
      <Nav/>
      <Content/>
      <Footer/>
    </div>
  )
}


async function postToIndexNow() {
  const url = 'https://api.indexnow.org/IndexNow';
  const data = {
    "host": "devart.terabox.tech",
    "key": "67b1059e89d04c82981cbee130ae538f",
    "keyLocation": "https://devart.terabox.tech/67b1059e89d04c82981cbee130ae538f.txt",
    "urlList": [
      "https://devart.terabox.tech/",
      "https://devart.terabox.tech/devteam/top-7-featured-dev-posts-of-the-week-2751",
      "https://devart.terabox.tech/debapriyadas/cloning-and-running-llama-31-model-from-hugging-face-using-python-3m80"
    ]
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8'
      },
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log('Success:', result);
  } catch (error) {
    console.error('Error:', error);
  }
}

