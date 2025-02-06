import React, { useState } from "react";
import "./BMICalculator.css";

const BMICalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue >= 18.5 && bmiValue < 24.9) setCategory("Normal weight");
    else if (bmiValue >= 25 && bmiValue < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <div className="container">
      <div className="card">
        <h2 className="title">BMI Calculator</h2>
        <div className="input-group">
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <button onClick={calculateBMI} className="button">
            Calculate BMI
          </button>
        </div>
        {bmi && (
          <div className="result">
            <p className="bmi-value">Your BMI: {bmi}</p>
            <p className={`category ${category.toLowerCase().replace(" ", "-")}`}>
              {category}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BMICalculator;
