import React from 'react';
import PropTypes from 'prop-types';
import './BlogLayout.css'; // Import a separate CSS file for styling
import Navbar from '../Navbar/Navbar';

const BlogLayout = ({ sections }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth', // 'smooth' for smooth scrolling animation
      });
    }
  };

  return (
    <div>
      <div className='pb-8'>
        <Navbar> </Navbar>
      </div>
      <div className="flex">
        {/* Left-hand side with 25% width and fixed height for scrolling */}
        <div className="w-1/4 p-4 scrollable-side">
          <h3>Index</h3>
          <ol>
            {sections.map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`} onClick={() => scrollToSection(section.id)}>
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </div>

        {/* Main content with 75% width and fixed height for scrolling */}
        <div className="w-3/4 p-4 scrollable-side" id="main-content">
          {sections.map((section) => (
            <section key={section.id} id={section.id}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

BlogLayout.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BlogLayout;



// <BlogLayout sections={[
//   {
//     id: 'section1',
//     title: 'Section 1',
//     content: 'Content for Section 1 ontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio o Lorem ipsum dol  or sit amet, consectetu   r adipiscing elit. ...',
//   },
//   {
//     id: 'section2',
//     title: 'Section 2',
//     content: 'C ontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio oontent for Section 2 N ullam accumsan, orci Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio odio distError quis debitis rerum, nesciunt ab recusandae dolorem maxime! Quod pariatur officia perferendis natus sint voluptates magni praesentium nostrum excepturi a commodo dapibus, enim libero tristique urna. ...',
//   },
  
// ]} />