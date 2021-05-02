
export const calc = (num1,op,num2)=>{
    switch (op) {
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        default:
            return num1/num2;
    }
}