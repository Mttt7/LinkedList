class Node{
    constructor(value,next){
        this.value = value
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
        this.length = 0
    }

    insertAtHead(data){
        const newNode = new Node(data,this.head)
        this.head = newNode
        this.length++
    }

    getByIndex(index){
        if(index<0 || index>=this.length){ 
            console.log('No such index! ')
            return null 
        }
        else{
            let current = this.head
            for(let i = 0; i<index;i++){
                current = current.next
            }
            return current
        }
    }

    insertAtIndex(index,value){
        if(index<0 || index>this.length){
            console.log('No such index! ', 'insertAtIndex(index, value)')
            return
        }
        if(index===0){
            const newNode = new Node(value,this.head)  
            this.head = newNode
            this.length++
        } else{
            let current = this.head
            for(let i = 0; i<index-1;i++){
                current = current.next
            }
            current.next=new Node(value,current.next)
            this.length++
        }
        
    }

    removeHead(){
        
        const newHead = this.head.next
        this.head.next=null
        this.head=newHead
        this.length--
    }

    removeAtIndex(index){
        if(index===0) this.removeHead()
        else if(index<0 || index>=this.length) return
        else{
            let current = this.head
            for(let i = 0;i<index-1;i++){
                current = current.next
            }
            const toDel  = current.next
            current.next=toDel.next
            toDel.next=null
            this.length--
        }

    }

    print(){
        let current = this.head
        for(let i=0;i<this.length;i++){
            process.stdout.write(current.value + '->');
            
            current = current.next
        }
        process.stdout.write('null');
        console.log()
        
    }

    

}





LinkedList.fromValues = function(...values){
    const ll = new LinkedList()
    for(let i =values.length - 1; i>=0;i--){
        ll.insertAtHead(values[i])
    }
    return ll
}



module.exports = LinkedList