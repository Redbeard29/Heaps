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


class PriorityQueue{
    constructor(){
        this.values = [];
    }
}