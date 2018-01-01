import moment from 'moment';

export default [{
    id: '1',
    description: 'Gumm',
    note: '',
    amount: 150,
    createdAt: 0
}, {
id: '2',
    description: 'Noodles',
    note: '',
    amount: 15000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf()
}];