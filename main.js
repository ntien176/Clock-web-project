var foo = {
    bar: true,
    say: function(){
        console.log(this.bar)
    }
}
var say=foo.say;
say()