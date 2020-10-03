const testFunctions = require('./functionsForTestiong')

test('adds 1 + 2 to equal 3', () => {
    expect(testFunctions.sum(1, 2)).toBe(3);
});

test('returen user info', async () => {
    const userInfo = await testFunctions.getUserInfo();
    expect(userInfo).toStrictEqual({
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
            street: 'Victor Plains',
            suite: 'Suite 879',
            city: 'Wisokyburgh',
            zipcode: '90566-7771',
            geo: { lat: '-43.9509', lng: '-34.4618' }
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
            name: 'Deckow-Crist',
            catchPhrase: 'Proactive didactic contingency',
            bs: 'synergize scalable supply-chains'
        }
    });
});

test('Timeout function return ms', () => {
    testFunctions.myTimerWithCallBack(2000, (err, data) => {
        expect(data).tobe(2000);
    });
});