// var reverseList = function(head) {
//     let prev = null;
//     let curr = head;

//     while (curr !== null) {
//             let next = curr.next;

//             curr.next = prev; 
//             prev = curr; 
//             curr = next; 
//         }
        
//         return prev;
// };

class ListNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}


function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let value of arr) {
        current.next = new ListNode(value);
        current = current.next;
    }

    return dummy.next;
}

function printLinkedList(head) {
    let current = head;

    while (current) {
        process.stdout.write(current.val + " -> ");
        current = current.next;
    }

    console.log("null");
}

var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr !== null) {
        let next = curr.next;

        curr.next = prev;
        prev = curr;
        curr = next;
    }

    return prev;
};

const arr = [1, 2, 3, 4, 5];

const head = createLinkedList(arr);

console.log("Original:");
printLinkedList(head);

const reversed = reverseList(head);

console.log("Reversed:");
printLinkedList(reversed);

// Problem 21 (Merge Two Sorted Lists),

var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let tail = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    if (list1 !== null) {
        tail.next = list1;
    }

    if (list2 !== null) {
        tail.next = list2;
    }

    return dummy.next;
};