function skillsMember() {
    var member = {
        name: 'John',
        age: 20,
        skills: ['JS', 'CSS', 'HTML'],
        showSkills: function () {
            this.skills.forEach(function (skill) {
                console.log(this.name + ' knows ' + skill);
            }, this);
        }
    };
    return member;
}