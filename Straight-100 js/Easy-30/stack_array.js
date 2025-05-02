// Implement a stack using arrays.

class stack{
    constructor(){
        this.stack=[]
    }
    push(e){
        this.stack.push(e)
    }
    peek(){
        if(this.isEmpty()){
            console.log("stack is empty");
            return null
        }
        return this.stack[this.stack.length-1]
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    print(){
        console.log(this.stack.join(" "));
        
    }
}
const myStack= new stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
console.log(myStack.peek());
myStack.print()