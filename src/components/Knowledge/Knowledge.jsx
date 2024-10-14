import React, { useState } from 'react';
import './KnowladgeSection.css'; // Import your CSS styles
import three from "../../assets/three.jpeg"

const KnowladgeSection = () => {
    // State to keep track of the active dropdown and selected options
    const [activeMenu, setActiveMenu] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({
        whatYouGet: 'What You Get',
        extensionTools: 'Extension Tools Software',
        moneyBack: 'Money Back Guarantee',
    });

    // Toggle dropdown visibility
    const handleToggleMenu = (menuName) => {
        setActiveMenu(activeMenu === menuName ? null : menuName);
    };

    // Update selected option for each dropdown
    const handleOptionSelect = (menuName, optionText) => {
        setSelectedOptions({ ...selectedOptions, [menuName]: optionText });
        setActiveMenu(null); // Close the dropdown after selection
    };

    return (
        <section className="knowlage">
            <div className="container">
                <div className="up">
                    <img src={three} alt="img3" />
                </div>
                <div className="down">
                    <div className="one">Service Knowladge</div>
                    <div className="two">Our Interior Design Service Included High Quality Rendering Design</div>
                    <div className="three">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                    <div className="four">
                        {/* Dropdown for 'What You Get' */}
                        <div className={`select-menu ${activeMenu === 'whatYouGet' ? 'active' : ''}`}>
                            <div className="select-btn" onClick={() => handleToggleMenu('whatYouGet')}>
                                <span className="sBtn-text">{selectedOptions.whatYouGet}</span>
                                <i className="bx bx-chevron-down"></i>
                            </div>
                            <ul className="options">
                                <li className="option" onClick={() => handleOptionSelect('whatYouGet', 'opt1')}>
                                    <span className="option-text">opt1</span>
                                </li>
                                <li className="option" onClick={() => handleOptionSelect('whatYouGet', 'opt2')}>
                                    <span className="option-text">opt2</span>
                                </li>
                                <li className="option" onClick={() => handleOptionSelect('whatYouGet', 'opt3')}>
                                    <span className="option-text">opt3</span>
                                </li>
                            </ul>
                        </div>

                        {/* Dropdown for 'Extension Tools Software' */}
                        <div className={`select-menu ${activeMenu === 'extensionTools' ? 'active' : ''}`}>
                            <div className="select-btn" onClick={() => handleToggleMenu('extensionTools')}>
                                <span className="sBtn-text">{selectedOptions.extensionTools}</span>
                                <i className="bx bx-chevron-down"></i>
                            </div>
                            <ul className="options">
                                <li className="option" onClick={() => handleOptionSelect('extensionTools', 'opt1')}>
                                    <span className="option-text">opt1</span>
                                </li>
                                <li className="option" onClick={() => handleOptionSelect('extensionTools', 'opt2')}>
                                    <span className="option-text">opt2</span>
                                </li>
                                <li className="option" onClick={() => handleOptionSelect('extensionTools', 'opt3')}>
                                    <span className="option-text">opt3</span>
                                </li>
                            </ul>
                        </div>

                        {/* Dropdown for 'Money Back Guarantee' */}
                        <div className={`select-menu ${activeMenu === 'moneyBack' ? 'active' : ''}`}>
                            <div className="select-btn" onClick={() => handleToggleMenu('moneyBack')}>
                                <span className="sBtn-text">{selectedOptions.moneyBack}</span>
                                <i className="bx bx-chevron-down"></i>
                            </div>
                            <ul className="options">
                                <li className="option" onClick={() => handleOptionSelect('moneyBack', 'opt1')}>
                                    <span className="option-text">opt1</span>
                                </li>
                                <li className="option" onClick={() => handleOptionSelect('moneyBack', 'opt2')}>
                                    <span className="option-text">opt2</span>
                                </li>
                                <li className="option" onClick={() => handleOptionSelect('moneyBack', 'opt3')}>
                                    <span className="option-text">opt3</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="five">Get a Quote</div>
                </div>
            </div>
        </section>
    );
};

export default KnowladgeSection;
