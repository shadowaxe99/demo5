Sure! Here's an example of complex application divide in modules and components using NextJS:

```javascript
// pages/index.js

import {Header} from '../components/Header';
import {Slider} from '../components/Slider';
import {Footer} from '../components/Footer';

const Index = () => (
  <>
    <Header />
    <Slider />
    <Footer />
  </>
);

export default Index;
```

The Header Component:

```javascript
// components/Header.js

import {useData} from '../hooks/useData';

const Header = () => {
  const data = useData();

  return (
    <header>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </header>
  );
};

export default Header;
```

The Slider Component:

```javascript
// components/Slider.js

import {useData} from '../hooks/useData';

const Slider = () => {
  const data = useData();

  return (
    <section>
      {data.images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} />
        </div>
      ))}
    </section>
  );
};

export default Slider;
```

The Footer Component:

```javascript
// components/Footer.js

import {useData} from '../hooks/useData';

const Footer = () => {
  const data = useData();

  return (
    <footer>
      <p>{data.footerText}</p>
    </footer>
  );
};

export default Footer;
```

Hook for fetching data:

```javascript
// hooks/useData.js

import {useState, useEffect} from 'react';

const useData = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(/api/my-endpoint)
      .then(response => response.json())
      .then(data => setData(data));
  }, []);

  return data;
};

export default useData;
```

In the example above, components are divided logically and each one of them is responsible for a different part of the view: Header for showing the title, Slider for creating a slideshow of images and Footer for displaying footer information. Each component uses a custom hook useData to fetch data needed to populate its view. The components are brought together in the `index.js` file to construct the view for the landing page.