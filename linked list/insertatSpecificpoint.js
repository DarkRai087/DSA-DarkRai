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

function x(a,data){
    let NewNode= new Node(data)
    NewNode.next = a.next
    a.next = NewNode
}

x(first,7)




function printlist(head){
let currentNode = head
while (currentNode != null){
    console.log(currentNode.data);
    
    currentNode= currentNode.next
}
}

printlist(head)