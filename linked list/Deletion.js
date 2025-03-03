class Node{  constructor(data){
    this.data=data
    this.next=null
}}

let head = new Node(1);
let first= new Node(2);
let second= new Node(3)
let third= new Node(4)

head.next=first
first.next=second
second.next=third

//code
function x(data){
    let newNode= new Node(data)
    let temp =head
    let newhead=head.next
    temp= null;
    

}


function printlist(head){
let currentNode = head
while (currentNode != null){
    console.log(currentNode.data);
    
    currentNode= currentNode.next
}
}

printlist(head)