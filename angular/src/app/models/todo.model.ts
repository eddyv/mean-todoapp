export class ToDo {
    _id: string;
    title: string;
    description: string;
    date: Date;
    status: string;

    constructor() {
        this.title = '';
        this.description = '';
        this.date = new Date();
        this.status = 'New';
    }

    static generateMockToDo(): ToDo {
        return {
            _id: 'new',
            title: '',
            description: '',
            date: new Date(),
            status: ''
        };
    }
}
