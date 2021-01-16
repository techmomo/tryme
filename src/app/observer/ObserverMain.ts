
class GuardObserver {
    subject:Subject
    constructor(subject:Subject){
        this.subject = subject;
        this.subject.setObserver(this); // set the observer
    }
    public update(){
        console.log(this.subject.getMsg());
    }
}

class SecurityGuardObserver {
    subject:Subject
    constructor(subject:Subject){
        this.subject = subject;
        this.subject.setObserver(this); // set the observer
    }
    public update(){
        console.log("SEC:  "+this.subject.getMsg());
    }
}
class Subject{
    _msg:string

    private observer:GuardObserver

    notifyObserver():void{
        this.observer.update();
    }
    public setObserver(observer:GuardObserver){
        this.observer = observer;
    }
    public setMsg(_msg:string){
        this._msg = _msg;
        // call the observer
        this.notifyObserver();
    }
    public getMsg(){
        return this._msg;
    }
}

// this is what the client will do or what we refer to as the subcriber

const subj:Subject = new Subject(); 
const observer:GuardObserver = new GuardObserver(subj);
subj.setMsg("Hello Observer.");
const securityGuardObserver:SecurityGuardObserver = new SecurityGuardObserver(subj);
subj.setMsg("Hello Observer.");

// 
// 1. Observable - possible future values or events expected (group of / bunch of) 
// 2. Observer -  listener
// 3. Subcriber / Subscription - This is the execution of Observables
// 4. Operator - stream methods for performing operations (Pure functions)
// 5. Subject - Publishing / or broadcasting events across Observers
// 6. Schedulers - perform computations based on time intervals

