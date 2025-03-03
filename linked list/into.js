/**
 * 1->2->3->4->5->null
 * insertion at the begining of linked list (LL)
 * Insertion at specific poit in LL 
 * Insertion at the end of LL 
 * 
 * new_node->1->2->3->4->5->null
 */

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

function x(a){
    let newnode = new Node(a)
    newnode.next=head
    head=newnode

}
x(22)

function printlist(head){
let currentNode = head
while (currentNode != null){
    console.log(currentNode.data);
    
    currentNode= currentNode.next
}
}

printlist(head)