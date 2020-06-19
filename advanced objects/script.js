class Programmer{
    constructor(name, languages, codeeditor) {
        this.name = name;
        this.languages = languages;
        this.codeeditor = codeeditor;
    }
    
   showProfile() {
       console.log(`Name :${this.name}\nLanguages:${this.languages}\nCode Editor:${this.codeeditor}`);
       
    }

}

const p1 = new Programmer("Tanush", "Python, Html, Css, Java, Flutter", "Visual Studi");
console.log(p1);

p1.showProfile();
