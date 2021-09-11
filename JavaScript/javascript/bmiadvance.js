function bmiCalculator (weight, height) {
    var res = weight/(height*height);
    var interpretation ="";
    if(res<18.5)
    {
        interpretation = "Your BMI is "+res+", so you are underweight.";
    }
    else if(res>=18.5 && res<=24.9)
    {
        interpretation = "Your BMI is "+res+", so you have a normal weight.";
    }
    else
    {
        interpretation = "Your BMI is "+res+", so you are overweight.";
    }
    return interpretation;
}
