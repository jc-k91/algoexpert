class Node {
    constructor(name) { // do not modify
        this.name = name;
        this.children = [];
    }

    addChild(name) { // do not modify
        this.children.push(new Node(name));
        return this;
    }

    breadthFirstSearch(array) {
        const searched = []

        array.push(this)
        searched.push(this.name)

        for (const node of array) {
            for (const child of node.children) {
                array.push(child)
                searched.push(child.name)
            }
        }

        return searched
    }
}
