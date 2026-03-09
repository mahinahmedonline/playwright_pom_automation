export class Utils{
    getRandomEmailAddress(){
        const date = Date.now();
        console.log(date);
        const email = `user${date}@example.com`;
        return email;
    }
}
