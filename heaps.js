//Building a Max Binary Heap with capabilities to insert and remove

class MaxBinaryHeap{
    constructor(){
        this.values = [];

    }
    insert(val){
        this.values.push(val);
        this.bubbleUp();
    }
    bubbleUp(){
        var index = this.values.length - 1;
        var value = this.values[index];
        while(index > 0){
            var parentIdx = Math.floor((index - 1)/2);
            var parent = this.values[parentIdx];
            if(value <= parent){
                break;
            }
            this.values[parentIdx] = value;
            this.values[index] = parent;
            index = parentIdx;
        }
    }
    extractMax(){
        var max = this.values[0];
        var end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return max;
    }
    sinkDown(){
        var idx = 0;
        var length = this.values.length;
        var element = this.values[0];
        while(true){
            var leftChildIdx = 2 * idx + 1;
            var rightChildIdx = 2 * idx + 2;
            var leftChild;
            var rightChild;
            var swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild > element){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

var heap = new MaxBinaryHeap();
heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);
heap.insert(1);
heap.insert(45);

console.log(heap.extractMax());


//Building a priority queue with a min binary heap

class Node{
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        var newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        var index = this.values.length - 1;
        var val = this.values[index];
        while(index > 0){
            var parentIdx = Math.floor((index - 1)/2);
            var parent = this.values[parentIdx];
            if(val.priority >= parent.priority){
                break;
            }
            this.values[parentIdx] = val;
            this.values[index] = parent;
            index = parentIdx;
        }
    }
    dequeue(){
        var min = this.values[0];
        var end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        var idx = 0;
        var length = this.values.length;
        var element = this.values[0];
        while(true){
            var leftChildIdx = 2 * idx + 1;
            var rightChildIdx = 2 * idx + 2;
            var leftChild;
            var rightChild;
            var swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)){
                    swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

var ER = new PriorityQueue();

ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);

console.log(ER.dequeue());