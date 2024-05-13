while(true){
    input1=prompt("Do you want to calculate the BMI in which of the following options\n1.kg and cm\n2. kg and feet-inches")
    if(input1==1){
    mass=parseFloat(prompt("Enter your mass in kg: "))
    height=parseFloat(prompt("Enter your height in cm: "))
    
    bmi=mass/(height/100)**2
    }
    if(input1==2){
    mass=parseFloat(prompt("Enter your mass in kg: "))
    height=parseFloat(prompt("Enter your height in feet and inches: "))
    feet=parseInt(height)
    inches=height%1
    height_in_meters=(feet*0.3048)+(inches*0.0254)
    bmi=mass/height_in_meters
    }

    if(bmi<10.5){
        alert("You are under weight")
    }
    else if(bmi<25){
        alert("You are normal bmi")
    }
    else if(bmi<30){
        alert("You are over weight")
    }
    else{
        alert("You are obesse")
    }
    
    flag=prompt("Do you want to continue??Enter yes or no.")
    if(flag=="no")
    {
        break;
    }
    }
