import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  return (
    <div className="App">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  const [selectedAccordion, setSelectedAccordion] = useState(null);

  const handleSelect = (index) => {
    selectedAccordion === index
      ? setSelectedAccordion(null)
      : setSelectedAccordion(index);
  };

  return (
    <div className="accordion-container">
      {data.map((el, index) => (
        <AccordionItem
          key={index}
          num={index}
          title={el.title}
          text={el.text}
          selectedAccordion={selectedAccordion}
          onClick={() => handleSelect(index)}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text, selectedAccordion, onClick }) {
  const isOpen = num === selectedAccordion;

  return (
    <div className={`item ${isOpen && "open"}`}>
      <p className="number">0{num + 1}</p>
      <div className="item-question-answer">
        <p className="text">{title}</p>
        <p className="content-box">{isOpen && text}</p>
      </div>
      <p className="icon" onClick={onClick}>
        {isOpen ? "-" : "+"}
      </p>
    </div>
  );
}

export default App;
