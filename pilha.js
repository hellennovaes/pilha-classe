class VisualStack {
    constructor(elementId) {
        this.stack = [];
        this.stackElement = document.getElementById(elementId);
        this.sizeElement = document.getElementById('contador');
        this.renderStack();
    }

    renderStack() {
        this.stackElement.innerHTML = '';
        this.stack.forEach((item, index) => {
            const element = document.createElement('div');
            element.className = 'elemento';
            element.textContent = item;
            this.stackElement.appendChild(element);
        });
        this.sizeElement.textContent = `número: ${this.stack.length}`;
    }

    push() {
        const value = prompt("insira o número na pilha:");
        if (value) {
            this.stack.push(value);
            this.renderStack();
        }
    }

    pop() {
        this.stack.pop();
        this.renderStack();
    }
}

const stack = new VisualStack('valor');