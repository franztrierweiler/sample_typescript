class HelloWorld {
    constructor(message:string) {
        this._message = message;
    }

    private _message:string;

    say():void {
        console.log(this._message);
    }
}

const hello_world = new HelloWorld("Franz");
hello_world.say();